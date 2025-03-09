import React from 'react';
import './Footer.css';
import c_logo from '/public/c_logo.png';

function Footer() {
    return (
        <div>
            <footer className="bg-dark text-light py-4">
                <div className="container-fluid">
                    <div className="container">
                        <div className="row py-5">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-12 col-md-3 col-lg-3 col-sm-12 pb-3">
                                        <div className='d-flex footer-logo'>
                                            <div>
                                                <h5>Web3Task</h5>
                                                <p>This is our </p>
                                                <p>This is our </p>
                                                <p>This is our </p>
                                                <p>This is our </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3 col-sm-12 pb-3">
                                        <h5>Web3Task</h5>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3 col-sm-12 pb-3">
                                        <h5>Web3Task</h5>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                    </div>
                                    <div className="col-12 col-md-3 col-lg-3 col-sm-12 pb-3">
                                        <h5>Web3Task</h5>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                        <p>abc@gmail.com</p>
                                        <p>123445678</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center mt-3">
                    <p>&copy; {new Date().getFullYear()} Web3Task. All Rights Reserved.</p>
                </div>
            </footer >
        </div >
    )
}

export default Footer;
