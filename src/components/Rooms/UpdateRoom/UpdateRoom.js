import React from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useRooms from '../../../Hooks/useRooms';
import { Button } from 'react-bootstrap';

const UpdateRoom = () => {
    const { register, handleSubmit } = useForm();
    const { roomId } = useParams();
    const navigation = useHistory();
    const [ rooms ] = useRooms();
    const selectedRoom = rooms.find( room => room._id === roomId );



    const onSubmit = data => {
        console.log( data );
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
                <input defaultValue={ selectedRoom?.status } type="text" { ...register( "status", { required: true } ) } />
                <br /><br />
                <input className="btn btn-success me-3" type="submit" />
                <Button className="btn btn-danger" onClick={ () => navigation.goBack() }>Go Back</Button>
            </form>
        </div>
    );
};

export default UpdateRoom;