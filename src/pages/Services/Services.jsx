import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css/animate.min.css';
import blog1 from '/public/blog1.avif';
import './Services.css';

const Services = () => {
    return (
        <section className="container-fluid services py-5">
            <div className="container ">
                <h2 className="text-center mb-5">Our Services</h2>
                <p className="text-center mb-5 service-p" >Lorem, ipsum dolor sit amet consectetur adipisicing elit. A quae placeat voluptatibus doloremque, dolorem ullam reiciendis enim numquam odit ratione inventore. Saepe dolore, reprehenderit reiciendis ab nesciunt adipisci cumque qui.</p>
                <div className="row parent d-flex justify-context-center align-items ">
                    <div className="col-12 col-md-6 col-lg-4 col-sm-12  mb-4">
                        <div style={{ borderRadius: '30px' }} className="card shadow-lg h-100 animate__animated animate__fadeInUp box">
                            <div className="card-body text-center ">
                                <img style={{ height: "100px", width: "100px", borderRadius: '100%' }} className='py-3' src={blog1} alt="" />
                                <h5 className="card-title">Service One</h5>
                                <p className="card-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates voluptas fuga veritatis illo facere ea nostrum quisquam sequi suscipit, nulla laborum est molestias. Unde officiis temporibus nesciunt inventore perferendis?</p>
                                <div className="py-4">
                                    <button className='service-btn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-sm-12  mb-4">
                        <div style={{ borderRadius: '30px' }} className="card shadow-lg h-100 animate__animated animate__fadeInUp animate__delay-1s box">
                            <div className="card-body text-center ">
                                <img style={{ height: "100px", width: "100px", borderRadius: '100%' }} className='py-3' src={blog1} alt="" />
                                <h5 className="card-title">Service Two</h5>
                                <p className="card-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates voluptas fuga veritatis illo facere ea nostrum quisquam sequi suscipit, nulla laborum est molestias. Unde officiis temporibus nesciunt inventore perferendis?</p>
                                <div className="py-4">
                                    <button className='service-btn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-4 col-sm-12  mb-4" >
                        <div style={{ borderRadius: '30px' }} className="card shadow-lg h-100  animate__animated animate__fadeInUp animate__delay-2s box">
                            <div className="card-body text-center ">
                                <img style={{ height: "100px", width: "100px", borderRadius: '100%' }} className='py-3' src={blog1} alt="" />
                                <h5 className="card-title">Service Three</h5>
                                <p className="card-text px-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam voluptates voluptas fuga veritatis illo facere ea nostrum quisquam sequi suscipit, nulla laborum est molestias. Unde officiis temporibus nesciunt inventore perferendis?</p>
                                <div className="py-4">
                                    <button className='service-btn'>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
