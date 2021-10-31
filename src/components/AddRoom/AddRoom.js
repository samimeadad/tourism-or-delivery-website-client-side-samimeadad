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
            <h2 className="text-primary fw-bold my-5">Please Input a Room Detail Below and Submit to Add</h2>
            <form onSubmit={ handleSubmit( onSubmit ) }>
                <input type="text" { ...register( "key", { required: true } ) } placeholder="Key Identity (Number)" className="w-50" />
                <br /><br />
                <input type="text" { ...register( "type", { required: true, maxLength: 20 } ) } placeholder="Room Type" className="w-50" />
                <br /><br />
                <textarea { ...register( "description", { required: true } ) } placeholder="Description" className="w-50" />
                <br /><br />
                <input type="text" { ...register( "price", { required: true } ) } placeholder="Price" className="w-50" />
                <br /><br />
                <input type="text" { ...register( "premium", { required: true } ) } placeholder="Premium or Not: True/False" className="w-50" />
                <br /><br />
                <input { ...register( "img" ) } placeholder="Image URL" className="w-50" />
                <br /><br />
                <input className="btn btn-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddRoom;