/* eslint-disable @next/next/no-img-element */
import protfolioData from '../../../data/landing-preview/portfolio.json';

const Portfolio = () => {
  return (
    <section className="portfolio-blocks section-padding bg-gray">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-80">
              <h3 className="num"><span className="gr">40<span className="thin">+</span></span></h3>
              <h2>HTML Templates and unlimited layouts, pages, styles, headers, and footers.</h2>
            </div>
          </div>
          <div className="col-12">
            <div className="main-marq">
              <div className="slide-har st1">
                <div className="box">
                  {
                    protfolioData.st1.map((item, idx) => (
                      <div className="item" key={idx}>
                        <img src={item} alt="" />
                      </div>
                    ))
                  }
                </div>
                <div className="box">
                  {
                    protfolioData.st1.map((item, idx) => (
                      <div className="item" key={idx}>
                        <img src={item} alt="" />
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="slide-har st2">
                <div className="box">
                  {
                    protfolioData.st2.map((item, idx) => (
                      <div className="item" key={idx}>
                        <img src={item} alt="" />
                      </div>
                    ))
                  }
                </div>
                <div className="box">
                  {
                    protfolioData.st2.map((item, idx) => (
                      <div className="item" key={idx}>
                        <img src={item} alt="" />
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio