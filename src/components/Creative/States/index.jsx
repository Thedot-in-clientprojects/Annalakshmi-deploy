import statsData from '../../../data/creative/states.json';

const States = () => {
  return (
    <section className="numb-states section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5">
            <div className="content md-mb50">
              <h3 className="fz-45 fw-700">Quiality and reliability built into everything we do.</h3>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 no-padding">
            <div className="row">
              <div className="col-md-6">
                <div className="item sm-mb50">
                  <h3 className="mb-10 fw-200">{ statsData.first.number }</h3>
                  <h6 className="mb-10 fw-600">{ statsData.first.title }</h6>
                  <p>{ statsData.first.description }</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="item">
                  <h3 className="mb-10 fw-200">{ statsData.second.number }</h3>
                  <h6 className="mb-10 fw-600">{ statsData.second.title }</h6>
                  <p>{ statsData.second.description }</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default States