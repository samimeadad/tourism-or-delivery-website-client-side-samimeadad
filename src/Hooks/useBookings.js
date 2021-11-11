import { useEffect, useState } from "react";

// custom hook for Rooms api call
const useBookings = () => {
    const [ bookings, setBookings ] = useState( [] );

    useEffect( () => {
        fetch( 'https://guarded-peak-27154.herokuapp.com/bookings' )
            .then( res => res.json() )
            .then( data => setBookings( data ) );
    }, [] );

    //return rooms state variable and setRooms function
    return [ bookings, setBookings ];
}

//export the entire function for external use
export default useBookings;