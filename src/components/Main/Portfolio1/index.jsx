/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import portfolios from '../../../data/main/portfolio1.json';

const Portfolio = () => {
  return (
    <section className="work-carsouel crv section-padding bg-gray">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-80">
              <div className="flex">
                <div className="m-title valign">
                  <div>
                    <h6 className="ls2 text-u fz-13 mb-20 gr-purple-red-text rest inline">Our Portfolio</h6>
                    <h2 className="fw-700">Amazing Work</h2>
                  </div>
                </div>
                <div className="s-title valign ml-auto">
                  <h6>
                    <Link href="/portfolio-colorful-3col">
                      <a>See all Works</a>
                    </Link>
                    <i className="icon fz-20 pe-7s-angle-right"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Swiper 
              className="work-crsol position-re"
              slidesPerView="auto"
              spaceBetween={60}
              loop={true}
            >
              {
                portfolios.map(portfolio => (
                  <SwiperSlide key={portfolio.id}>
                    <figure>
                      <Link href="/project-details">
                        <a><img src={portfolio.image} alt="" /></a>
                      </Link>
                    </figure>
                    <div className="cont">
                      <div className="info">
                        <span className="fz-13 opacity-7">{ portfolio.type }</span>
                        <h6 className="fw-600 mt-5">
                          <Link href="/project-details">
                            <a>{ portfolio.title }</a>
                          </Link>
                        </h6>
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

export default Portfolio