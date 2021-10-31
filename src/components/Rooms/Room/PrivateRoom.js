import React from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useRooms from '../../../Hooks/useRooms';
import { useForm } from "react-hook-form";
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const PrivateRoom = () => {
    const { roomId } = useParams();
    const [ rooms ] = useRooms();
    const { user } = useAuth();

    const selectedRoom = rooms.find( room => room._id === roomId );
    const navigation = useHistory();
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const onSubmit = async data => {
        console.log( data );
        await axios.post( 'https://guarded-peak-27154.herokuapp.com/bookings', data )
            .then( res => {
                if ( res.data.insertedId ) {
                    alert( 'Your booking is confirmed' );
                    reset();
                }
            } )
    };

    return (
        <div className="container my-5">
            <h1 className="text-dark my-5"><span className="text-danger fw-bold">{ selectedRoom?.type }:</span> <span className="text-primary fw-bold">Detail Room Overview & Place Order</span></h1>
            <Row className="gx-5">
                <Col xs={ 12 } sm={ 12 } md={ 8 } lg={ 8 }>
                    <Card className="px-5 py-2">
                        <Card.Img variant="top" src={ selectedRoom?.image } className="img-fluid" style={ { width: '400px' } } />
                        <Card.Body>
                            <Card.Title className="fs-2">{ selectedRoom?.type }</Card.Title>
                            <hr className="text-secondary" />
                            <Card.Text>
                                <p>{ selectedRoom?.description }</p>
                                <hr className="text-secondary" />
                                <p><b>Room Cost:</b> BDT. { selectedRoom?.price }</p>
                                <hr className="text-secondary" />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>

                    <form onSubmit={ handleSubmit( onSubmit ) } className="mx-5">
                        <p className="fw-bold text-danger">Please submit the below form to confirm the booking</p>
                        <input placeholder="Room Type" type="text" { ...register( "roomType", { required: true } ) } />
                        <br />
                        <br />
                        <input placeholder="Room Cost" type="text" { ...register( "roomPrice", { required: true } ) } />
                        <br />
                        <br />
                        <input type="text" defaultValue={ user?.displayName } { ...register( "name", { required: true } ) } />
                        <br />
                        <br />
                        <input type="email" defaultValue={ user?.email } { ...register( "email", { required: true } ) } />
                        <br />
                        <br />
                        <input type="text" placeholder="Address" { ...register( "address", { required: true } ) } />
                        <br />
                        <br />
                        <input type="text" placeholder="National ID" { ...register( "nid", { required: true } ) } />
                        <br />
                        <br />
                        <input type="text" placeholder="Phone Number" { ...register( "phone", { required: true } ) } />
                        <br />
                        {/* errors will return when field validation fails  */ }
                        { errors.address && <span className="text-danger fw-bold">This field is required</span> }
                        <br /><br />
                        <Button className="btn btn-danger me-3" onClick={ () => navigation.goBack() }>Go Back</Button>
                        <input type="submit" className="btn btn-success" />
                    </form>
                </Col>
            </Row>
        </div >
    );
};

export default PrivateRoom;