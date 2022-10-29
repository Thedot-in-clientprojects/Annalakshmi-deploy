import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination, Parallax } from "swiper";
import removeSlashFromPagination from "../../../common/removeSlashFromPagination";
import Split from "../../Split";
import headerSlides from '../../../data/main/header1.json';

import "swiper/css/pagination";
import "swiper/css/navigation";

SwiperCore.use([Navigation, Pagination, Parallax]);

const Header = () => {
  const [load, setLoad] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });

    setTimeout(() => {
      removeSlashFromPagination();
    });
  }, []);

  return (
    <header className="slider slider-prlx o-hidden">
      {
        !load ?
          (
            <Swiper
              className="parallax-slider"
              speed={1000}
              parallax={true}
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
                  for (var i = 0; i < swiper.slides.length; i++) swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);

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
                headerSlides.map(slide => (
                  <SwiperSlide key={slide.id}>
                    <div className="bg-img valign" style={{ backgroundImage: `url('${slide.bg}')` }} data-overlay-dark="6">
                      <div className="container">
                        <div className="row justify-content-center">
                          <div className="col-lg-8 col-md-10">
                            <div className="caption text-center mt-30">
                              <Split>
                                <h1 className="fw-800" data-splitting>{ slide.title }</h1>
                              </Split>
                              <div className="row justify-content-center">
                                <div className="col-lg-10">
                                  <p className="fz-16">{ slide.details }</p>
                                </div>
                              </div>
                              <div className="mt-30">
                                <Link href={slide.btn.link}>
                                  <a className="butn butn-md gr-purple-red-bg text-light radius-30">
                                    <span className="text slide-up">{ slide.btn.text }</span>
                                    <span className="text slide-down">{ slide.btn.text }</span>
                                  </a>
                                </Link>
                              </div>
                            </div>
                          </div>
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

      <div className="setone setwo">
        <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer" ref={navigationNextRef}>
          <i className="fas fa-chevron-right"></i>
        </div>
        <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
          <i className="fas fa-chevron-left"></i>
        </div>
        <div className="swiper-pagination top botm" ref={paginationRef}></div>

        <div className="social-icon">
          <a href="#0"><i className="fab fa-facebook-f"></i></a>
          <a href="#0" className="ms-1"><i className="fab fa-twitter"></i></a>
          <a href="#0" className="ms-1"><i className="fab fa-behance"></i></a>
          <a href="#0" className="ms-1"><i className="fab fa-pinterest-p"></i></a>
        </div>
      </div>

      <div className="curve-buttom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="100">
          <path d="M 0 0 L0 100 L100 100 L100 0 Q 50 200 0 0" fill="#fafafb"></path>
        </svg>
      </div>
    </header>
  )
}

export default Header