/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import services from '../../../data/architecture/services.json';

const Services = () => {
  return (
    <section className="services section-padding" data-scroll-index="2">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="flex">
            <div className="m-title valign">
              <h3>Our Services</h3>
            </div>
            <div className="s-title valign">
              <h6>
                <Link href="/services-creative">
                  <a>All Services</a>
                </Link>
                <span className="icon pe-7s-angle-right"></span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item">
                  <span className="icon-img mb-30">
                    <img src={service.icon} alt="" />
                  </span>
                  <h6 className="mb-20 text-u ls4 fz-14"> { service.title }</h6>
                  <p>{ service.description.text1 } <br /> { service.description.text2 }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Services