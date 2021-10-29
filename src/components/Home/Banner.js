import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../images/banner/1.png';
import banner2 from '../../images/banner/2.png';
import banner3 from '../../images/banner/3.png';
import banner4 from '../../images/banner/4.png';
import banner5 from '../../images/banner/5.png';

const Banner = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ banner1 }
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>GRAND SCALE PROPERTY</h1>
                        <h3>ENJOY A MAGNIFICENT STAY AT THE LARGE-SCALE PROPERTY OF BAY VIEW. LET THE VASTNESS OF OUR VENUE BE THE PART OF YOUR PLEASURE RETREAT</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ banner5 }
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h1>INFINITY POOL</h1>
                        <h3>THE INFINITY POOL ON LEVEL FOUR HAS THE MOST STUNNING VIEW OF THE OCEAN AS YOU CAN VIEW THE VAST OCEAN OVER THE EDGE OF THE POOL GIVING YOU A FEELING THAT YOU ARE RIGHT IN THE MIDDLE OF THE OCEAN.</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ banner3 }
                        alt="Third slide"
                    />

                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ banner4 }
                        alt="Fourth slide"
                    />
                    <Carousel.Caption>
                        <h1>ROOMS</h1>
                        <h3>OFFERING A GENEROUS 500 SQUARE FEET OF SPACE, INFINITY SEA VIEW ROOMS HAVE A KING BED FOR A REFRESHING AND RESTFUL NIGHT’S SLEEP. ROOMS HAVE A SPACIOUS BALCONY THAT OPENS TO A POOL VIEW AND INFINITY SEA VIEW.</h3>
                    </Carousel.Caption>
                </Carousel.Item>

                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={ banner2 }
                        alt="Fourth slide"
                    />

                </Carousel.Item>
            </Carousel>
        </div >
    );
};

export default Banner;