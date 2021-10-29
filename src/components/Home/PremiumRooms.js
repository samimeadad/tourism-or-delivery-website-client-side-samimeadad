import React from 'react';
import { Row } from 'react-bootstrap';
import useRooms from '../../Hooks/useRooms';
import Room from '../Rooms/Room/Room';

const PremiumRooms = () => {
    const [ rooms ] = useRooms();
    const premiumRooms = rooms.filter( room => room.premium === true );
    console.log( premiumRooms );

    return (
        <Row className="container mx-auto my-5">
            <h1 className=" text-center fw-bold text-dark">Our Premium Rooms</h1>
            <Row className="g-4">
                {
                    premiumRooms.map( room => <Room
                        key={ room.key }
                        room={ room }>
                    </Room> )
                }
            </Row>
        </Row >
    );
};

export default PremiumRooms;