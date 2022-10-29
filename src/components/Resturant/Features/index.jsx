/* eslint-disable @next/next/no-img-element */
import features from '../../../data/restaurant/features.json';

const   Features = () => {
  return (
    <section className="feat pt-80 position-re" data-scroll-index="1">
      <div className="container">
        <div className="row">
          {
            features.map((feature, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className={`item flex ${idx !== features.length - 1 ? 'md-mb30':''}`}>
                  <div>
                    <span className="icon-img">
                      <img src={feature.image} alt="" />
                    </span>
                  </div>
                  <div>
                    <h6 className="mb-5">{ feature.title }</h6>
                    <p>{ feature.details }</p>
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

export default Features