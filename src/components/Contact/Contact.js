import React from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
    return (
        <div className="my-5 container">
            <Row>
                <Col xs={ 12 } sm={ 12 } md={ 5 } lg={ 5 }>
                    <div className="w-75">
                        <h3 className="text-primary">Contact Us</h3>
                        <hr />
                        <p><span className="text-danger fw-bold fs-5 me-3"><FontAwesomeIcon icon={ faMapMarkerAlt } /></span><span>xyz, Hotel Motel Zone, Cox's Bazar, Bangladesh</span></p>
                        <p><span className="text-danger fw-bold fs-5 me-3"><FontAwesomeIcon icon={ faMobileAlt } /></span><span>+880 1711 000000</span></p>
                        <p><span className="text-danger fw-bold fs-5 me-3"><FontAwesomeIcon icon={ faMailBulk } /></span><span>contact@hotelbayview.com</span></p>
                    </div>
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 7 } lg={ 7 }>
                    <div>
                        <h3 className="text-primary">Write Us</h3>
                        <hr />
                        <Form>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Control type="email" placeholder="Your Email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicPhone">
                                <Form.Control type="text" placeholder="Your Phone No." />
                                <Form.Text className="text-muted">
                                    We'll never share your phone no. with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Control
                                    as="textarea"
                                    placeholder="Your Query"
                                    style={ { height: '100px' } }
                                />
                            </Form.Group>
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Contact;