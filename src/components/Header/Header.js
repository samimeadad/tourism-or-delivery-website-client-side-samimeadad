import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faSignInAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../Hooks/useAuth';

const Header = () => {
    const { user, logout } = useAuth();

    return (
        <header className="header bg-dark">
            <Navbar collapseOnSelect expand="lg" className="nav navbar py-5 px-5" bg="dark" variant="dark">
                {/* Brand Logo */ }
                <Navbar.Brand>
                    <NavLink to="/home" className="me-5">
                        <img style={ { width: '150px' } } src={ logo } alt="logoImage" />
                    </NavLink>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />

                <Navbar.Collapse id="responsive-navbar-nav">
                    {/* menu bar and primary route button */ }
                    <Nav className="me-auto">
                        <NavLink className="me-3 text-warning text-decoration-none" to="/home"><FontAwesomeIcon icon={ faHome } /></NavLink>
                        <NavLink className="me-3 text-light text-decoration-none" to="/about">About Us</NavLink>
                        <NavLink className="me-3 text-light text-decoration-none" to="/rooms">Rooms & Suits</NavLink>
                        <NavLink className="me-3 text-light text-decoration-none" to="/gallery">Gallery</NavLink>
                        <NavLink className="me-3 text-light text-decoration-none" to="/contact">Contact Us</NavLink>
                    </Nav>

                    {/* login and signup section with conditional rendering*/ }
                    <Nav className="p-3">
                        {
                            !user.email ? <span><NavLink className="me-3 text-primary text-decoration-none fw-bold" to="/login">Please Login Here <FontAwesomeIcon icon={ faSignInAlt } /></NavLink></span> :
                                <div>
                                    <span><NavLink className="me-3 text-warning text-decoration-none fw-bold" to="/myBookings">My Bookings</NavLink></span>
                                    <span><NavLink className="me-3 text-warning text-decoration-none fw-bold" to="/manageAllBookings">Manage Bookings</NavLink></span>
                                    <span><NavLink className="me-3 text-warning text-decoration-none fw-bold" to="/manageAllRooms">Manage Rooms</NavLink></span>
                                    <span><NavLink className="me-3 text-warning text-decoration-none fw-bold" to="/addRoom">Add Room</NavLink></span>
                                    <button className="btn btn-success border me-2" onClick={ logout }>Log out: <span className="fw-bold text-light">{ user?.email }</span></button>
                                </div>
                        }
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header >
    );
};

export default Header;