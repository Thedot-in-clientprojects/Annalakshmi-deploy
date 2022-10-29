import featuresData from '../../../data/landing-preview/best-features.json';

const BestFeatures = () => {
  return (
    <section className="best-feat section-padding" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          {
            featuresData.map(feature => (
              <div className="col-lg-4 mb-50" key={feature.id}>
                <div className="item">
                  <span className="icon">
                    <i className={`${feature.icon} gr-sunrise-text`}></i>
                  </span>
                  <h6>{ feature.title }</h6>
                  <p>{ feature.details }</p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default BestFeatures