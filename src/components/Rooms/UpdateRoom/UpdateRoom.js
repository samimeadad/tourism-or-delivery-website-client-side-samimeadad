import React from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";
import useRooms from '../../../Hooks/useRooms';

const UpdateRoom = () => {
    const { register, handleSubmit } = useForm();
    const { roomId } = useParams();
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
            <h1>Please Update the Room Status for <span className="text-primary">{ selectedRoom?.type }</span></h1>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <input defaultValue={ selectedRoom?.status } type="text" { ...register( "status", { required: true } ) } />
                <br /><br />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default UpdateRoom;