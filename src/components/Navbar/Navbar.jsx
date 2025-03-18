import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from '/public/logo.jpg';
import c_logo from '/public/c_logo.png';
import arrow1 from '/public/arrow1.png';

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top dis">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    <img src={c_logo} alt="alt logo" />
                </Link>
                <Link className="navbar-brand brand-text" to="/">
                    TalkNotes
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/tryit">Try it</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">How it works</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Use cases</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Pricing</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">FAQ</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/contact">Contact Us</Link>
                        </li>
                        {/* <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle" to="/solution" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Solution
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/action1">Action</Link></li>
                                <li><Link className="dropdown-item" to="/action2">Action</Link></li>
                                <li><Link className="dropdown-item" to="/action3">Action</Link></li>
                                <li><Link className="dropdown-item" to="/action3">Action</Link></li>
                            </ul>
                        </li> */}
                    </ul>
                    <div className="d-flex right-nav">
                        <Link className="log-btn btn btn-outline-primary me-2" to="/login">Login</Link>
                        <Link className="sign-btn btn btn-primary" to="/signup"><img className="arrow-icon" src={arrow1} alt="" />Get Talknotes +</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
