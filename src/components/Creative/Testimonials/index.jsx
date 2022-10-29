/* eslint-disable @next/next/no-img-element */
import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, EffectFade } from 'swiper';
import thumbParallaxUp from '../../../common/thumparallaxUp';
import removeSlashFromPagination from "../../../common/removeSlashFromPagination";
import testimonialsData from '../../../data/creative/testimonials.json';

import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

SwiperCore.use([Navigation, Pagination, EffectFade]);

const Testimonials = () => {
  const [load, setLoad] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => setLoad(false));
    
    setTimeout(() => {
      thumbParallaxUp();
      removeSlashFromPagination();
    });
  }, []);

  return (
    <section className="testimonials">
      <div className="position-re">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 no-padding to-up">
              {
                !load ?
                (
                  <Swiper
                    className="swiper-container swiper-img"
                    speed={800}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    effect="fade"
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                      type: "fraction",
                      clickable: true,
                      el: paginationRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current;
                      swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiper.params.pagination.el = paginationRef.current;
                    }}
                    onSwiper={(swiper) => {
                      setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;

                        swiper.params.pagination.el = paginationRef.current;
      
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();

                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.update();
                      });
                    }}
                  >
                    {
                      testimonialsData.images.map((image, index) => (
                        <SwiperSlide key={index}>
                          <div className="item wow fadeIn" data-wow-delay=".3s">
                            <div className="img">
                              <img className="thumparallax" src={image} alt="" />
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                ) : null
              }
            </div>
            <div className="col-lg-6 no-padding valign bg-gray-light to-down">
              {
                !load ?
                (
                  <Swiper
                    className="swiper-container swiper-content"
                    speed={800}
                    spaceBetween={0}
                    slidesPerView={1}
                    loop={true}
                    navigation={{
                      prevEl: navigationPrevRef.current,
                      nextEl: navigationNextRef.current,
                    }}
                    pagination={{
                      type: "fraction",
                      clickable: true,
                      el: paginationRef.current,
                    }}
                    onBeforeInit={(swiper) => {
                      swiper.params.navigation.prevEl = navigationPrevRef.current;
                      swiper.params.navigation.nextEl = navigationNextRef.current;
                      swiper.params.pagination.el = paginationRef.current;
                    }}
                    onSwiper={(swiper) => {
                      setTimeout(() => {
                        swiper.params.navigation.prevEl = navigationPrevRef.current;
                        swiper.params.navigation.nextEl = navigationNextRef.current;

                        swiper.params.pagination.el = paginationRef.current;
      
                        swiper.navigation.destroy();
                        swiper.navigation.init();
                        swiper.navigation.update();

                        swiper.pagination.destroy();
                        swiper.pagination.init();
                        swiper.pagination.update();
                      });
                    }}
                  >
                    {
                      testimonialsData.testimonials.map((testimonial, index) => (
                        <SwiperSlide key={index}>
                          <div className="item wow fadeIn" data-wow-delay=".6s">
                            <div className="content text-center">
                              <span className="quote-icon">
                                <img src="img/icons/quote.svg" alt="" />
                              </span>
                              <p>{ testimonial.comment }</p>
                              <h6>{ testimonial.author }</h6>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                ) : null
              }
            </div>
          </div>

          <div className="controls">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl" ref={navigationNextRef}>
              <i className="fas fa-caret-up"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl" ref={navigationPrevRef}>
              <i className="fas fa-caret-down"></i>
            </div>
            <div className="swiper-pagination" ref={paginationRef}></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials