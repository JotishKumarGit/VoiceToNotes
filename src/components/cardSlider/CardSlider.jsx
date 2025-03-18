import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import './CardSlider.css';



const cards = [
    { id: 1, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 2, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 3, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 4, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 1, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 2, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 3, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
    { id: 4, image: "https://plus.unsplash.com/premium_photo-1661281244583-96521a60d9d1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8aGFwcHklMjBjbGllbnR8ZW58MHx8MHx8fDA%3D", title: "Deville", content: "VoiceToNotes has been a game-changer for our business. Their products are top-notch, and the customer service is outstanding. Highly recommended!", star: "⭐⭐⭐⭐⭐" },
];

const ResponsiveSwiper = () => {
    return (
        <div className="container py-5 card-slider" >
            <div className="row">
                <div className="col-12 text-center mb-4">
                    <h2 className="py-3">What Our Favorites Clients Say</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio beatae numquam cum ipsa doloribus sequi
                        tempora minima placeat.
                    </p>
                </div>
                <div className="col-12">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="mx-auto p-1">
                                <Swiper
                                    spaceBetween={20}
                                    slidesPerView={1}
                                    breakpoints={{
                                        576: { slidesPerView: 2 }, // Small devices (sm)
                                        768: { slidesPerView: 3 }, // Medium devices (md)
                                        992: { slidesPerView: 4 }, // Large devices (lg)
                                    }}
                                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                                    modules={[Autoplay]}
                                >
                                    {cards.map((card) => (
                                        <SwiperSlide key={card.id} className="p-1">
                                            <div className=" p-3 rounded shadow-lg text-center ">
                                            <img src={card.image} alt={card.title} className="img-fluid rounded mb-5" style={{ height: "350px", width: "100%" }}  />
                                                <h3 className="h5">{card.title}</h3>
                                                <p className="text-muted">{card.content}</p>
                                                <p className="text-muted">{card.star}</p>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveSwiper;
