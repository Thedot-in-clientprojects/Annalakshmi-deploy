/* eslint-disable @next/next/no-img-element */
import { Swiper, SwiperSlide } from "swiper/react";
import testimonials from '../../../data/main/testimonials3.json';

const Testimonials = () => {
  return (
    <section className="section-padding gr-purple-light-bg position-re bord-thin-bottom">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11 position-re">
            <div className="row justify-content-center">
              <div className="col-lg-10">
                <div className="testim-simp-crus">
                  <Swiper 
                    id="content-carousel-container-unq-4"
                    className="swiper-container"
                    slidesPerView={1}
                    spaceBetween={0}
                    speed={1000}
                    loop={true}
                  >
                    {
                      testimonials.map((testimonial, idx) => (
                        <SwiperSlide key={idx}>
                          <div className="item text-center">
                            <div className="img mb-30">
                              <img src={testimonial.author.avatar} alt="" />
                            </div>
                            <div className="text">
                              <h5 className="fz-28 fw-400 line-height-50">{ testimonial.comment }</h5>
                            </div>
                            <div className="info mt-30">
                              <h6 className="mb-5">{ testimonial.author.name }</h6>
                              <span>{ testimonial.author.position }</span>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))
                    }
                  </Swiper>
                </div>
              </div>
            </div>
            <div className="simg-testim">
              <div className="img1 circle-50">
                <img src="img/testimonials/c2.jpg" alt="" />
              </div>
              <div className="img2 circle-80">
                <img src="img/testimonials/c3.jpg" alt="" />
              </div>
              <div className="img3 circle-40">
                <img src="img/testimonials/c1.jpg" alt="" />
              </div>
              <div className="img4 circle-40">
                <img src="img/testimonials/c3.jpg" alt="" />
              </div>
              <div className="img5 circle-60">
                <img src="img/testimonials/c1.jpg" alt="" />
              </div>
              <div className="img6 circle-70">
                <img src="img/testimonials/c2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="wave-1 top revers-x bg-img" style={{ backgroundImage: "url('img/waves/wave-white2.svg')" }}></div>
    </section>
  )
}

export default Testimonials