import React from 'react';
import { Col, Row } from 'react-bootstrap';
import masterBedroom from '../../images/services/master-bedroom.png';
import seaView from '../../images/services/sea-view.png';
import healthClub from '../../images/services/health-club.jpg';
import wifiCoverage from '../../images/services/wifi-coverage.png';
import awesomePackages from '../../images/services/awesome-packages.png';
import cleaningEverday from '../../images/services/cleaning-everyday.png';
import buffetBreakfast from '../../images/services/buffet-breakfast.png';
import airportTaxi from '../../images/services/airport-taxi.png';

const Services = () => {
    return (
        <div className="container my-5">
            <h1 className="text-center fw-bold text-dark mb-5">Our Services</h1>
            <Row className="mb-3">
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ masterBedroom } alt="" className="img-fluid" />
                        <h6 className="mt-2">MASTER BEDROOMS</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ seaView } alt="" className="img-fluid" />
                        <h6 className="mt-2">SEA VIEW ROOMS</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ healthClub } alt="" className="img-fluid" />
                        <h6 className="mt-2">HEALTH CLUB</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ wifiCoverage } alt="" className="img-fluid" />
                        <h6 className="mt-2">FULL WIFI COVERAGE</h6>
                    </div>
                </Col>
            </Row>
            <Row className="mb-5">
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ awesomePackages } alt="" className="img-fluid" />
                        <h6 className="mt-2">AWESOME PACKAGES</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ cleaningEverday } alt="" className="img-fluid" />
                        <h6 className="mt-2">CLEANING EVERDAY</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ buffetBreakfast } alt="" className="img-fluid" />
                        <h6 className="mt-2">BUFFET BREAKFAST</h6>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 3 } lg={ 3 }>
                    <div className="text-center">
                        <img src={ airportTaxi } alt="" className="img-fluid" />
                        <h6 className="mt-2">AIRPORT TAXI</h6>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Services;