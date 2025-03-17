import React, { useEffect, useRef } from 'react';
import video1 from '/public/video-1.mp4';
import './Video.css';

function Video() {

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
                        {/* <h2 className=''>How To Use This</h2> */}
                        <p className=''>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, ab dolore natus consectetur doloribus blanditiis quis corrupti veniam optio alias sed repellat cumque maxime quae. Illo officia iste ad iure!</p>
                    </div>
                    <div className="col-12 text-center">
                        <div className="row ">
                            <div className="left-video">
                                <div className="shadow-lg py-5" style={{ borderRadius: '35px' }}  >
                                    <video ref={videoRef} muted loop style={{ borderRadius: '15px' }} >
                                        <source src={video1} type="video/mp4" />
                                    </video>
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