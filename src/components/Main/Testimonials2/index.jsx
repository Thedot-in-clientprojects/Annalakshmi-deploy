/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from '../../../data/main/testimonials2.json';

const Testimonials = () => {
  return (
    <section>
      <div className="container">
        <div className="testim-box-shape bg-img" style={{ backgroundImage: "url('img/testimonials/bg.jpg')" }}>
          <div className="row">
            <div className="col-lg-7 offset-lg-5">
              <div className="testim-crve">
                <Swiper 
                  id="content-carousel-container-unq-4"
                  className="swiper-container"
                  slidesPerView={1}
                  spaceBetween={0}
                  speed={1000}
                  loop={true}
                >
                  {
                    testimonials.map((testimonial, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="item">
                          <span className="qoute-icon">
                            <i className="fas fa-quote-left"></i>
                          </span>
                          <div className="text">
                            <p className="fw-400 text-i">{ testimonial.comment }</p>
                          </div>
                          <div className="cont mt-30">
                            <div className="img-flex">
                              <div className="img">
                                <img src={testimonial.author.avatar} alt="" />
                              </div>
                            </div>
                            <div className="info">
                              <h6 className="fw-700">{ testimonial.author.name }</h6>
                              <span>{ testimonial.author.position }</span>
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
          <div className="back-shape bg-img" style={{ backgroundImage: "url('img/testimonials/testim-shape2.png')" }}></div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials