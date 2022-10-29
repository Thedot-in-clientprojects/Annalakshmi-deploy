/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Responsive = () => {
  return (
    <section className="respons section-padding">
      <div className="container-xxl">
        <div className="row">
          <div className="col-lg-6">
            <div className="img md-mb50">
              <img src="landing-preview/img/b2.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="cont">
              <h6 className="sub-title inline gr-sunset-text">Template Adaptability</h6>
              <h2>Fully responsive & <br /> retina-ready</h2>
              <p className="fz-18 mt-10">Be sure that your brand new website looks great on any possible screen resolution and device.</p>
              <Link href="#0">
                <a className="butn butn-md bg-dark text-light radius-30 mt-40">
                  <span className="text slide-up">View Now</span>
                  <span className="text slide-down">View Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Responsive