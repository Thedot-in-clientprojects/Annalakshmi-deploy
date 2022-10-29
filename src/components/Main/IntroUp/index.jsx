import IntroData from '../../../data/main/intro.json';

const IntroUp = () => {
  return (
    <section className="intro-up bg-gray">
      <div className="container">
        <div className="row">
          {
            IntroData.map(item => (
              <div className="col-lg-4" key={item.id}>
                <div className="item flex wow fadeInUp" data-wow-delay=".1s">
                  <div className="icon fz-40 mr-30 rest">
                    <span className={`${item.icon} gr-purple-red-text`}></span>
                  </div>
                  <div className="cont">
                    <h6 className="mb-5 fw-600">{ item.title }</h6>
                    <p>{ item.details }</p>
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

export default IntroUp