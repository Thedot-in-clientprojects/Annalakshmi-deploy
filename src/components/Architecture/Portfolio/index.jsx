/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import portfolios from '../../../data/architecture/portfolio.json';

const Portfolio = () => {
  return (
    <section className="work-crsol-clum section-padding pt-0" data-scroll-index="3">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="flex">
            <div className="m-title valign">
              <h3>Featured Works</h3>
            </div>
            <div className="s-title valign">
              <h6>
                <a href="portfolio-classic-masonry.html">All Works</a>
                <span className="icon pe-7s-angle-right"></span>
              </h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <Swiper
          id="content-carousel-container-unq-2" 
          className="swiper-container"
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          speed={1000}
          breakpoints={{
            0: {
              slidesPerView: 1
            },
            640: {
              slidesPerView: 2
            },
            1024: {
              slidesPerView: 4
            }
          }}
        >
          {
            portfolios.map((portfolio, idx) => (
              <SwiperSlide key={idx}>
                <div className="item">
                  <div className="img">
                    <img src={portfolio.image} alt="" />
                  </div>
                  <div className="cont text-center mt-40">
                    <h6>
                      <Link href="/project-details">
                        <a>{ portfolio.title }</a>
                      </Link>
                    </h6>
                    <p className="mt-5">{ portfolio.type }</p>
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

export default Portfolio