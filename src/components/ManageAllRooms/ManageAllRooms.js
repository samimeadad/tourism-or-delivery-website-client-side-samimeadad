import React from 'react';
import { Button, Table } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import useRooms from '../../Hooks/useRooms';

const ManageAllRooms = () => {
    const [ rooms ] = useRooms();

    return (
        <div className="text-center my-5 w-50 mx-auto">
            <h1 className="text-primary mb-5">Manage All Rooms Here</h1>
            <div>
                <Table striped bordered responsive>
                    <thead>
                        <tr>
                            <th>Room Type</th>
                            <th>Edit the Room Details</th>
                            <th>Remove the Room</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            rooms.map( room => <tr>
                                <td>{ room.type }</td>
                                <td><Button className="btn btn-success ms-3"><FontAwesomeIcon icon={ faEdit } /></Button></td>
                                <td><Button className="btn btn-danger ms-3"><FontAwesomeIcon icon={ faTrash } /></Button></td>
                            </tr> )
                        }

                    </tbody>
                </Table>
            </div>
        </div>
    );
};

export default ManageAllRooms;