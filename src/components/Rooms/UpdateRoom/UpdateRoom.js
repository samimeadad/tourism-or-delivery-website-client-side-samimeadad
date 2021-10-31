import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useRooms from '../../../Hooks/useRooms';
import { Button } from 'react-bootstrap';

const UpdateRoom = () => {
    const { register, handleSubmit } = useForm();
    const { roomId } = useParams();
    const [ rooms ] = useRooms();
    const navigation = useHistory();
    const selectedRoom = rooms.find( room => room._id === roomId );



    const onSubmit = data => {
        const url = `https://guarded-peak-27154.herokuapp.com/rooms/${ roomId }`;
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
                    alert( 'Update Successful' );
                    window.location.reload();
                }
            } )
    }

    return (
        <div className="text-center my-5">
            <h2>Please Update the Room Status for <span className="text-primary">{ selectedRoom?.type }</span></h2>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <label className="text-primary fw-bold me-3" htmlFor="type">Room Type: </label>
                <input defaultValue={ selectedRoom?.type } type="text" { ...register( "type", { required: true } ) } />
                <br /><br />
                <label className="text-primary fw-bold me-3" htmlFor="type">Description: </label>
                <input defaultValue={ selectedRoom?.description } type="text" { ...register( "description", { required: true } ) } />
                <br /><br />
                <label className="text-primary fw-bold me-3" htmlFor="type">Room Fare: </label>
                <input defaultValue={ selectedRoom?.price } type="text" { ...register( "price", { required: true } ) } />
                <br /><br />
                <Button className="btn btn-danger me-3" onClick={ () => navigation.goBack() }>Go Back</Button>
                <input className="btn btn-success" type="submit" />
            </form>
        </div>
    );
};

export default UpdateRoom;