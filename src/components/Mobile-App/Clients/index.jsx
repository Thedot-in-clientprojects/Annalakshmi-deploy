/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import clients from '../../../data/mobile-app/clients.json';

const Clients = () => {
  return (
    <section className="clients-carsouel mt-100">
      <div className="container">
        <Swiper
          className="swiper-container"
          id="content-carousel-container-unq-6"
          spaceBetween={0}
          slidesPerView={5}
          loop={true}
          speed={1000}
        >
          {
            clients.map((client, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <a href="#0" className="img">
                    <div className="front">
                      <img src={client} alt="" />
                    </div>
                    <div className="back">
                      <img src={client} alt="" />
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="line-head mb-0 mt-50">
          <h6>+4000 Customers trust of us from 12 countries</h6>
        </div>
      </div>
    </section>
  )
}

export default Clients