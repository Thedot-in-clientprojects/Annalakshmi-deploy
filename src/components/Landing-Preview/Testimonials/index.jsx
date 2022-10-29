/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from '../../../data/landing-preview/testimonials.json'

import "swiper/css";

const Testimonials = () => {
  return (
    <section className="testim-curv section-padding">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h2>Real people, real stories. Hear from our community.</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="testim-grida">
              <Swiper
                className="swiper-wrapper" 
                slidesPerView={3} 
                spaceBetween={60} 
                centeredSlides={true} 
                loop={true}
                autoplay={true}
                speed={1000}
                breakpoints={{
                  0: {
                    slidesPerView: 1
                  },
                  1024: {
                    slidesPerView: 3
                  }
                }}
              >
                {
                  testimonials.map((testimonial, idx) => (
                    <SwiperSlide className="swiper-slide" key={idx}>
                      <div className="item">
                        <div className="icon-img icon-img-40">
                          <img src="landing-preview/img/quotes.png" alt="" />
                        </div>
                        <div className="text mb-30">
                          <span className="rate-star fz-10 mb-10">
                            {
                              Array(testimonial.rating).fill().map((_, i) => (<i className="fas fa-star" key={i}></i>))
                            }
                          </span>
                          <div>
                            {
                              testimonial.comment.map((chunk, i) => (
                                <p key={i}>{chunk} {i !== testimonial.comment.length - 1 && <br />}</p>
                              ))
                            }
                          </div>
                        </div>
                        <div className="cont flex">
                          <div className="img-flex valign">
                            <div className="img">
                              <img src={testimonial.author.image} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="info valign ml-20">
                            <div>
                              <h6>{testimonial.author.name}</h6>
                              <span className="text-u ls1 fz-12">For <span className="fw-700 gr-sunset-text">{testimonial.reason}</span></span>
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
    </section>
  )
}

export default Testimonials