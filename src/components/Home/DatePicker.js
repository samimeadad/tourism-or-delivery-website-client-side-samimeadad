import React from 'react';
import { Col, Form, Row } from 'react-bootstrap';

const DatePicker = () => {
    const handleCheckAvailability = ( e ) => {
        e.preventDefault();
    }

    return (
        <div className="container my-5 overflow-hidden">
            <hr />

            <Form className="d-flex justify-content-around" onSubmit={ handleCheckAvailability }>
                <Row>
                    <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <div>
                            <Form.Label className="fw-bold">Check-In</Form.Label>
                            <Form.Control type="date" />
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <div>
                            <Form.Label className="fw-bold">Check-Out</Form.Label>
                            <Form.Control type="date" />
                        </div>
                    </Col>

                    <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <div>
                            <Form.Label className="fw-bold">Adults</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 2 } lg={ 2 }>
                        <div>
                            <Form.Label className="fw-bold">Children</Form.Label>
                            <Form.Select aria-label="Default select example">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                            </Form.Select>
                        </div>
                    </Col>
                    <Col xs={ 12 } sm={ 12 } md={ 4 } lg={ 4 }>
                        <input type="submit" value="Check Availability" className="btn btn-primary mt-4" />
                    </Col>
                </Row>
            </Form>
            <hr />
        </div >
    );
};

export default DatePicker;