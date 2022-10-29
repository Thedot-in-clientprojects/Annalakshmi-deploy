import heroData from '../../../data/architecture/hero.json';

const Hero = () => {
  return (
    <section className="hero-cr section-padding" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="img-exp">
              <div className="img bg-img" style={{ backgroundImage: "url('arch/img/h1.jpg')" }}></div>
              <div id="circle">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="300px"
                  height="300px" viewBox="0 0 300 300" enableBackground="new 0 0 300 300" xmlSpace="preserve">
                  <defs><path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " /></defs>
                  <circle cx="150" cy="100" r="75" fill="none" />
                  <g>
                    <use xlinkHref="#circlePath" fill="none" />
                    <text fill="#fff"><textPath xlinkHref="#circlePath">luxury architecture . luxury architecture</textPath></text>
                  </g>
                </svg>
              </div>
              <div className="rotate-exp">
                <h2 className="yellow-green-color">{ heroData.years }</h2>
                <h6>Years <br /> Of Experience</h6>
              </div>
            </div>
          </div>
          <div className="col-lg-6 valign">
            <div className="content">
              <h6 className="fz-12 text-u ls4 yellow-green-color mb-10">About Us</h6>
              <h3 className="mb-30">{ heroData.text }</h3>
              <p className="mb-10">{ heroData.text2 }</p>
              <p>{ heroData.text3 }</p>
              <a href="#0" data-scroll-nav="2" className="butn-dots mt-40">
                <span>About Company</span>
                <span className="bord-round"></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero