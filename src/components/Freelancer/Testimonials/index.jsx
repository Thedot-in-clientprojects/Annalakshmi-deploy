/* eslint-disable @next/next/no-img-element */
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import testimonials from '../../../data/freelancer/testimonial.json';

import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Testimonial = () => {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <section className="testim-modrn2" data-scroll-index="4">
      <div className="container position-re section-padding bg-gray bg-img" style={{ backgroundImage: "url('freelancer/img/lines.svg')" }}>
        <div className="row justify-content-center">
          <div className="col-lg-8 offset-lg-1">
            <Swiper
              id="content-carousel-container-unq-4"
              className="swiper-container"
              loop={true}
              slidesPerView={1}
              spaceBetween={30}
              speed={1000}
              navigation={{
                prevEl: navigationPrevRef.current,
                nextEl: navigationNextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = navigationPrevRef.current;
                swiper.params.navigation.nextEl = navigationNextRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {
                testimonials.map((testimonial, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item row">
                      <div className="col-lg-4 valign">
                        <div className="author-img">
                          <img src={testimonial.image} alt="" className="circle-img" />
                          <div className="icon-img">
                            <img src="img/icons/quote.svg" alt="" />
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-8 valign">
                        <div className="cont">
                          <p className="fz-22 mb-30">{ testimonial.comment }</p>
                          <div className="info flex">
                            <h6 className="fz-16">{ testimonial.name }</h6>
                            <span className="fz-14 fw-200">{ testimonial.position }</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>

          <div className="col-md-2 offset-lg-1 valign">
            <div className="controls position-re">
              <div
                className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer mb-20" 
                tabIndex="0" 
                role="button" 
                aria-label="Next slide"
                ref={navigationNextRef}
              >
                <i className="fas fa-long-arrow-alt-right"></i>
              </div>
              <div
                className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" 
                tabIndex="0" 
                role="button" 
                aria-label="Previous slide"
                ref={navigationPrevRef}
              >
                <i className="fas fa-long-arrow-alt-left"></i>
              </div>
            </div>
          </div>

          <div className="head-bg">
            <h2>Testimonials</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonial