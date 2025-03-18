import React, { useEffect, useState, useRef } from 'react';
import video1 from '/public/video-1.mp4';
import './Video.css';
import video_gift from '/public/video-gift-bg.gif';
import ai from '/public/ai.gif';
import AnimatedText from '../../components/Animations/AnimatedText';


function Video() {

    // This is for background-color change 
    const [bgColor, setBgColor] = useState("#33ff57");

    useEffect(() => {
        const colors = ["#fff"];
        let index = 0;

        const interval = setInterval(() => {
            index = (index + 1) % colors.length;
            setBgColor(colors[index]);
        }, 1000);

        return () => clearInterval(interval);
    }, []);


    // For dynamic content from typewriter
    const heading = "How To Use This";


    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current) {
            videoRef.current.play().catch(error => {
                console.error("Autoplay fields", error);
            });
        }
    }, []);

    return (
        <div className="container-fluid video bg-light"  >
            <div className="container">
                <div className="row parent py-5 " >
                    <div className="video-work-content text-center" >
                        <div className="">
                            <h2 className="font-bold" style={{ fontWeight: "700" }}>
                                <b><AnimatedText text={heading} /></b>
                            </h2>
                        </div>
                        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ab dolore natus consectetur doloribus blanditiis quis corrupti veniam optio alias sed repellat cumque maxime quae. Illo officia iste ad iure!</p>
                    </div>
                    <div className="col-12 text-center">
                        <div className="row ">
                            <div className="gift text-start">
                                <img src={ai} alt="" style={{ height: "100px", width: "150px", borderRadius: "100%" }} />
                            </div>
                            <div className="left-video">

                                <div className="shadow-lg py-5 px-3" style={{ borderRadius: '35px' }}  >
                                    <video ref={videoRef} muted loop style={{ borderRadius: '15px' }} >
                                        <source src={video1} type="video/mp4" />
                                    </video>
                                    <div className="gift-1 text-end">
                                        <img src={video_gift} alt="" style={{ height: "100px", width: "140px", borderRadius: "100%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Video;