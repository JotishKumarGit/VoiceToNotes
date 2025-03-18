import React from 'react';
import './ImageSlider.css';
import medium from '/public/medium-bg.png';
import ih from '/public/ih.svg';
import foundr from '/public/foundr.svg';
import scoopit from '/public/scoopit.svg';


function ImageSlider() {
    // This is for image slider
    const images = [medium, ih, foundr, scoopit, ih, foundr, scoopit,ih, foundr, scoopit];

    return (
        <div>
            <div className=" container-fluid image-wrapper" >
                <div className="container slider-container overflow-hidden  py-5 ">
                <div className="image-slider">
                    {images.map((img, index) => (
                        <img key={index} src={img} alt=""  className=" h-16 mx-5 animated-image" />
                    ))}
                </div>
            </div>
            </div>
        </div>
    )
}

export default ImageSlider;


