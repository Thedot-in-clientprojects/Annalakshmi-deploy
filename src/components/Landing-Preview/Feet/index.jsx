import feetData from "../../../data/landing-preview/feet.json";

const Feet = () => {
  return (
    <section className="feat-dark" data-overlay-dark="0">
      <div className="container">
        <div className="row">
          {
            feetData.map((item, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className={`item flex ${idx !== feetData.length - 1 ? 'md-mb50':''}`}>
                  <div className="icon">
                    <span className={item.icon}></span>
                  </div>
                  <div className="cont">
                    <h6>{ item.title }</h6>
                    <p>{ item.details }</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="pattern bg-img" style={{ backgroundImage: 'url(landing-preview/img/pattern.png)' }}></div>
    </section>
  )
}

export default Feet;