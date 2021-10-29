import React from 'react';
import { Button, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Room = ( props ) => {
    const { key, type, description, price, image } = props.room;

    return (
        // div for each column
        <Col xs={ 12 } sm={ 12 } md={ 6 } lg={ 6 }>
            {/* card for each Room Details*/ }
            <div className="card h-100 p-3 rounded-3 text-start">
                <div>
                    <img src={ image } className="card-img-top img-fluid" alt="..." />
                    <hr />
                    <h2 className="card-title fw-bold text-primary">{ type }</h2>
                    <hr />
                    <p className="card-text">{ description.slice( 0, 150 ) }</p>
                    <hr />
                    <h4 className="card-text text-danger fw-bold">BDT. { price }</h4>
                    <hr />
                    <Link to={ `/room/${ key }` }><Button className="btn btn-primary">Details</Button></Link>
                </div>
            </div>
        </Col>
    );
};

export default Room;