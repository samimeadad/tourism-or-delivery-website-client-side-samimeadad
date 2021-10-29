import React from 'react';
import Banner from './Banner';
import DatePicker from './DatePicker';
import PremiumRooms from './PremiumRooms';
import Services from './Services';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <DatePicker></DatePicker>
            <PremiumRooms></PremiumRooms>
            <Services></Services>
        </div>
    );
};

export default Home;