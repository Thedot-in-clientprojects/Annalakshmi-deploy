/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import portfolios from '../../../data/freelancer/portfolio.json';

const Portfolio = () => {
  return (
    <section className="portfolio-prsonl" data-scroll-index="2">
      <div className="container">
        <div className="head-underline mb-80 flex">
          <h3>Portfolio</h3>
          <div className="s-title ml-auto valign">
            <h6>
              <Link href="/portfolio-classic-3col">
                <a>See All Works</a>
              </Link>
              <i className="icon fz-20 pe-7s-angle-right"></i>
            </h6>
          </div>
        </div>
        <div className="row">
          {
            portfolios.map((portfolio, idx) => (
              idx * 2 % 3 === 0 ?
                <div className="col-12" key={idx}>
                  <div className={`item ${portfolio.class} mb-30 bg-img`} style={{ backgroundImage: "url('freelancer/img/lines.svg')" }}>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="cont pb-50">
                          <span className="fz-60 mb-30">{ portfolio.number }</span>
                          <h5 className="fw-600 mb-10">{ portfolio.title }</h5>
                          <p>
                            { portfolio.details[0] } <br /> { portfolio.details[1] }
                          </p>
                          <Link href="/project-details">
                            <a className="sub-title mb-0 mt-20">
                              <span className="text fz-12">View project</span>
                            </a>
                          </Link>
                        </div>
                      </div>
                      <div className="col-md-6 d-flex align-items-end">
                        <div className="img full-width">
                          <img src={portfolio.image} alt="" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                :
                <div className="col-lg-6" key={idx}>
                  <div className={`item ${portfolio.class} mb-30 bg-img`} style={{ backgroundImage: "url('freelancer/img/lines.svg')" }}>
                    <div className="cont flex mb-50">
                      <div className="mr-30">
                        <span className="fz-40 mb-30">{ portfolio.number }</span>
                      </div>
                      <div>
                        <h5 className="fw-600 mb-5"><a href="#0">{ portfolio.title }</a></h5>
                        <p>
                          { portfolio.details }
                        </p>
                      </div>

                    </div>
                    <div className="img">
                      <img src={portfolio.image} alt="" />
                    </div>
                  </div>
                </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Portfolio