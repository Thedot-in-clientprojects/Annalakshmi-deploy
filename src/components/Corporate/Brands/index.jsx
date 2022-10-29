/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import Split from '../../Split';
import brands from '../../../data/corporate/clients.json';

const Brands = ({ additionalClass, lineHead }) => {
  return (
    <section className={`clients-carsouel ${additionalClass ? additionalClass : 'mt-60'}`}>
      <div className="container">
        <Swiper 
          id="content-carousel-container-unq-2"
          className="swiper-container"
          slidesPerView={5}
          spaceBetween={0}
          speed={1000}
          loop={true}
          breakpoints={{
            0: {
              slidesPerView: 3,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 5
            }
          }}
        >
          {
            brands.map((brand, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <div className="img">
                    <img src={brand.image} alt="" />
                    <Split>
                      <a href="#0" className="link" data-splitting>{ brand.title }</a>
                    </Split>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        {
          lineHead ? (
            <div className="line-head mb-0 mt-60">
              <h6>+4000 Customers trust of us from 12 countries</h6>
            </div>
          ) : null
        }
      </div>
    </section>
  )
}

export default Brands