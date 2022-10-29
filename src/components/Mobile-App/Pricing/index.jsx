import plans from '../../../data/mobile-app/pricing.json';

const Pricing = () => {
  return (
    <section className="price section-padding" data-scroll-index="4">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-9">
            <div className="section-head text-center mb-80">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u gr-orange-text">Pricing</span>
              </h6>
              <h2>A Simple Price</h2>
            </div>
          </div>
        </div>
        <div className="price-table">
          <div className="row">
            {
              plans.map((plan, idx) => (
                <div className={`col-md-6 item ${idx !== plans.length - 1 ? 'sm-mb50':''}`} key={idx}>
                  <div>
                    <div className="round-head type">
                      <h6 className="ls2 text-u fz-12 mb-30">{ plan.plan_name } <span></span></h6>
                    </div>

                    <div className="content">
                      <div className="amount">
                        <h3 className="full-width"><span>$</span>{ plan.plan_price }</h3>
                      </div>

                      <div className="text">
                        <p className="fz-14">{ plan.plan_description }</p>
                      </div>

                      <div className="offer">
                        <ul className="rest">
                          {
                            plan.plan_features.map((feature, i) => (
                              <li className={feature.available ? '':'dis'} key={i}>
                                <span className="icon gr-orange-text fas fa-check fz-12"></span> { feature.title }
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>

                    <div className="order text-center rest">
                      <a href="#0">
                        <span className="text-anim-two fz-12 fw-500 text-u ls2">Purchase Now</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
    </section>
  )
}

export default Pricing