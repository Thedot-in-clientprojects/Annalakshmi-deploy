/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Info = () => {
  return (
    <section className="codei section-padding">
      <div className="container-xxl box">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="cont md-mb50">
              <h2 className="mb-10">Build and customize stunning pages in minutes – easily.</h2>
              <p>huge collection of elements, rich customizability, flexible layouts, and fast results!</p>
              <p>Choose a pre-built headers or create a custom layout that perfectly suits your needs. It’s easy, fast and mobile-friendly.</p>
              <Link href="#0">
                <a className="butn butn-md bg-dark text-light radius-30 mt-40">
                  <span className="text slide-up">Purchase Now</span>
                  <span className="text slide-down">Purchase Now</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img">
              <img src="landing-preview/img/b3.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info