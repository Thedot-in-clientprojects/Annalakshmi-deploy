/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = ({ hideTop }) => {
  return (
    <footer className="sub-bg">
      <div className={`container ${hideTop ? '':'pt-100'}`}>
        {
          hideTop ? null : (
          <div className="row">
            <div className="col-lg-9">
              <div className="cont">
                <h6 className="sub-title fw-200 yellow-green-color mb-30">Get In Touch</h6>
                <h2>Want to make the interior of your home more extraordinary?</h2>
              </div>
            </div>
            <div className="col-lg-3 valign">
              <div className="d-flex justify-content-end full-width">
                <Link href="/contact-arch">
                  <a className="butn-dots mt-40">
                    <span>Let&lsquo;s Talk</span>
                    <span className="bord-round"></span>
                  </a>
                </Link>
              </div>
            </div>
          </div>
          )
        }
        <div className={`sub-f ${hideTop ? '':'mt-80'}`}>
          <div className="row">
            <div className="col-md-3">
              <div className="logo">
                <Link href="/landing-preview">
                  <a>
                    <img src="img/logo-light.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-md-9">
              <div className="copyrights d-flex justify-content-end">
                <p>
                  © 2022 Ravo is Proudly Powered by
                  <span className="underline">
                    <a href="https://themeforest.net/user/themescamp" rel="noreferrer" target="_blank" className="yellow-green-color ms-1">ThemesCamp</a>
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