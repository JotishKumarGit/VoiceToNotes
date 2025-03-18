import React from "react";
import './Contact.css';

const Contact = () => {
    return (
        <div className="container-fluid">
            <div className="container my-5">
                <div className="row shadow-lg py-5 px-4" style={{ borderRadius: "20px" }}>
                    <div className="col-12">
                        <div className="row contact-us">
                            <h2 className="text-center ">Contact Us</h2>
                            <p className="text-center ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nesciunt qui impedit asperiores laudantium repellendus possimus nulla eos cupiditate sint aperiam molestias reprehenderit optio, et vitae necessitatibus est. Excepturi, ipsam?</p>
                            {/* Contact Form Section */}
                            <div className="col-md-6 mb-4">
                                <form>
                                    <div className="mb-3">
                                        <label className="form-label">Name</label>
                                        <input type="text" className="form-control" placeholder="Enter your name" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Email</label>
                                        <input type="email" className="form-control" placeholder="Enter your email" />
                                    </div>
                                    <div className="mb-3">
                                        <label className="form-label">Message</label>
                                        <textarea className="form-control" rows="4" placeholder="Enter your message"></textarea>
                                    </div>
                                    <button type="submit" className="btn btn-primary">Submit</button>
                                </form>
                            </div>

                            {/* Google Map Section */}
                            <div className="col-md-6">
                                <div className="ratio ratio-16x9">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345092196!2d144.95565131550465!3d-37.81731397975198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d5df1d3fd81%3A0x4d2a771d8e09a3a5!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sin!4v1648251501234!5m2!1sen!2sin"
                                        style={{ border: 0 }}
                                        allowFullScreen=""
                                        loading="lazy"
                                        referrerPolicy="no-referrer-when-downgrade"
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
