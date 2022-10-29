import services from '../../../data/business/services2.json';

const Services = () => {
  return (
    <section className="services to-up md-no-pad">
      <div className="container">
        <div className="row">
          {
            services.map((service, index) => (
              <div className="col-lg-4" key={index}>
                <div className={`item text-center box-shadw pt-50 pb-50 ${index == services.length - 1 ? 'md-no-mrg':''}`}>
                  <div className="icon fz-50 mb-20 rest">
                    <span className={`${service.icon} gr-green-text`}></span>
                  </div>
                  <h6 className="mb-20 fw-600">{ service.title }</h6>
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