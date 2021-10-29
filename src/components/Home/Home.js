import React from 'react';
import Banner from './Banner';
import DatePicker from './DatePicker';
import PremiumRooms from './PremiumRooms';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DatePicker></DatePicker>
            <PremiumRooms></PremiumRooms>
        </div>
    );
};

export default Home;