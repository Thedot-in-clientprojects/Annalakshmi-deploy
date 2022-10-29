/* eslint-disable @next/next/no-img-element */
import services from '../../../data/restaurant/services.json';

const Services = () => {
  return (
    <section className="feat-circle-img section-padding" style={{backgroundColor: "#FFEEC9"}} data-scroll-index="3">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className=" text-center mb-80">
              {/* <h6 className="ls2 text-u fz-12 mb-15">special recipes<span></span></h6> */}
              <h2 style={{color: "#9B1915"}} className="gilroyEB">Our Specials</h2>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map((service, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className={`item ${idx !== services.length - 1 ? 'md-mb50':''}`}>
                  <div className="img">
                    <img src={service.image} alt="" />
                  </div>
                  <div className="cont text-center mt-20">
                    <h6><a href="#0">{ service.name }</a></h6>
                    <p>{ service.ingredients }</p>
                  </div>
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