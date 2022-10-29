/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import Split from '../../Split';
import clients from '../../../data/creative/clients.json';

const Clients = ({ pt }) => {
  return (
    <section className={`clients-carsouel section-padding ${pt ? 'pt-0':''}`}>
      <div className="container">
        <div className="line-head">
          <h6>+4000 Customers trust of us from 12 countries</h6>
        </div>
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
      </div>
    </section>
  )
}

export default Clients