/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const CallToAction = () => {
  return (
    <section className="cal-actn section-padding" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="cont text-center">
              <h3 className="num"><span className="gr">3000<span className="thin">+</span></span></h3>
              <h6 className="sub-title inline gr-sunrise-text">Licenses sold and counting</h6>
              <h2>Let’s Start Your Business Today!</h2>
              <p>Create innovative website today. Purchase Ravo Template now!</p>
              <Link href="#0">
                <a className="butn butn-md gr-sunset-bg text-light radius-30 mt-40">
                  <span className="text slide-up">Purchase Now</span>
                  <span className="text slide-down">Purchase Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-img">
        <img src="landing-preview/img/circle.png" alt="" />
      </div>
    </section>
  )
}

export default CallToAction;