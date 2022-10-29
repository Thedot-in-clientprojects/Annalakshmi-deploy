/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef, useLayoutEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Controller } from "swiper";
import parallaxie from "../../../common/parallaxie";
import testimonials from '../../../data/main/testimonials1.json';

import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Controller]);

const Testimonials = () => {
  const galleryThumbs = useRef();
  const galleryTop = useRef();
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useLayoutEffect(() => {
    galleryThumbs.current.controller.control = galleryTop.current;
    galleryTop.current.controller.control = galleryThumbs.current;
  }, []);

  useEffect(() => {
    parallaxie(".testimonials.bg-img.parallaxie");
  }, []);

  return (
    <section className="testimonials slider-thumbs section-padding bg-img parallaxie" data-background="img/background/26.jpg" data-overlay-dark="7">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="text-center mb-50">
              <h6 className="ls2 text-u fz-13 mb-20 gr-purple-red-text rest inline">Testimonials</h6>
              <h2 className="fw-700">Feedback from our clients</h2>
            </div>
          </div>
          <div className="col-lg-8 col-md-10">
            <div>
              <Swiper 
                className="gallery-thumbs mb-40 mt-30"
                speed={500}
                spaceBetween={10}
                slidesPerView={3}
                centeredSlides={true}
                slideToClickedSlide={true}
                loop={true}
                touchRatio={0.2}
                loopedSlides={4}
                onSwiper={(swiper) => {
                  galleryThumbs.current = swiper;
                }}
              >
                {
                  testimonials.galleryThumbs.map((thumb, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="img">
                        <div className="circle">
                          <img src={thumb} alt="" />
                        </div>
                        <span className="gr-purple-red-bg"></span>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
              <Swiper 
                className="gallery-top"
                speed={350}
                spaceBetween={10}
                loop={true}
                loopedSlides={4}
                navigation={{
                  prevEl: navigationPrevRef.current,
                  nextEl: navigationNextRef.current,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;
                }}
                onSwiper={(swiper) => {
                  galleryTop.current = swiper;
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
                  testimonials.galleryTop.map((slide, idx) => (
                    <SwiperSlide key={idx}>
                      <div className="item">
                        <div className="text">
                          <p className="fz-20">{ slide.content }</p>
                        </div>
                        <div className="info mt-30">
                          <h6 className="mb-5 text-u ls2">{ slide.author.name }</h6>
                          <span>{ slide.author.position }</span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))
                }
              </Swiper>
            </div>
          </div>
          <div className="controls-rf">
            <div className="swiper-button-next ctrl-circle" ref={navigationNextRef}>
              <span className="icon pe-7s-angle-right"></span>
            </div>
            <div className="swiper-button-prev ctrl-circle" ref={navigationPrevRef}>
              <span className="icon pe-7s-angle-left"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials