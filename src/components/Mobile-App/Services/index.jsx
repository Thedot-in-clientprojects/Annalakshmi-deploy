import { useState, useEffect, useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination } from "swiper";
import services from '../../../data/mobile-app/services.json';

import "swiper/css/pagination";

SwiperCore.use([Pagination]);

const Services = () => {
  const [load, setLoad] = useState(true);
  const paginationRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);

      let contianer = document.querySelector(".services-carsouel .swiper-container");
      if (contianer) contianer.appendChild(paginationRef.current);

      document.querySelector(".services-carsouel .swiper-wrapper").classList.add("pb-40");
    });
  }, []);
  return (
    <section className="services-carsouel section-padding sub-bg anim-pagination" data-scroll-index="2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-head text-center mb-80">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">Our Services</span>
              </h6>
              <h2>You&lsquo;re in a secure company</h2>
            </div>
          </div>
        </div>
        {
          !load ?
          (
            <Swiper
              className="swiper-container"
              id="content-carousel-container-unq-2"
              spaceBetween={0}
              slidesPerView={3}
              loop={true}
              centeredSlides={true}
              autoplay={true}
              speed={1000}
              pagination={{
                clickable: true,
                renderBullet: function (index, className) {
                  return '<span class="' + className + '">' + '<svg class="fp-arc-loader" width="16" height="16" viewBox="0 0 16 16">' +
                      '<circle class="path" cx="8" cy="8" r="5.5" fill="none" transform="rotate(-90 8 8)" stroke="#FFF"' +
                      'stroke-opacity="1" stroke-width="1px"></circle>' +
                      '<circle cx="8" cy="8" r="3" fill="#FFF"></circle>' +
                      '</svg></span>';
                }
              }}
              onBeforeInit={(swiper) => {
                swiper.params.pagination.el = paginationRef.current;
              }}
              onSwiper={(swiper) => {
                setTimeout(() => {
                  swiper.params.pagination.el = paginationRef.current;
                  swiper.pagination.destroy();
                  swiper.pagination.init();
                  swiper.pagination.update();
                });
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                768: {
                  slidesPerView: 2.5
                },
                1024: {
                  slidesPerView: 3
                },
              }}
            >
              {
                services.map((item, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item text-center">
                      <span className={`icon fz-40 gr-orange-text ${item.icon} mb-20`}></span>
                      <h6 className="mb-10">{ item.title }</h6>
                      <p>{ item.description }</p>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          )
          :
          null
        }
        <div className="swiper-pagination" ref={paginationRef}></div>
      </div>
      <div className="circle-blur"></div>
    </section>
  )
}

export default Services