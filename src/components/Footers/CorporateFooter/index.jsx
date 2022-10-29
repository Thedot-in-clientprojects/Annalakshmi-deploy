/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import footerData from '../../../data/footers/main-footer.json';

const Footer = () => {
  return (
    <footer className="footer-half pb-100 pt-100">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="left-half">
              <h6 className="sub-title gr-sunrise-text">Stay Connected</h6>
              <h2 className="fz-30 fw-700 mb-30">Let’s build the next big thing together</h2>
              <Link href="/contact-creative">
                <a className="butn butn-lg gr-sunrise-bg text-light radius-30">
                  <span className="text words chars splitting" data-splitting>Get In Touch</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="right-half">
              <div className="row">
                <div className="col-lg-4">
                  <div className="clumn">
                    <div className="logo mb-30">
                      <a href="landing-preview.html">
                        <img src="img/logo-light.png" alt="" />
                      </a>
                    </div>
                    <div className="text">
                      <p>We create digital experiences for brands and companies by using technology.
                      </p>
                    </div>
                    <div className="social circle-bord mt-30">
                      <ul className="rest horizontal-link fz-12">
                        <li>
                          <a href={footerData.social_links.facebook}><i className="fab fa-facebook-f"></i></a>
                          <a href={footerData.social_links.twitter} className="ms-2"><i className="fab fa-twitter"></i></a>
                          <a href={footerData.social_links.youtube} className="ms-2"><i className="fab fa-youtube"></i></a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="clumn">
                    <h6 className="title mb-30">About Us</h6>
                    <ul className="cmp-links rest">
                      {
                        footerData.links.map((link, idx) => (
                          <li className="mb-10" key={idx}>
                            <Link href={link.url}>
                              <a>{link.title}</a>
                            </Link>
                          </li>
                        ))
                      }
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="clumn">
                    <h5 className="title mb-30">Office</h5>
                    <ul className="address rest">
                      <li className="adrs underline mb-15">{ footerData.address }</li>
                      <li className="eml">
                        <a href="#0">{ footerData.email }</a>
                      </li>
                      <li className="tel gr-sunrise-text">
                        <h6 className="fw-700">{ footerData.phone }</h6>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer