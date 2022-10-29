/* eslint-disable @next/next/no-img-element */
import services from '../../../data/corporate/services.json';

const Services = ({ services: isServicesPage }) => {
  return (
    <section className={`services section-padding ${isServicesPage ? 'pb-0':'pt-0'}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Best Features<span></span></h6>
              <h2 className="fw-700">Designed For You</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item text-center padding-rl-30">
                  <div className="icon-img-70 m-auto mb-40">
                    <img src={service.icon} alt="" />
                  </div>
                  <h5 className="mb-15 fz-20 fw-600">{ service.title }</h5>
                  <p>{ isServicesPage ? service.srdescription : service.description }</p>
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