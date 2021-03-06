import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import { Button } from 'react-bootstrap';
import useBookings from '../../Hooks/useBookings';


//update the booking status to approved.
const UpdateBooking = () => {
    const { register, handleSubmit } = useForm();
    const { bookingId } = useParams();
    const navigation = useHistory();
    const [ bookings ] = useBookings();
    const selectedBooking = bookings.find( booking => booking._id === bookingId );

    const onSubmit = data => {
        const url = `https://guarded-peak-27154.herokuapp.com/bookings/${ bookingId }`;
        fetch( url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify( data )
        } )
            .then( res => res.json() )
            .then( data => {
                if ( data.modifiedCount > 0 ) {
                    alert( 'Status Update Successful' );
                    window.location.reload();
                }
            } )
    }

    return (
        <div className="text-center my-5">
            <h2 className="fw-bold text-primary">Guest Name: <span className="text-danger">{ selectedBooking?.name }</span></h2>
            <p className="fw-bold text-primary">Guest Name: <span className="text-danger">{ selectedBooking?.roomType }</span></p>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <input placeholder="pending" defaultValue={ selectedBooking?.status } type="text" { ...register( "status", { required: true } ) } />
                <br /><br />
                <Button className="btn btn-danger me-3" onClick={ () => navigation.goBack() }>Go Back</Button>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default UpdateBooking;