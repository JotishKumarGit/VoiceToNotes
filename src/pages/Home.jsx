import React, { useState } from 'react';
import arrow1 from '/public/arrow1.png';
import './Home.css';
import { Link } from 'react-router-dom';
import star from '/public/star.jpg';
import playStore from '/public/playstore-badge.png'
import play from '/public/play.png';
import voice from '/public/voice.png';
import delImg from '/public/delImg.png';
import medium from '/public/medium.svg';
import ih from '/public/ih.svg';
import foundr from '/public/foundr.svg';
import scoopit from '/public/scoopit.svg';
import mail from '/public/mail.png';
import chat from '/public/chat.avif';
import book from '/public/book.png';
import check from '/public/check.png';
import Slider from "react-slick";
import { Card } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Autoplay, FreeMode } from "swiper/modules";
import blog1 from '/public/blog1.avif';
import video from '/public/video.mp4';


function Home() {

  // This is for image slider
  const images = [medium, ih, foundr, scoopit, medium, ih, foundr, scoopit];
  // THis is for card slider data
  const cardSlider = [
    { id: 1, title: "Mountain View", image: "/public/star.jpg", paragraph: "This is a paragraph" },
    { id: 2, title: "Beach Paradise", image: "/public/star.jpg", paragraph: "This is a paragraph" },
    { id: 3, title: "City Lights", image: "/public/star.jpg", paragraph: "This is a paragraph" },
    { id: 4, title: "Forest Trail", image: "/public/star.jpg", paragraph: "This is a paragraph" },
    { id: 5, title: "Desert Dunes", image: "/public/star.jpg", paragraph: "This is a paragraph" },
    { id: 6, title: "Snowy Peaks", image: "/public/star.jpg", paragraph: "This is a paragraph" },
  ];

  // This is for card testimonials  other blog
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const cards = [
    { id: 1, image: '/public/blog1.avif', title: "Card 1", text: "This is the first card." },
    { id: 2, image: '/public/blog1.avif', title: "Card 2", text: "This is the second card." },
    { id: 3, image: '/public/blog1.avif', title: "Card 3", text: "This is the third card." },
    { id: 4, image: '/public/blog1.avif', title: "Card 4", text: "This is the fourth card." },
  ];


  // testimonials 

  const testimonials = [
    {
      name: "John Doe",
      image: "/public/blog1.avif",
      review: "This platform is amazing! It has helped me grow my business significantly.",
      designation: "Business Owner",
    },
    {
      name: "Jane Smith",
      image: "/public/blog1.avif",
      review: "Excellent service and great value for money. Highly recommended!",
      designation: "Marketing Manager",
    },
    {
      name: "Michael Johnson",
      image: "/public/blog1.avif",
      review: "A wonderful experience from start to finish. Will use again!",
      designation: "Freelancer",
    },
  ];

  // This is for faq 
  const [expandedIndex, setExpandedIndex] = useState(null);
  const handleToggleChat = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How does the app work?",
      answer: "Simply tap the microphone button, speak, and the app will transcribe your speech into text automatically. You can edit, save, or share the notes as needed.",
    },
    {
      question: "Is the app free to use?",
      answer: "Yes, the app is free to download and use, with optional premium features available.",
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, you can use the app offline to view saved content, but some features may require an internet connection.",
    },
    {
      question: "How do I reset my password?",
      answer: "Go to the settings page, select 'Forgot Password', and follow the instructions to reset your password.",
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, you can use the app offline to view saved content, but some features may require an internet connection.",
    },
    {
      question: "How do I reset my password?",
      answer: "Go to the settings page, select 'Forgot Password', and follow the instructions to reset your password.",
    },
    {
      question: "Can I use the app offline?",
      answer: "Yes, you can use the app offline to view saved content, but some features may require an internet connection.",
    },
    {
      question: "How do I reset my password?",
      answer: "Go to the settings page, select 'Forgot Password', and follow the instructions to reset your password.",
    },
  ];


  return (
    <>
      <div className='wrapper'>
        <div className="container-fluid">
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div className="row parent py-5 justify-content-center align-items-center">
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12 ">
                    <div className='left-section'>
                      <h2>Never Take Notes Again, </h2>
                      <h2><span>There's an AI for that.</span></h2>
                      <h3>Try TalkNotes free for 7 days</h3>
                      <p>Join thousands of professionals who use AI voice transcription and note-taking to save time, impress colleagues and clients with organized notes while working smarter, not harder.</p>
                      <h5>Available on Web, iOS and Android.</h5>
                      <div className='carousel'>
                        <h4>Works in:</h4>
                        {/* <select name="" id="">
                        <option value="India">Indian</option>
                        <option value="India">Chanies</option>
                        <option value="India">Japanies</option>
                        <option value="India">Rusian</option>
                        <option value="India">American</option>
                        <option value="India">Nepalian</option>
                      </select> */}
                      </div>
                      <button className='try-btn'><img className='resp-arrow' src={arrow1} alt="" /> Try TalkNotes free for 7 days</button>
                      <p className='star text-start'>Trusted by +10,000 happy users <img src={star} alt="" /> <img src={star} alt="" /> <img src={star} alt="" /></p>
                      <div className="playStore">
                        <img className='img-1' src={playStore} alt="" />
                        <img className='img-2' src={playStore} alt="" />
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-12 col-lg-6 col-sm-12">
                    <div className="right-section shadow-lg d-flex flex-column align-items-center text-center p-4">
                      <h3>Interactive demo</h3>
                      <div className='line-s'>
                        <h1></h1>
                      </div>
                      <div className='pt-4'>Limit:01:00</div>
                      <h2 className='py-2'>00:00</h2>
                      {/* Flex container for play buttons */}
                      <div className="d-flex justify-content-center gap-3 p-3 rounded resp-right">
                        <div className=''>
                          <div className="play">
                            <img src={play} alt="Play" />
                          </div>
                        </div>
                        <div className="voice">
                          <img src={voice} alt="Voice" />
                        </div>
                        <div className="play">
                          <img src={delImg} alt="Delete" />
                        </div>
                      </div>
                      <button className="btn-continue border-0 mt-3 d-flex align-items-center">
                        <img src={arrow1} alt="Arrow" className="me-2" /> Continue
                      </button>
                      <p className="mt-2 last-content">Try it out! Click this button <img className='' src={voice} alt="" />     and to start recording</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* image slider */}
      <div className="slider-container overflow-hidden bg-gray-100 py-5 image-wrapper">
        <div className="image-slider flex">
          {images.map((img, index) => (
            <img key={index} src={img} alt="" className="h-16 mx-5" />
          ))}
        </div>
      </div>
      {/* This is for video */}
      <div className="container-fluid">
        <div className="container">
          <div className="row py-5">
            <div className="col-12">
              <h2>Video</h2>
              <div className="" >
                <video width="600" controls>
                  <source src={video} type="video/mp4"  />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is section */}
      <div className='section-wrapper'>
        <div className="container-fluid">
          <div className="container">
            <div className="row section-wrapper-parent">
              <div className="text-center py-4">
                <h2>Naver take not <span style={{ color: "red" }}>manually</span></h2>
                <p style={{ color: "light" }}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos fugit quod suscipit odio libero dicta eos! Non, quasi. Eos, minus culpa voluptates delectus praesentium laudantium eaque? Provident qui nostrum modi.</p>
              </div>
              <div className="col-12">
                <div className="row pb-5">
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 ">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-1">
                      <img src={mail} alt="not found" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Meetings</h3>
                      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque provident facere modi ad iste nostrum, harum delectus perferendis doloribus. </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is for second section */}
      <div className="second-wrapper justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="container">
            <div className="row parent">
              <div className="second-content-wrapper text-center py-4">
                <h3 className='py-4'>Take <span style={{ color: "red" }}>Perfects</span> Notes</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde eius itaque velit voluptatum alias blanditiis modi obcaecati labore, deleniti est.</p>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-2">
                      <div className="bob-left">
                        <img src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore facere.</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="box-center">
                      <div className="bob-left">
                        <img src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Chat with your noto</h4>
                        <p>Ask questions and with your voice</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-8 col-sm-12">
                    <div className="box-right-section">
                      <img src={chat} alt="chat" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sumrise section */}
      <div className="container-fluid">
        <div className="container">
          <div className="row text-center py-5">
            <div className="col-12 ">
              <h2 className='py-3'>Sumrise Various Types of Content</h2>
              <p>Speak Notes helps you create Speak Notes helps you create </p>
              <div className="sumrise-wrapper py-5 me-4">
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
                <div className="sub-wrapper">
                  <h4>Book</h4>
                  <img src={book} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* third sections */}
      <div className="third-section-back">
        <div className="container-fluid">
          <div className="container">
            <div className="row text-center py-4 parent">
              <div className="third-section-content-wrapper">
                <h2>Chose Your Plan</h2>
                <p>Start with our free plan unlock facebook at pro</p>
                <div className='price-btn py-4'>
                  <button className='btn-price'>Working</button>
                  <button className='btn-price-middle btn btn-primary'>Unary</button>
                  <button className='btn-price'>Approval</button>
                </div>
              </div>
              <div className="col-12">
                <div className="row py-5">
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 mb-3">
                    <div className="free-plan">
                      <h3>Free plan</h3>
                      <h5>Extra Features</h5>
                      <h2><sup>$</sup>0 <sub>/per months</sub></h2>
                      <p>Protect your plan and somethins else</p>
                      <button className='price-btn-free'>Start Now</button>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                    </div>
                  </div>
                  {/* second  */}
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 mb-3">
                    <div className="premium-plan">
                      <h3>Premium plan</h3>
                      <h5>Extra Features</h5>
                      <h2><sup>$</sup>30 <sub>/per months</sub></h2>
                      <p>Protect your plan and somethins else</p>
                      <button className='price-btn-premium'>Start Now</button>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                    </div>
                  </div>
                  {/* Third */}
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 mb-3">
                    <div className="free-plan">
                      <h3>Pro plan</h3>
                      <h5>Extra Features</h5>
                      <h2><sup>$</sup>50 <sub>/per months</sub></h2>
                      <p>Protect your plan and somethins else</p>
                      <button className='price-btn-free'>Start Now</button>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                      <div className="check-price">
                        <img src={check} alt="" />
                        <p>$10 for 1 months</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="container-fluid py-5 testimonials">
        <div className="row">
          <div className="col-12">
            <div className="row py-5">
              <div className="col-12 col-md-6 col-lg-12 col-sm-12">
                <div className="">
                  <h2 className="text-center mb-4">What Our Favorites Clients Say</h2>
                  <div id="testimonialCarousel" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                      {testimonials.map((testimonial, index) => (
                        <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
                          <div className="d-flex flex-column align-items-center text-center">
                            <img
                              src={testimonial.image}
                              alt={testimonial.name}
                              className="rounded-circle mb-3"
                              width="100"
                            />
                            <h5 className='py-3'>{testimonial.name}</h5>
                            <p className="text-muted pt-3">{testimonial.designation}</p>
                            <p className="pt-4 w-100 px-1 text-wrap mx-auto">{testimonial.review}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
                      <span className="carousel-control-prev-icon"></span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
                      <span className="carousel-control-next-icon"></span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* FAQ Questions */}
      <div className="container-fluid">
        <div className="container">
          <div className="row parent">
            <div className="faq-content text-center pt-5">
              <h2 className=''> Frequently Asked Questions</h2>
              <p className="faq-p py-4 align-items-center justify-content-center text-center">
                Our app simplifies your shopping experience by providing a seamless platform to browse, compare, and purchase products in bulk. Simply sign up, explore our categories, add items to your cart, and proceed to checkout.
              </p>
            </div>
            <div className="col-12">
              <div className="row py-5">
                {faqData.map((faq, index) => (
                  <div key={index} className="col-12 col-md-6 mt-4">
                    <div className="faq-section">
                      <span className="head-text-faq d-flex justify-content-between align-items-center">
                        {faq.question}
                        <button className="ms-auto" onClick={() => handleToggleChat(index)}>
                          {expandedIndex === index ? "-" : "+"}
                        </button>
                      </span>
                      <div
                        style={{
                          height: expandedIndex === index ? "auto" : "0px",
                          overflow: "hidden",
                          transition: "height 0.3s ease",
                        }}
                      >
                        <div className="element-chat-message">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="faq-btn py-5 text-center">
            <button>Read More</button>
          </div>
        </div>
      </div>
      {/* This is for card slider  */}
      <div className="container-fluid card-wraper ">
        <div className="container parent ">
          <div className="blog-content py-5 text-center">
            <h2 >Our Blog</h2>
            <p className='py-3'>Artificial Intelligence (AI) has become one of the most revolutionary technologies of the 21st century, impacting industries from healthcare to finance and beyond. As AI continues to evolve, it is reshaping how businesses operate, how we interact with technology, and even how we make decisions.</p>
          </div>
          <Slider {...settings}>
            {cards.map((card) => (
              <div key={card.id} className="p-2">
                <Card className="">
                  <Card.Img className='test-img' variant="top" src={card.image} alt={card.title} />
                  <Card.Body>
                    <Card.Title className='text-center'>{card.title}</Card.Title>
                    <Card.Text className='text-center'>{card.text}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </Slider>
        </div >
      </div>
      {/* CardSlider */}
      <div className="container-fluid py-5">
        <div className="container">
          <div className="content-client">
            <h2 className='text-center'>What Our Favorites Clients Say</h2>
            <p className='text-center py-3'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam sed id modi aperiam pariatur cupiditate itaque soluta fugit quo officiis sapiente, veritatis iure deserunt autem blanditiis consequuntur distinctio vel quod?</p>
          </div>
        </div>
        <div className="w-full max-w-4xl mx-auto p-5">
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            autoplay={{
              delay: 0, // No waiting
              disableOnInteraction: false,
            }}
            speed={2000} // Fast transition
            loop={true}
            modules={[Autoplay, FreeMode]}
          >
            {cardSlider.map((card) => (
              <SwiperSlide key={card.id}>
                <div className="w-60 h-72 bg-white shadow-lg rounded-xl overflow-hidden m-5 card-slide">
                  <img src={card.image} alt={card.title} className="rounded-circle mb-3 w-100" style={{ alignItems: 'center', justifyContent: 'center' }} />
                  <div className="p-3 text-center text-lg font-semibold">{card.title}</div>
                  <p className="text-center">{card.paragraph}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
      {/* footer */}
      <div div className="container-fluid " >
        <div className="container">
          <div className="row text-center py-5">
            <div className="col-12">
              <h2 className='py-4'>Unlesh the power of Voice Notes with AI</h2>
              <button className='try-button-services '><Link to='' style={{ textDecoration: "none", color: "white" }}>Try now for free</Link></button>
            </div>
          </div>
        </div>
      </div >
    </>
  )
}

export default Home;