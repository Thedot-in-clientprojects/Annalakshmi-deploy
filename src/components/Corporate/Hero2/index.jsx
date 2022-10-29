import heroData from '../../../data/corporate/hero2.json';

const Hero = () => {
  return (
    <section className="hero section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="main-text">
              <h6 className="sub-title gr-sunrise-text">What We Do ?</h6>
              <h3 className="fw-700 mb-15">{ heroData.sub_title }</h3>
              <p>
                { heroData.text }
              </p>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="hero-stu">
              {
                heroData.numbers.map((number, index) => (
                  <div className={`flex ${index !== heroData.numbers.length - 1 ? 'mb-40':''}`} key={index}>
                    <div className="numb mr-30 valign">
                      <h2 className="fz-40 fw-200">{ number.value }</h2>
                    </div>
                    <div className="cont">
                      <h6 className="mb-5">{ number.title }</h6>
                      <p>{ number.details }</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero