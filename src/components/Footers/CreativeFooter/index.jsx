/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Footer = () => {
  return (
    <footer className="main-footer bg-gray-light">
      <div className="container pt-80 pb-80">
        <div className="row">
          <div className="col-lg-3">
            <div className="clumn">
              <div className="logo mb-30">
                <a href="landing-preview.html">
                  <img src="img/logo-dark.png" alt="" />
                </a>
              </div>
              <div className="text">
                <p>We create digital experiences for brands and companies by using technology.</p>
              </div>
              <div className="social circle-bord mt-30">
                <ul className="rest horizontal-link">
                  <li>
                    <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                    <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                    <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">About Us</h5>
              <ul className="cmp-links">
                <li className="mb-10">
                  <a href="about-creative.html">Company</a>
                </li>
                <li className="mb-10">
                  <a href="about-business.html">Team</a>
                </li>
                <li className="mb-10">
                  <a href="services-creative.html">Services</a>
                </li>
                <li className="mb-10">
                  <a href="portfolio-classic-masonry.html">Products</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-3">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Office</h5>
              <ul className="address">
                <li className="adrs mb-15">Germany — 785 15h Street, Office 478 Berlin, De 81566</li>
                <li className="eml underline mb-15">
                  <a href="#0">Info-Support@Gmail.com</a>
                </li>
                <li className="tel">
                  <h6>+1 840 841 25 69</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Recent Posts</h5>
              <ul className="rc-post">
                <li>
                  <a href="blog-grid-modern.html" className="flex mb-30">
                    <div className="img">
                      <img src="img/blog/2.jpg" alt="" />
                    </div>
                    <div className="cont">
                      <h6 className="fz-16 line-height-28">How to check the website before releasing it?</h6>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="blog-grid-modern.html" className="flex">
                    <div className="img">
                      <img src="img/blog/3.jpg" alt="" />
                    </div>
                    <div className="cont">
                      <h6 className="fz-16 line-height-28">How to check the website before releasing it?</h6>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                <ul className="rest">
                  <li className="mr-30">
                    <a href="services-business.html">Privacy policy</a>
                  </li>
                  <li className="mr-30">
                    <a href="services-business.html">Legal notice</a>
                  </li>
                  <li>
                    <a href="services-business.html">Terms of service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">© 2022 Ravo is Proudly Powered by <span className="underline"><a rel="noreferrer" href="https://themeforest.net/user/themescamp" target="_blank">ThemesCamp</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer