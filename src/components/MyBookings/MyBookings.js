import React from 'react';
import { Button, Table } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import useBookings from '../../Hooks/useBookings';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const MyBookings = () => {
    const { user } = useAuth();
    const [ bookings, setBookings ] = useBookings();
    const userAllBookings = bookings.filter( booking => booking?.email === user?.email )

    //DELETE a Booking
    const handleDeleteBooking = id => {
        const proceed = window.confirm( "Are you sure to delete the booking data?" );
        if ( proceed ) {
            const url = `https://guarded-peak-27154.herokuapp.com/bookings/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        const remainingBookings = bookings.filter( booking => parseInt( booking._id ) !== parseInt( id ) );
                        setBookings( remainingBookings );
                        alert( 'Booking Data Deleted Successfully' );
                        window.location.reload( false );
                    }
                } )
        }
    }

    return (
        <div className="text-center my-5 w-50 mx-auto">
            <h1 className="text-primary fw-bold mb-5">Bookings for <span className="text-danger">{ user?.displayName }</span></h1>
            <div>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Guest Name</th>
                            <th>Guest Email</th>
                            <th>Room Type</th>
                            <th>Remove Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            userAllBookings.map( booking => <tr>
                                <td>{ booking.name }</td>
                                <td>{ booking.email }</td>
                                <td>{ booking.roomType }</td>
                                <td><Button onClick={ () => handleDeleteBooking( booking._id ) } className="btn btn-danger ms-3"><FontAwesomeIcon icon={ faTrash } /></Button></td>
                            </tr> )
                        }

                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default MyBookings;