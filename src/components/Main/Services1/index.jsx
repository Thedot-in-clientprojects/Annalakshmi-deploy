import Link from 'next/link';
import services from "../../../data/main/services1.json";

const Services = () => {
  return (
    <section className="services section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-80">
              <div className="flex">
                <div className="m-title valign">
                  <div>
                    <h6 className="ls2 text-u fz-13 mb-20 gr-purple-red-text rest inline">Best Features</h6>
                    <h2 className="fw-700">Our Services</h2>
                  </div>
                </div>
                <div className="s-title valign ml-auto">
                  <h6>
                    <Link href="/services-creative"><a>All Services</a></Link>
                    <i className="icon fz-20 pe-7s-angle-right"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            services.map(service => (
              <div className="col-lg-4" key={service.id}>
                <div className="item shadw bord wow fadeInUp" data-wow-delay=".1s">
                  <div className="icon fz-50 mb-15 rest">
                    <span className={`${service.icon} gr-purple-red-text`}></span>
                  </div>
                  <h6 className="mb-15">{ service.title }</h6>
                  <p>{ service.detials }</p>
                  <div className="tag mt-30">
                    {
                      service.tags.map((tag, i) => (
                        <a href="#0" className="me-1" key={i}>
                          <span>{ tag }</span>
                        </a>
                      ))
                    }
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