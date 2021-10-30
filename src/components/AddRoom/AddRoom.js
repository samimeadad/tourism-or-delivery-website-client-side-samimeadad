import React from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";

const AddRoom = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async data => {
        await axios.post( 'https://guarded-peak-27154.herokuapp.com/rooms', data )
            .then( res => {
                if ( res.data.insertedId ) {
                    alert( 'Room Data Added' );
                    reset();
                }
            } )
    }

    return (
        <div className="text-center mx-auto my-5">
            <h2>Please Add a Service</h2>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <input type="number" { ...register( "key", { required: true } ) } placeholder="Key Identity" />
                <br /><br />
                <input type="text" { ...register( "type", { required: true, maxLength: 20 } ) } placeholder="Room Type" />
                <br /><br />
                <textarea { ...register( "description", { required: true } ) } placeholder="Description" col="5" row="10" />
                <br /><br />
                <input type="number" { ...register( "price", { required: true } ) } placeholder="Price" />
                <br /><br />
                <input type="text" { ...register( "premium", { required: true } ) } placeholder="Premium or Not: True/False" />
                <br /><br />
                <input type="text" { ...register( "status", { required: true } ) } placeholder="Pending/Approved" />
                <br /><br />
                <input { ...register( "img" ) } placeholder="Image URL" />
                <br /><br />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddRoom;