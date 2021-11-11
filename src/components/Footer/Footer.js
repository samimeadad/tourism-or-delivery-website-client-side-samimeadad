import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';

const Footer = () => {
    return (
        <footer className="bg-dark text-light p-5">
            <div className="text-center">
                <img style={ { width: '200px' } } src={ logo } alt="logoImage" className="img-fluid" />
            </div>
            <div className="container my-5">
                <p className="text-justify text-light">
                    Bay View Hotel & Resort is a well known destination for everybody who expects a great hospitality and pleasured atmosphere. Bay View is located centrally in the city's business hub with close proximity to the Cox's Bazar Sea Beach. Beach view right from the room is key to the Great Escape experience at the Bay view and accommodation is extremely important to us and we promise to ensure all guests have the best experience possible with comfort, quality and relaxation being essential.
                </p>
            </div>
            <div className="container">
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-primary mb-5 fw-bold">Our Locations</h3>
                        <p className="text-justify text-light ms-3">
                            <span>Cox's Bazar, Bangladesh</span>
                            <br />
                            <span>Kuakata, Bangladesh</span>
                            <br />
                            <span>Sylhet, Bangladesh</span>
                            <br />
                            <span>Goa, India</span>
                            <br />
                            <span>Mumbai, India</span>
                            <br />
                            <span>Visakhapatnam, India</span>
                        </p>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <div className="ms-4">
                            <h3 className="text-primary mb-5 fw-bold text-center">About Bay View</h3>
                            <p className="text-justify text-light">Experience the future of eco-friendly luxury at the Bay View Hotel & Resort, a 5 star hotel in Cox's Bazar, Bangladesh that spares no detail in making guests feel pampered. Built in a romantic Spanish architectural style, this luxurious seaside resort combines the adventure of onsite water sports with the soothing atmosphere of a spa retreat.</p>
                        </div>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 } className="text-center">
                        <h3 className="text-primary mb-5 fw-bold">Our Services</h3>
                        <p>
                            <span>Spa</span>
                            <br />
                            <span>Rooms</span>
                            <br />
                            <span>Restaurant</span>
                            <br />
                            <span>Gym</span>
                            <br />
                            <span>Infinity Pool</span>
                            <br />
                            <span>Meetings & Banquets</span>
                            <br />
                        </p>
                    </Col>
                </Row>
            </div>
            <div className="mt-5 text-center text-primary">
                <div className="mb-5 text-warning w-25 mx-auto">
                    <span><i class="fas fa-tty me-3"></i>+88 09610 999 999</span>
                    <br />
                    <span><i class="fas fa-mobile-alt me-3"></i>+880 1711 000000</span>
                    <br />
                    <span><i class="fab fa-whatsapp me-3"></i>+880 1711 000000</span>
                    <br />
                    <span><i class="far fa-envelope me-3"></i>contact@hotelbayview.com</span>
                    <br />
                </div>
                <div>
                    <Link to={ { pathname: "https://www.facebook.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-facebook me-3" data-toggle="tooltip" title="Facebook"></i></Link>
                    <Link to={ { pathname: "https://www.twitter.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-twitter me-3" data-toggle="tooltip" title="Twitter"></i></Link>
                    <Link to={ { pathname: "https://www.linkedin.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fa fa-linkedin me-3" data-toggle="tooltip" title="Linkedin"></i></Link>
                    <Link to={ { pathname: "https://www.instagram.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-instagram me-3" data-toggle="tooltip" title="Github"></i></Link>
                    <Link to={ { pathname: "https://www.youtube.com/" } } target="_blank" rel="noreferrer"><i aria-hidden="true" className="fab fa-youtube me-3" data-toggle="tooltip" title="Github"></i></Link>
                </div>
            </div>
            <p className="text-light text-center fw-lighter"><small>&copy;Hotel Bay View</small></p>
        </footer>
    );
};

export default Footer;