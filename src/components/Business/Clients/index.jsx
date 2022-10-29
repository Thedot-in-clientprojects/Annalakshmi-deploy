/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import Split from '../../Split';
import clients from '../../../data/business/clients.json';

const Clients = () => {
  return (
    <section className="clients-carsouel section-padding pb-0">
      <div className="container">
        <Swiper
          id="content-carousel-container-unq-4" 
          className="swiper-container"
          spaceBetween={0}
          slidesPerView={5}
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
            clients.map((client, index) => (
              <SwiperSlide key={index}>
                <div className="item">
                  <div className="img">
                    <img src={client.image} alt="" />
                    <Split>
                      <a href="#0" className="link" data-splitting>{ client.text }</a>
                    </Split>
                  </div>
                </div>
              </SwiperSlide>
            ))
          }
        </Swiper>
        <div className="line-head mb-0 mt-80">
          <h6>+4000 Customers trust of us from 12 countries</h6>
        </div>
      </div>
    </section>
  )
}

export default Clients