import plans from '../../../data/corporate/pricing.json';

const Pricing = () => {
  return (
    <section className="price section-padding">
      <div className="container">
        <div className="price-table">
          <div className="row justify-content-center">
            {
              plans.map((plan, idx) => (
                <div className="col-md-6 col-lg-4" key={idx}>
                  <div className={`item ${idx !== plans.length - 1 ? 'md-mb50':''} ${plan.active ? 'active':''}`}>
                    <div className="round-head type">
                      <h6 className="ls2 text-u fz-12 mb-30">{ plan.plan_name } <span></span></h6>
                    </div>
                    <div className="amount text-center">
                      <h3 className="full-width"><span>$</span>{ plan.plan_price }</h3>
                    </div>

                    <div className="offer">
                      <ul className="rest">
                        {
                          plan.plan_features.map((feature, i) => (
                            <li key={i}><span className="icon gr-sunrise-text fas fa-check fz-12"></span>{ feature.title }</li>
                          ))
                        }
                      </ul>
                    </div>
  cla                   fa-inverse
                    <div className="order text-center">
                      <a href="#0" className={`butn butn-md butn-icon-anim text-light radius-30 ${plan.active?'gr-sunrise-bg':'dark-blue-bg'}`}>
                        <div className="text">
                          <span className="text-anim-two fz-12 fw-500 text-u ls2">Purchase Now</span>
                          <span className="icon anim-two fz-12 fas fa-long-arrow-alt-right ml-10"></span>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing