import React from 'react'

const About = () => {
  return (
    <section className="section-padding gr-purple-light-bg to-up position-re bord-thin-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="intro-img-shape full-width">
              <div className="svg-shape-img">
                <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                  <defs>
                    <clipPath id="shape1">
                      <path d="M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z" fill="#d1d8e0"></path>
                    </clipPath>
                  </defs>
                  <image x="0" y="0" width="100%" height="100%" clipPath="url(#shape1)" xlinkHref="img/about/02.jpg" preserveAspectRatio="none"></image>
                </svg>
                <div className="svg-sub-bg">
                  <svg viewBox="0 0 500 500" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="100%">
                    <path d="M418.5,334.5Q384,419,293.5,437Q203,455,117,405.5Q31,356,39,254Q47,152,121,79.5Q195,7,287.5,46.5Q380,86,416.5,168Q453,250,418.5,334.5Z" fill="#f7f7f7"></path>
                  </svg>
                </div>
              </div>
              <div className="exp valign gr-blue2-bg">
                <div className="full-width">
                  <h2 className="fw-700">20</h2>
                  <span>Years Of <br /> Experience</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <div className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Highly expertise</span>
              </div>
              <h3 className="mb-20 fz-38 fw-700">Start building stunning websites with us.</h3>
              <p>
                Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies. Lorem Ipsum is simply dummy text of the printing and typesetting has been the industry’s
              </p>
              <div className="flex mt-50">
                <div className="item flex full-width">
                  <div className="icon-flex mr-20">
                    <h3>320</h3>
                  </div>
                  <div className="cont-flex valign">
                    <div>
                      <span>Perfect <br /> Prodects</span>
                    </div>
                  </div>
                </div>
                <div className="item flex full-width">
                  <div className="icon-flex mr-20">
                    <h3>100%</h3>
                  </div>
                  <div className="cont-flex valign">
                    <div>
                      <span>Positive <br /> Feedback</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wave-1 bottom bg-img" style={{ backgroundImage: "url('img/waves/wave-white2.svg')" }}></div>
    </section>
  )
}

export default About