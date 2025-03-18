import React, { useState, useEffect } from 'react';
import arrow1 from '/public/arrow1.png';
import './Home.css';
import { Link } from 'react-router-dom';
import star from '/public/star.jpg';
import playStore from '/public/playstore-badge.png'
import play from '/public/play.png';
import voice from '/public/voice.png';
import mac from '/public/mac-2.gif';
// import voice from '/public/voice.png';
import delImg from '/public/delImg.png';
// import medium from '/public/medium-2.png';
import medium from '/public/medium-bg.png';
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
import { Autoplay, FreeMode, Zoom } from "swiper/modules";
import blog1 from '/public/blog1.avif';
import video from '/public/video.mp4';
import About from '../pages/About';
import Typewriter from '../components/Animations/Typewriter';
import Services from './Services/Services';
import PrivacyPolicy from './Privacy/PrivacyPolicy';
import Video from './Video/Video';
import AnimatedText from '../components/Animations/AnimatedText';
import ZoomEffect from '../components/Animations/ZoomEffect';
import SocialMedia from './social/SocialMedia';
import Animated_gift from '/public/anima-gift.gif';
import top_mac from '/public/top-mac.gif';
import anima_3 from '/public/anama-3.gif';
import ScrollModal from '../components/modal/ScrollModal';
import CardSlider from '../components/cardSlider/CardSlider';
import ImageSlider from '../components/cardSlider/ImageSlider';


function Home() {

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
  const dynamicText = "Never Take Notes Again,";
  const aboutText = "This is about";
  const demo = "Interactive Demo";
  const aboutUs = "About Us";
  const naverTakeNote = "Naver take not manually";
  const plan = "Chose Your Plan";

  // This is for image slider
  const images = [medium, ih, foundr, scoopit, ih, foundr, scoopit];
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
        {/* <aside className="aside-section position-absolute top-25 end-0 m-3 p-2 ">
          <div class="voice-assistant">
            <div class="icon">🎙️</div>
            <div class="wave wave1"></div>
            <div class="wave wave2"></div>
            <div class="wave wave3"></div>
          </div>
        </aside> */}
        <div className="container-fluid" >
          <div className="container">
            <div className="row ">
              <div className="col-12">
                <div className="row parent py-5 justify-content-center align-items-center">
                  <div className="col-12 col-md-12 col-lg-8 col-sm-12 ">
                    <div className='left-section'>
                      {/* <h2>Never Take Notes Again, </h2> */}
                      <div className="">
                        <span><AnimatedText text="Take Notes Again, There's an AI for that." /></span>
                        {/* <span><img style={{ height: '80px', width: '80px' }} src={anima_3} alt="" /></span> */}
                      </div>
                      <h3>Try TalkNotes free for 7 days</h3>
                      <p className=''>Join thousands of professionals who use AI voice transcription and note-taking to save time, impress colleagues and clients with organized notes while working smarter, not harder.</p>
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
                  <div className="col-12 col-md-12 col-lg-4 col-sm-12">
                    <div className="right-section shadow-lg d-flex flex-column align-items-center text-center p-4">
                      {/* <h3>Interactive demo</h3> */}
                      <h3 style={{ color: "blue" }} className='text-demo'> <AnimatedText text="Interactive Demo" /></h3>
                      <div className='line-s' style={{
                        backgroundColor: bgColor, transition: "background-color 0.5s ease"
                      }}>
                        <img style={{ height: "80px", width: "80px" }} src={top_mac} alt="" />
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
                          <img style={{ height: "110px", width: "110px" }} src={mac} alt="Voice" />
                        </div>
                        {/* <div class="voice-assistant ">
                          <div class="icon">🎙️</div>
                          <div class="wave wave1"></div>
                          <div class="wave wave2"></div>
                          <div class="wave wave3"></div>
                        </div> */}
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
        <div class="voice-assistant">
          <div class="icon-1">🎙️</div>
          <div class="voice-wave"></div>
          <div class="voice-wave"></div>
          <div class="voice-wave"></div>
        </div>
        {/* <div class="text-output"><AnimatedText text="How can i help you" /></div> */}
      </div>
      {/* This is for about sections */}
      {/* <About /> */}
      {/* image slider */}
      {/* image slider */}
      <ImageSlider />
      {/* This is for video */}
      <Video />
      {/* This is section */}
      <ZoomEffect />
      <div className='section-wrapper'>
        <div className="container-fluid">
          <div className="container">
            <div className="row section-wrapper-parent">
              <div className="text-center py-4">
                <div className='py-4'>
                  <AnimatedText text={naverTakeNote} />
                </div>
                <p style={{ color: "light" }}>Social media development enhances digital presence through innovative features and seamless user experiences. It involves coding, UI/UX design, and integration of trends to boost engagement. A well-developed platform drives interaction, growth, and brand visibility.</p>
              </div>
              <div className="col-12">
                <div className="row pb-5">
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1 text-start">
                      <img style={{ height: "100px", width: "200px" }} src={mail} alt="" />
                      <h3>Sales Teams</h3>
                      <p>Sales teams drive revenue by identifying leads, building relationships, and closing deals. They use strategic communication, data insights, and negotiation skills to achieve targets. A strong sales team enhances customer satisfaction and business growth.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Marketing Teams</h3>
                      <p>Marketing teams create and execute strategies to attract, engage, and retain customers. They use market research, branding, and digital campaigns to drive awareness and demand. A strong marketing team fuels business growth and brand loyalty.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Business</h3>
                      <p>Business involves creating, managing, and scaling operations to generate value and profit. It requires strategic planning, innovation, and strong customer relationships. Success in business depends on adaptability, market understanding, and effective execution.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Recruiting Teams</h3>
                      <p>Recruiting teams attract, assess, and hire top talent to drive business success. They leverage sourcing strategies, interviews, and employer branding to build strong teams. A great recruiting team ensures the right fit for both the company and candidates.</p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1">
                      <img src={mail} alt="not found" />
                      <h3>Media</h3>
                      <p>Media encompasses the creation, distribution, and consumption of information across various platforms. It plays a vital role in shaping opinions, entertainment, and brand visibility. Effective media strategies drive engagement, awareness, and influence. </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12 zoom-out">
                    <div className="box-1">
                      <img src={mail} alt="" />
                      <h3>Education</h3>
                      <p>Education empowers individuals with knowledge, skills, and critical thinking for personal and professional growth. It fosters innovation, problem-solving, and lifelong learning. A strong education system drives societal progress and economic development.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This is social media sections */}
      <SocialMedia />

      {/* end social media sections */}
      {/* This is for second section */}
      <div className="second-wrapper justify-content-center align-items-center">
        <div className="container-fluid">
          <div className="container">
            <div className="row parent">
              <div className="second-content-wrapper text-center py-4">
                {/* <h3 className='py-4'>Take <span style={{ color: "red" }}>Perfects</span> Notes</h3> */}
                <h3 className='py-4'><AnimatedText text="Take Perfects Notes" /></h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus unde eius itaque velit voluptatum alias blanditiis modi obcaecati labore, deleniti est.</p>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-12 col-md-6 col-lg-4 col-sm-12">
                    <div className="box-2">
                      <div className="box-left">
                        <img className='mx-2' style={{ backgroundColor: "black", borderRadius: "100px" }} src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore facere.</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img className='mx-2' style={{ backgroundColor: "black", borderRadius: "100px" }} src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img className='mx-2' style={{ backgroundColor: "black", borderRadius: "100px" }} src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img className='mx-2' style={{ backgroundColor: "black", borderRadius: "100px" }} src={voice} alt="" />
                      </div>
                      <div className="box-right">
                        <h4>Record Write, Upload a File </h4>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. </p>
                      </div>
                    </div>
                    <div className="box-2">
                      <div className="bob-left">
                        <img className='mx-2' style={{ backgroundColor: "black", borderRadius: "100px" }} src={voice} alt="" />
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
              <h2 className='py-3'><AnimatedText text="Sumrise Various Types of Content" /></h2>
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
      {/* modal */}
      {/* <ScrollModal /> */}
      {/* third sections */}
      <div className="third-section-back">
        <div className="container-fluid">
          <div className="container">
            <div className="row text-center py-4 parent">
              <div className="third-section-content-wrapper">
                <h2><Typewriter text={plan} /></h2>
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
      {/* This is services sections  */}
      <Services />
      {/* End services sections  */}

      {/* testimonials  card slider */}
      <CardSlider />
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
      {/* After footer */}
      <div div className="container-fluid footer-color " >
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