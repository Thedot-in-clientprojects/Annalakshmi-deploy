/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from 'swiper/react';
import testimonials from '../../../data/mobile-app/testimonial.json';

const Testimonials = () => {
  return (
    <section data-scroll-index="3">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-head text-center mb-80">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">Testimonials</span>
              </h6>
              <h2>What our customers say</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="testim-grid">
        <div className="container box">
          <div>
            <Swiper
              id="content-carousel-container-unq-0" 
              className="swiper-container"
              spaceBetween={30}
              slidesPerView={3}
              loop={true}
              speed={1000}
              centeredSlides={true}
              breakpoints={{
                0: {
                  slidesPerView: 1
                },
                640: {
                  slidesPerView: 1.5
                },
                1024: {
                  slidesPerView: 4
                }
              }}
            >
              {
                testimonials.map((testimonial, idx) => (
                  <SwiperSlide key={idx}>
                    <div className="item">
                      <div className="mb-30">
                        <span className="rate-star fz-10">
                          {
                            Array(Math.floor(testimonial.rating)).fill().map((_,i) => (<i className="fas fa-star me-1" key={i}></i>))
                          }
                          {
                            String(testimonial.rating).split('.')[1] ? <i className="far fa-star-half"></i> : null
                          }
                        </span>
                      </div>
                      <div className="text mb-30">
                        <p>{ testimonial.comment }</p>
                      </div>
                      <div className="cont flex">
                        <div className="img-flex valign">
                          <div className="img">
                            <img src={testimonial.image} alt="" className="circle-img" />
                          </div>
                        </div>
                        <div className="info valign ml-20">
                          <div>
                            <h6>{ testimonial.author }</h6>
                            <span className="text-u ls1 fz-12">{ testimonial.position }</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              }
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials