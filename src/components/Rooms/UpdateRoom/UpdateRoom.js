import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";

const UpdateRoom = () => {
    const { register, handleSubmit } = useForm();
    const { roomId } = useParams();
    const [ room, setRoom ] = useState( {} );

    useEffect( () => {
        const url = `https://guarded-peak-27154.herokuapp.com/rooms/${ roomId }`;
        fetch( url )
            .then( res => res.json() )
            .then( data => setRoom( data ) )
    }, [ roomId ] );

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
                    setRoom( {} );
                }
            } )
    }


    return (
        <div className="text-center my-5">
            <h1>Please Update the Room Status for { room.type }</h1>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <input defaultValue={ room.status } type="text" { ...register( "status", { required: true } ) } />
                <br /><br />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default UpdateRoom;