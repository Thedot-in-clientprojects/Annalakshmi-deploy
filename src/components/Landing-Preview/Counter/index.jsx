/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react'
import Countdown from '../../../common/countdown'

const Start = () => {
  useEffect(() => {
    Countdown();
  }, []);

  return (
    <section className="box-gr">
      <div className="container-xxl box">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont md-mb50">
              <h2 className="mb-10">Buy now and get a new demos every week</h2>
              <p>By getting Ravo today, you receive free lifetime updates! Lots of interesting features are on the way!</p>
              <a href="#0" className="butn butn-md bg-dark text-light radius-30 mt-40 ">
                <span className="text slide-up">Purchase Now</span>
                <span className="text slide-down">Purchase Now</span>
              </a>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img">
              <img src="landing-preview/img/b1.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Start