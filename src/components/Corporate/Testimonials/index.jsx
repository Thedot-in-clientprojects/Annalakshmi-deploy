/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import ModalVideo from "react-modal-video";
import "react-modal-video/css/modal-video.css";
import testimonials from '../../../data/corporate/testimonials.json';

const Testimonials = ({ additionalClass, services }) => {
  const [isOpen, setOpen] = useState(false);

  const openVideo = (e) => {
    e.preventDefault();
    setOpen(true);
  }

  return (
    <section className={`testimonials corp ${services ? '':'pt-80'} ${additionalClass ? additionalClass : ''}`}>
      <div className="container">
        <div className="bg-img bg-fixed" style={{ backgroundImage: "url('img/testimonials/bg.jpg')" }} data-overlay-dark="4">
          <div className="play-button">
            <a href="https://youtu.be/AzwC6umvd1s" className="btn vid" onClick={openVideo}>
              <svg width="100px" height="100px" viewBox="0 0 100 100" preserveAspectRatio="none">
                <circle className="circle" cx="50" cy="50" r="48" stroke="white" strokeWidth="2" fill="none" />
              </svg>
              <i className="fas fa-play"></i>
            </a>
            <div className="text">
              <span>Watch the trailer</span>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-5">
            <div className="box-testim">
              <Swiper
                className="swiper-container swiper-testim"
                speed={1000}
                slidesPerView={1}
                loop={true}
              >
                {
                  testimonials.map((testimonial, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item wow fadeIn" data-wow-delay=".6s">
                        <div className="cont">
                          <span className="quote-icon">
                            <img src="img/icons/quote.svg" alt="" />
                          </span>
                          <p>{ testimonial.text }</p>
                          <div className="info flex mt-50">
                            <div className="author-img valign">
                              <div className="circle">
                                <img src={testimonial.image} alt="" />
                              </div>
                            </div>
                            <div className="author-info valign">
                              <div className="full-width">
                                <h6 className="fz-12 fw-700 text-u ls1 gr-sunrise-text mb-5">{ testimonial.author.name }</h6>
                                <span className="fz-12">{ testimonial.author.position }</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
        </div>
      </div>
      {
        typeof window !== "undefined" && 
          (
            <ModalVideo
              channel="youtube"
              autoplay
              isOpen={isOpen}
              videoId="AzwC6umvd1s"
              onClose={() => setOpen(false)}
            />
          )
      }
    </section>
  )
}

export default Testimonials