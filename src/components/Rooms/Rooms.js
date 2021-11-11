import React from 'react';
import { Row } from 'react-bootstrap';
import useRooms from '../../Hooks/useRooms';
import Room from './Room/Room';

//all rooms (rooms and suits page)
const Rooms = () => {
    const [ rooms ] = useRooms();

    return (
        <Row className="container mx-auto my-5">
            <h1 className=" text-center fw-bold text-primary">Our Rooms</h1>
            <Row className="g-4">
                {
                    rooms.map( room => <Room
                        key={ room.key }
                        room={ room }>
                    </Room> )
                }
            </Row>
            <hr className="mx-2 my-5 text-info" />
        </Row >
    );
};

export default Rooms;