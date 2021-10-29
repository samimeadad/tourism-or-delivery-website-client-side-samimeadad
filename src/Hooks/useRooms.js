import { useEffect, useState } from "react";

// custom hook for Rooms api call
const useRooms = () => {
    const [ rooms, setRooms ] = useState( [] );

    useEffect( () => {
        fetch( '/rooms.json' )
            .then( res => res.json() )
            .then( data => setRooms( data ) );
    }, [] );

    //return rooms state variable and setRooms function
    return [ rooms, setRooms ];
}

//export the entire function for external use
export default useRooms;