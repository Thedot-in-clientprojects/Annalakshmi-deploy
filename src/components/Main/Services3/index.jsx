import { useEffect } from "react";
import services from '../../../data/main/services3.json';

const Services = () => {
  useEffect(() => {
    document.querySelectorAll('[data-solid-color]').forEach(el => el.style.backgroundColor = el.dataset.solidColor);
  }, []);

  return (
    <section className="services section-padding pt-60">
      <div className="container">
        <div className="row justify-content-center mb-100">
          <div className="col-lg-6">
            <div className="simple-head md-mb10">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">Services</span>
              </h6>
              <h2 className="fz-40 fw-700">Best Services</h2>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="text">
              <p>The most widely sought for agency in branding nowadays we design brand, digital experience that engage the right customers.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item">
                  <span className={`icon-font ${service.icon} fz-40 mb-30 ${service.color}-color bg-solid-color circle-100 rest`} data-solid-color={service.solidColor}></span>
                  <h5 className="mb-15 fz-20">{ service.title }</h5>
                  <p>{ service.details }</p>
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