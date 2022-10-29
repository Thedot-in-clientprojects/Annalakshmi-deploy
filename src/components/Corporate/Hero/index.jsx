import quoteData from '../../../data/corporate/hero.json';

const Hero = () => {
  return (
    <section className="hero section-padding position-re">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="main-text">
              <h6 className="sub-title gr-sunrise-text">How We Are ?</h6>
              <h4 className="fw-700">Ultimate xperiences with story, emotion and purpose</h4>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 valign">
            <div className="hero-cont">
              <p className="fw-500 fz-18 mb-10 text-dark"><span className="fz-30">W</span>e help our clients succeed by creating brand identities, digital experiences, and print materials that communicate clearly, achieve marketing goals, and look fantastic.</p>
            </div>
          </div>
        </div>
        <div className="row mt-80">
          <div className="col-lg-8 img-quote bg-img" style={{ backgroundImage: `url('${quoteData.image}')` }}></div>
          <div className="col-lg-4 valign">
            <div className="quote full-width">
              <blockquote>
                <h5 className="fz-28 fw-200 line-height-50 mb-50">{ quoteData.quote }</h5>
              </blockquote>
              <div className="author mb-10">
                <span className="fw-700 fz-13 text-u ls3 gr-sunrise-text">{ quoteData.author }</span>
              </div>
              <div className="position">
                <span>{ quoteData.position }</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-pattern bottom left"></div>
    </section>
  )
}

export default Hero