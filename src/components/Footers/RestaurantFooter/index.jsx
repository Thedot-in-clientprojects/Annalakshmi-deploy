/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="main-footer" style={{backgroundColor: "#EAEAEA"}}>
      <div className="container reservation pt-100 pb-80">
        <div className="row">
          <div className="col-lg-2 col-md-6">
            <div className="clumn">
              <div className="logo">
                <Link href="/landing-preview">
                  <a>
                    <img src="img/annalogo.png" alt="" />
                  </a>
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="clumn">
              <div className="flex">
                <div className="icon-flex mr-10">
                  <span className="icon main-color fz-22 pe-7s-map-marker"></span>
                </div>
                <div className="cont-flex">
                  <span className="fz-16 line-height-30">106, Race Course Rd, Gopalapuram, Coimbatore, Tamil Nadu 641018</span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="clumn">
              <div className="flex">
                <div className="icon-flex mr-10">
                  <span className="icon main-color fz-22 pe-7s-mail"></span>
                </div>
                <div className="cont-flex">
                  <h6 className="mb-10">Email Us :</h6>
                  <span className="fz-16"><a href="#0">annalakshmihospitality@gmail.com</a></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 d-flex justify-content-end">
            <div className="clumn text-center">
              <Link href="/contact-creative">
                <a className="butn butn-lg butn-light butn-bord">
                  <span>Make a Reservation</span>
                </a>
              </Link>
              <h6 className="main-color mt-20">+91 9843021844</h6>
            </div>
          </div>
        </div>
      </div>

      <div className="sub-footer pt-50 pb-50">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                {/* <ul className="rest">
                  <li className="mr-30">
                    <Link href="">
                      <a>Privacy policy</a>
                    </Link>
                  </li>
                  <li className="mr-30">
                    <Link href="">
                      <a>Legal notice</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="">
                      <a>Terms of service</a>
                    </Link>
                  </li>
                </ul> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">© 2022 Annalakshmi is Proudly Powered by <span className="underline"><a href="https://thedottech.in" rel="noreferrer" target="_blank" className="main-color">theDot Tech</a></span></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer