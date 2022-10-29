import services from '../../../data/business/services3.json';

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-13 fw-600 mb-20 gr-green-text rest">Best Features</h6>
              <h2 className="fw-600">Designed For You</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className="item text-center bord no-bord bg-gray-light">
                  <div className="icon fz-60 mb-20 rest">
                    <span className={`${service.icon} gr-green-text`}></span>
                  </div>
                  <h5 className="mb-20 fz-20 fw-500">{ service.title }</h5>
                  <p>{ service.detials }</p>
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