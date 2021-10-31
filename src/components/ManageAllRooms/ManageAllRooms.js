import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import useRooms from '../../Hooks/useRooms';
import { Link } from 'react-router-dom';

const ManageAllRooms = () => {
    const [ rooms, setRooms ] = useRooms();

    //DELETE a Room
    const handleDeleteRoom = id => {
        const proceed = window.confirm( "Are you sure to delete the Room data?" );
        if ( proceed ) {
            const url = `https://guarded-peak-27154.herokuapp.com/rooms/${ id }`;
            fetch( url, {
                method: 'DELETE'
            } )
                .then( res => res.json() )
                .then( data => {
                    if ( data.deletedCount > 0 ) {
                        const remainingRooms = rooms.filter( room => parseInt( room._id ) !== parseInt( id ) );
                        setRooms( remainingRooms );
                        alert( 'Room Data Deleted Successfully' );
                        window.location.reload( false );
                    }
                } )
        }
    }

    return (
        <div className="text-center my-5 w-50 mx-auto">
            <h1 className="text-primary mb-5">Manage All Rooms Here</h1>
            <div>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Room Type</th>
                            <th>Edit Room Details</th>
                            <th>Remove Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.map( room => <tr>
                                <td>{ room.type }</td>
                                <td><Link to={ `/rooms/update/${ room._id }` }><Button className="btn btn-success ms-3"><FontAwesomeIcon icon={ faEdit } /></Button></Link></td>
                                <td><Button onClick={ () => handleDeleteRoom( room._id ) } className="btn btn-danger ms-3"><FontAwesomeIcon icon={ faTrash } /></Button></td>
                            </tr> )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllRooms;