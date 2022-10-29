import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Parallax } from 'swiper';
import slides from '../../../data/architecture/header.json';

import "swiper/css/navigation";

SwiperCore.use([Navigation, Parallax]);

const Header = () => {
  const [load, setLoad] = useState(true);

  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    });
  }, []);

  return (
    <header className="slider arch-slider slider-prlx mt-60" data-scroll-index="0">
      {
        !load ?
          (
            <Swiper
              className="swiper-container parallax-slider"
              speed={1000}
              parallax={true}
              slidesPerView={1}
              loop={true}
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
                  for (var i = 0; i < swiper.slides.length; i++) swiper.slides[i].childNodes[0].setAttribute("data-swiper-parallax", 0.75 * swiper.width);

                  swiper.params.navigation.prevEl = navigationPrevRef.current;
                  swiper.params.navigation.nextEl = navigationNextRef.current;

                  swiper.navigation.destroy();
                  swiper.navigation.init();
                  swiper.navigation.update();
                });
              }}
            >
              {
                slides.map((slide, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="bg-img valign" style={{ backgroundImage: `url('${slide.bg}')` }} data-overlay-dark="4">
                      <div className="container">
                        <div className="row">
                          <div className="col-lg-7">
                            <div className="caption mt-30">
                              <h5 className="yellow-green-bg inline">
                                <span>{ slide.number }</span>
                              </h5>
                              <h1>
                                {
                                  slide.title.map((title,i) => (
                                    <span key={i}>
                                      { title }
                                      { i !== slide.title.length - 1 ? <br /> : null }
                                    </span>
                                  ))
                                }
                              </h1>
                              <p>{ slide.desc }</p>
                            </div>
                          </div>
                          <div className="col-lg-3 offset-lg-1 valign">
                            <div className="explore">
                              <Link href="/project-details">
                                <a>Explore</a>
                              </Link>
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

        <div className="setting">
          <div className="controls">
            <div className="swiper-button-next swiper-nav-ctrl next-ctrl cursor-pointer" ref={navigationNextRef}>
              <i className="ion-chevron-right"></i>
            </div>
            <div className="swiper-button-prev swiper-nav-ctrl prev-ctrl cursor-pointer" ref={navigationPrevRef}>
              <i className="ion-chevron-left"></i>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Header