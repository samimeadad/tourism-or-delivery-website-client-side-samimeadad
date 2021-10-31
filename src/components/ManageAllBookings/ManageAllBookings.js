import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import useBookings from '../../Hooks/useBookings';

const ManageAllBookings = () => {
    const [ bookings, setBookings ] = useBookings();

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
        <div className="text-center my-5 w-75 mx-auto">
            <h1 className="text-primary mb-5">Manage All Bookings Here</h1>
            <div>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Guest Name</th>
                            <th>Guest Email</th>
                            <th>Room Type</th>
                            <th>Current Status</th>
                            <th>Edit Status</th>
                            <th>Remove Booking</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings.map( booking => <tr key={ booking._id } >
                                <td>{ booking.name }</td>
                                <td>{ booking.email }</td>
                                <td>{ booking.roomType }</td>
                                <td>{ booking.status }</td>
                                <td><Link to={ `/bookings/update/${ booking._id }` }><Button className="btn btn-success ms-3"><FontAwesomeIcon icon={ faEdit } /></Button></Link></td>
                                <td><Button onClick={ () => handleDeleteBooking( booking._id ) } className="btn btn-danger ms-3"><FontAwesomeIcon icon={ faTrash } /></Button></td>
                            </tr> )
                        }

                    </tbody>
                </Table>
            </div>
        </div >
    );
};

export default ManageAllBookings;