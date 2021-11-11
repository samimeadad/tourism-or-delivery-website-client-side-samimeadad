import React from 'react';
import { Col, Row } from 'react-bootstrap';
import loginImage from '../../images/login.jpg';
import useAuth from '../../Hooks/useAuth';
import { useHistory, useLocation } from "react-router-dom";


//component for login section
const Login = () => {
    const { signInUsingGoogle, error } = useAuth();
    const navigation = useHistory();
    const location = useLocation();

    //Google Login functionality
    const signInWithRedirect = () => {
        const { from } = location.state || { from: { pathname: "/" } };
        signInUsingGoogle();
        navigation.replace( from );
    }

    //UI rendering for login page and form
    return (
        <div className="container mx-auto mb-5">
            <Row className="text-center">
                <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                    <img src={ loginImage } alt="loginImage" className="img-fluid" />
                </Col>
                <Col xs={ 12 } sm={ 12 } md={ 12 } lg={ 12 }>
                    <div className="container mt-5">
                        <h3 className="text-primary fw-bold">Please Login with Your Google Account</h3>
                        <hr className="text-danger" />
                        <button onClick={ signInWithRedirect } className="my-3 btn btn-success px-5 py-3">Login With Google <i class="fab fa-google"></i></button>
                        <hr className="text-danger" />
                        {
                            !error ? <div className="row mt-3 text-danger">{ error }</div> : <div className="row mt-3 text-success">Logout Successful</div>
                        }
                    </div>
                </Col>
            </Row>
        </div >
    );
};

export default Login;