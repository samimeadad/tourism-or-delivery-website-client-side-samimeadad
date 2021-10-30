import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import useRooms from '../../../Hooks/useRooms';

const PrivateRoom = () => {
    const { roomId } = useParams();
    const [ rooms ] = useRooms();
    const privateRoom = rooms.find( room => roomId === room.key );
    const navigation = useHistory();

    return (
        <div className="container my-5">
            <h1 className="text-dark my-3 p-3"><span className="text-danger fw-bold">{ privateRoom?.type }</span> Room Overview in Details</h1>
            <Card className="px-5 py-2">
                <Card.Img variant="top" src={ privateRoom?.image } className="img-fluid" style={ { width: '400px' } } />
                <Card.Body>
                    <Card.Title className="fs-1">{ privateRoom?.type }</Card.Title>
                    <hr className="text-secondary" />
                    <Card.Text>
                        <p>{ privateRoom?.description }</p>
                        <hr className="text-secondary" />
                        <p><b>Room Cost:   </b>BDT. { privateRoom?.price }</p>
                        <hr className="text-secondary" />
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    <Button className="btn btn-danger me-3" onClick={ () => navigation.goBack() }>Go Back</Button>
                    <Link to="/placeOrder"><Button className="btn btn-success">Place Order</Button></Link>
                </Card.Footer>
            </Card>

        </div >
    );
};

export default PrivateRoom;