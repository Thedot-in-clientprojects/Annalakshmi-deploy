import allFeatures from '../../../data/landing-preview/all-features.json';

const AllFeatures = () => {
  return (
    <section className="all-feat" data-overlay-dark="0">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="main-marq">
              <div className="slide-har st1">
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="slide-har st2">
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
              </div>
              <div className="slide-har st1">
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
                <div className="box">
                  {
                    allFeatures.map((feature, idx) => (
                      <div className="item d-flex align-items-center justify-content-between" key={idx}>
                        <span className={`icon ${feature.icon}`}></span>
                        <h6>{ feature.title }</h6>
                      </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllFeatures