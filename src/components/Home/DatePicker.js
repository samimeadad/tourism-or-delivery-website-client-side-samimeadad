import React from 'react';
import { Form } from 'react-bootstrap';

const DatePicker = () => {
    return (
        <div className="container my-5 w-50">
            <hr />
            <Form className="d-flex justify-content-around">
                <div>
                    <Form.Label className="fw-bold">Check-In</Form.Label>
                    <Form.Control type="date" />
                </div>
                <div>
                    <Form.Label className="fw-bold">Check-Out</Form.Label>
                    <Form.Control type="date" />
                </div>
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
                <input type="submit" value="Check Availability" className="btn btn-primary ms-5 px-3 py-2" />
            </Form>
            <hr />
        </div >
    );
};

export default DatePicker;