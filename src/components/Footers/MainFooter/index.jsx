/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from "react";
import Link from 'next/link';
import footerData from '../../../data/footers/main-footer.json';

const Footer = ({ footerClass, footerBg, business, creative }) => {
  const footerRef = useRef(null);

  useEffect(() => {
    if (!creative) footerRef.current.setAttribute("data-overlay-dark", "0");
  }, [creative]);

  return (
    <footer className={footerClass} style={{ backgroundImage: footerBg ? "url('img/background/8.jpg')":"url('')" }} ref={footerRef}>
      {
        footerBg ? (
          <div className="cal pb-80 pt-80">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="cont">
                    <h6 className="sub-title gr-green-text">Stay Connected</h6>
                    <h4 className="fz-50">Partner with us!</h4>
                    <p className="mt-5 fw-300 fz-20">Let’s build the next big thing together.</p>
                  </div>
                </div>
                <div className="col-lg-5 d-flex justify-content-end">
                  <div>
                    <Link href="/contact-creative">
                      <a className="butn butn-md butn-rounded butn-light mt-30">
                        <span className="text">Get In Touch</span>
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
        :
        null
      }
      <div className="container pt-80 pb-80">
        <div className="row">
          <div className="col-lg-3">
            <div className="clumn">
              <div className="logo mb-30">
                <Link href="/landing-preview">
                  <a>
                    <img src={`img/logo-${creative ?'dark':'light'}.png`} alt="" />
                  </a>
                </Link>
              </div>
              <div className="text">
                <p>We create digital experiences for brands and companies by using technology.</p>
              </div>
              <div className="social circle-bord mt-30">
                <ul className="rest horizontal-link">
                  <li>
                    <a href={footerData.social_links.facebook}><i className="fab fa-facebook-f"></i></a>
                    <a href={footerData.social_links.twitter} className="ms-1"><i className="fab fa-twitter"></i></a>
                    <a href={footerData.social_links.youtube} className="ms-1"><i className="fab fa-youtube"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">About Us</h5>
              <ul className="cmp-links">
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
          <div className="col-lg-3">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Office</h5>
              <ul className="address">
                <li className="adrs mb-15">{ footerData.address }</li>
                <li className="eml underline mb-15">
                  <a href="#0">{ footerData.email }</a>
                </li>
                <li className="tel">
                  <h6 className={`${business ? 'gr-green-text': creative ? '':'gr-purple-red-text'}`}>{ footerData.phone }</h6>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="clumn">
              <h5 className="title fw-600 fz-20 mb-30">Recent Posts</h5>
              <ul className="rc-post">
                {
                  footerData.recent_posts.map((post, idx) => (
                    <li key={idx}>
                      <Link href={post.url}>
                        <a className={`flex ${idx !== footerData.recent_posts.length - 1 ? 'mb-30':''}`}>
                          <div className="img">
                            <img src={post.image} alt="" />
                          </div>
                          <div className="cont">
                            <h6 className="fz-16 line-height-28">{ post.title }</h6>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className={`${footerBg ? 'sub-footer pb-50 pt-0 no-bord': creative ? 'sub-footer pb-50 pt-50':'sub-footer pb-50'}`}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                <ul className="rest">
                  <li className="mr-30">
                    <Link href="/services-business">
                    <a>Privacy policy</a>
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href="/services-business">
                    <a>Legal notice</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/services-business">
                    <a>Terms of service</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">
                  © 2022 Ravo is Proudly Powered by 
                  <span className="underline">
                    <a href={footerData.theme_author.url} rel="noreferrer" target="_blank" className={`${business ? 'gr-green-text':creative ? '':'gr-purple-red-text'} ms-1`}>{ footerData.theme_author.name }</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer