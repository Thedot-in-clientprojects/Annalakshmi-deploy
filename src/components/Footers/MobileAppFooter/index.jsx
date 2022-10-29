/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="section-padding sub-bg pb-0" data-scroll-index="5">
      <div className="download-app">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 valign">
              <div className="cont pb-80">
                <div className="fz-12 ls2 text-u mb-10">
                  <span className="gr-orange-text">Download Ravo App</span>
                </div>
                <h2 className="mb-20 fw-500">We available on store download now.</h2>
                <p>Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies.</p>

                <div className="download-button mt-40">
                  <a href="#0" className="butn butn-lg butn-rounded down-butn bg-white mr-10">
                    <span>Apple Store</span>
                    <span className="icon ml-10"><i className="fab fa-apple"></i></span>
                  </a>
                  <a href="#0" className="butn butn-lg butn-rounded down-butn bord-white">
                    <span>Goole play</span>
                    <span className="icon ml-10"><i className="fab fa-google-play"></i></span>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1 d-flex align-items-end">
              <div className="img">
                <img src="mobile-app/img/2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="md-center md-mb30">
                <a href="#0" className="logo">
                  <img src="img/logo-light.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="links text-center">
                <ul className="rest">
                  <li>
                    <a href="#0" data-scroll-nav="0">Home</a>
                  </li>
                  <li>
                    <a href="#0" data-scroll-nav="1">About</a>
                  </li>
                  <li>
                    <a href="#0" data-scroll-nav="2">Services</a>
                  </li>
                  <li>
                    <Link href="/contact-arch">
                      <a>Contact</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
              <div className="copyrights">
                <p className="fz-14">Made By <a href="#0" className="gr-orange-text">UI-ThemeZ</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
    </footer>
  )
}

export default Footer