import { useEffect } from 'react';
import Link from 'next/link';
import parallaxie from '../../../common/parallaxie';

const CallToAction = () => {
  useEffect(() => {
    parallaxie('.call-action.bg-img.parallaxie');
  }, []);

  return (
    <section className="section-padding bg-img parallaxie call-action" data-background="img/background/14.jpg" data-overlay-dark="6">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="text-center">
              <h2 className="mb-5">Have a project in mind? Let&lsquo;s discuss.</h2>
              <p>lead your business to success with Ravo design better websites and spend less time.</p>
              <Link href="/contact-creative">
                <a className="butn butn-md gr-purple-red-bg text-light mt-30">
                  <span className="text slide-up">Purchase Now</span>
                  <span className="text slide-down">Purchase Now</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CallToAction