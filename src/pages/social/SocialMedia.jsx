import React from 'react';
import laptop_gif from '/public/laptop-img-1.gif';
import './SocialMedia.css';
import AnimatedText from '../../components/Animations/AnimatedText';
import man_img from '/public/man-img.gif';
import blog1 from '/public/blog1.avif';
import man_2 from '/public/man-img-2.gif';
import { motion } from 'framer-motion';
import { fadeIn } from '../../components/Animations/Varient';
import laptop from '/public/laptop-animated-new.gif';


function SocialMedia() {

    return (
        <div>
            <div
                className="container-fluid ">
                <div className="container ">
                    <div className="row parent py-5 text-center justify-content-center">
                        <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }}  >
                            <h2>  <AnimatedText text="Social Media Content" /></h2>
                            <p className='py-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque incidunt eligendi sunt, voluptates dolor ipsum! Dolore earum doloribus odit inventore alias autem hic, est aspernatur, nemo eos sit esse dolores?</p>
                        </motion.div>
                        <div className="col-12">
                            <motion.div variants={fadeIn("up", 0.3)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} className="row parent py-5 text-center justify-content-center" >
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                                    <div className="social-parent-wrapper-left pb-4">
                                        <img src={laptop} alt="" style={{ height: "auto" }} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12 ">
                                    <div className="social-parent-wrapper-right shadow-lg py-4 px-5" >
                                        <h2 className='text-center'>This is for social context</h2>
                                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti in eius et quibusdam tempore sunt eos ab, iusto rem adipisci ullam enim. Perferendis repellat dignissimos tenetur delectus eum! Ratione.</p>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>
                                        <div className="social-btn">
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container-fluid ">
                <div className="container ">
                    <div className="row parent py-5 text-center justify-content-center">
                        <div className="col-12">
                            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} iv className="row text-start social-parent py-5">
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12 pb-4">
                                    <div className=" social-parent-wrapper-right shadow-lg py-4 px-5" >
                                        <h2 className='text-center'>This is for social context</h2>
                                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti in eius et quibusdam tempore sunt eos ab, iusto rem adipisci ullam enim. Perferendis repellat dignissimos tenetur delectus eum! Ratione.</p>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>                                        <div className="social-btn">
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12 social-parent-wrapper-left">
                                    <img className='' style={{}} src={man_img} alt="" />
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            {/*  */}
            <div className="container-fluid ">
                <div className="container ">
                    <div className="row parent py-5  text-center justify-content-center">
                        <div className="col-12">
                            <motion.div variants={fadeIn("up", 0.2)} initial="hidden" whileInView={"show"} viewport={{ once: false, amount: 0.7 }} iv className="row social-parent text-start align-items-center justify-content-center py-5">
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12 ">
                                    <div className="social-parent-wrapper-left  pb-4">
                                        <img className='' style={{ height: "auto" }} src={man_2} alt="" />
                                    </div>
                                </div>
                                <div className="col-12 col-md-12 col-lg-6 col-sm-12 ">
                                    <div className=" social-parent-wrapper-right shadow-lg py-4 px-5" >
                                        <h2 className='text-center'>This is for social context</h2>
                                        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde deleniti in eius et quibusdam tempore sunt eos ab, iusto rem adipisci ullam enim. Perferendis repellat dignissimos tenetur delectus eum! Ratione.</p>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>
                                        <h6>THis is key point one</h6>
                                        <div className="social-btn">
                                            <button className=''>Read More</button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMedia;

