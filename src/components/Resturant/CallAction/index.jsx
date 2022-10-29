/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const CallAction = () => {
  return (
    <section className="call-action-app valign position-re">
      <div className="container bg-gray radius-20">
        <div className="row">
          <div className="col-lg-6">
            <div className="cont">
              <h6 className="sub-title main-color">Download App</h6>
              <h2>Download our ios & andorid mobile app</h2>
              <p className="fz-18 mt-10">Discover local, on-demand delivery or pickup from nearby restaurant.</p>
              <Link href="/contact-creative">
                <a className="butn butn-md butn-dark butn-rounded revers mt-30">
                  <div className="flex">
                    <span>Order now</span>
                    <span className="valign">
                      <span className="text-center">
                        <i className="icon ic-shadow ml-30 fas fa-long-arrow-alt-right"></i>
                      </span>
                    </span>
                  </div>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 position-re">
            <div className="img">
              <img src="restaurant/img/app.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="de-img1">
        <img src="restaurant/img/de/2.png" alt="" />
      </div>
    </section>
  )
}

export default CallAction