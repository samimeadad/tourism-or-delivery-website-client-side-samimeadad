import React from 'react';
import { useForm } from "react-hook-form";
import { Row, Col, Button } from 'react-bootstrap';
import placeOrderImage from '../../images/place-order.png';
import useAuth from '../../Hooks/useAuth';
import { useHistory } from 'react-router-dom';

const PlaceOrder = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const { user } = useAuth();
    const navigation = useHistory();
    const onSubmit = data => console.log( data );
    console.log( watch( "order" ) );

    return (
        <div className="container my-5">
            <h1 className=" text-center fw-bold text-primary">Book the Room</h1>
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                    <img src={ placeOrderImage } alt="placeOrderImage" className="img-fluid" />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                    <form onSubmit={ handleSubmit( onSubmit ) } className="mt-5 pt-4">
                        {/* register your input into the hook by invoking the "register" function */ }
                        <input defaultValue={ user?.displayName } { ...register( "name" ) } />
                        <br />
                        <br />
                        {/* include validation with required or other standard HTML validation rules */ }
                        <input defaultValue={ user?.email } { ...register( "email", { required: true } ) } />
                        <br />
                        <br />
                        <input placeholder="Address" { ...register( "address", { required: true } ) } />
                        <br />
                        <br />
                        <input placeholder="National ID" { ...register( "nid", { required: true } ) } />
                        <br />
                        <br />
                        <input placeholder="Phone Number" { ...register( "phone", { required: true } ) } />
                        <br />
                        <br />
                        <Button className="btn btn-danger me-3" onClick={ () => navigation.goBack() }>Go Back</Button>
                        <input type="submit" className="btn btn-success" />
                        <br />
                        <br />
                        {/* errors will return when field validation fails  */ }
                        { errors.exampleRequired && <span className="text-danger fw-bold">This field is required</span> }
                    </form>
                </Col>
            </Row>
        </div>
    );
};

export default PlaceOrder;