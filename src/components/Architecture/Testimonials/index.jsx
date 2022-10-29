/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation } from 'swiper';
import Split from '../../Split';
import testimonials from '../../../data/architecture/testimonials.json';

import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Testimonials = () => {
  const [load, setLoad] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  return (
    <section className="testim-modrn2 section-padding sub-bg" data-scroll-index="4">
      <div className="container position-re">
        <div className="row">
          <div className="col-lg-4 valign">
            <div className="cont-head md-mb50">
              <span className="sub-title fw-200 yellow-green-color">Testimonials</span>
              <h3>What our clients say about our studio.</h3>
              <div className="controls position-re flex mt-40">
                <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
                  <i className="fas fa-long-arrow-alt-left"></i>
                </div>
                <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer ml-10" ref={navigationNextRef}>
                  <i className="fas fa-long-arrow-alt-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 offset-lg-1">
            {
              !load ?
              (
                <Swiper
                  id="content-carousel-container-unq-4"
                  className="swiper-container"
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
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
                    testimonials.slides.map((slide, idx) => (
                      <SwiperSlide key={idx}>
                        <div className="item flex">
                          <div className="valign">
                            <div className="author-img">
                              <img src={slide.image} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="cont">
                            <div className="icon-img">
                              <img src="img/icons/quote.svg" alt="" />
                            </div>
                            <p className="fz-18 mb-30">{ slide.text }</p>
                            <div className="info flex">
                              <h6 className="fz-16">{ slide.author }</h6>
                              <span className="fz-14 fw-200 yellow-green-color">{ slide.position }</span>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              )
              :
              null
            }
          </div>
        </div>
      </div>
      <div className="clients-carsouel mt-100">
        <div className="container">
          <div className="line-head">
            <h6>+4000 Customers trust of us from 12 countries</h6>
          </div>
          <Swiper
            id="content-carousel-container-unq-6"
            className="swiper-container"
            slidesPerView={5}
            spaceBetween={0}
            loop={true}
            speed={1000}
            breakpoints={{
              0: {
                slidesPerView: 3
              },
              1024: {
                slidesPerView: 5
              }
            }}
          >
            {
              testimonials.clients.map((client, idx) => (
                <SwiperSlide key={idx}>
                  <div className="item">
                    <div className="img">
                      <img src={client} alt="" />
                      <Split>
                        <a href="#0" className="link" data-splitting>www.Ravo.com</a>
                      </Split>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials