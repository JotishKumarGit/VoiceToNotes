import React from 'react';
import './About.css';
import blog1 from '/public/blog1.avif';
import { motion } from "framer-motion";
import Typewriter from '../components/Animations/Typewriter';

function Section() {

    const aboutUs = "About Us";

    return (
        <>
            <section className="container-fluid py-5 bg-light">
                <div className="container">
                    <div className="row py-4 parent">
                        <h2 className="display-5 text-center fw-bold"><Typewriter text={aboutUs} /></h2>
                        <p className=" text-center py-4">
                            We are a dynamic company focused on delivering high-quality
                            solutions. Our team is dedicated to innovation and excellence.
                        </p>
                        <div className="row align-items-center">
                            {/* Image Section */}
                            <div className="col-md-6">
                                <motion.img
                                    src={blog1}
                                    alt="About Us"
                                    className="img-fluid rounded shadow-lg"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut" }}
                                />
                            </div>

                            {/* Content Section */}
                            <div className="col-md-6">
                                <motion.div
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ duration: 1, ease: "easeOut" }}
                                >
                                    <h2 className=" ">About </h2>
                                    <p className=" ">
                                        We are a dynamic company focused on delivering high-quality
                                        solutions. Our team is dedicated to innovation and excellence.
                                    </p>
                                    <p className=" ">
                                        We are a dynamic company focused on delivering high-quality
                                        solutions. Our team is dedicated to innovation and excellence.
                                    </p>
                                    <p className=" ">
                                        We are a dynamic company focused on delivering high-quality
                                        solutions. Our team is dedicated to innovation and excellence.
                                    </p>
                                    <motion.a
                                        href="#"
                                        className="btn btn-primary"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        Learn More
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Section;



