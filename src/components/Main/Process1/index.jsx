import processes from '../../../data/main/process1.json';

const Process = () => {
  return (
    <section className="features-process section-padding position-re pt-0">
      <div className="container">
        <div className="row">
          {
            processes.map((process, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item flex wow fadeInUp" data-wow-delay={`${(idx * 0.2) + 0.1}s`}>
                  <div className="fz-40 mr-30 lf-culm">
                    <span className="numb">{ process.num }</span>
                  </div>
                  <div className="cont">
                    <h6 className="mb-10 fw-600">{ process.title }</h6>
                    <p>{ process.details }</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <div className="circle-pattern bottom right"></div>
    </section>
  )
}

export default Process