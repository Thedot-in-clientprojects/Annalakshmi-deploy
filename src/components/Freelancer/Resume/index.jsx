import resumeData from '../../../data/freelancer/resume.json';

const Resume = () => {
  return (
    <section className="resume section-padding" data-scroll-index="3">
      <div className="container">
        <div className="head-underline mb-80 flex">
          <h3>Experience</h3>
          <div className="s-title ml-auto valign">
            <h6>
              <a href="#0">Download C.V</a>
              <i className="icon fz-20 pe-7s-angle-right"></i>
            </h6>
          </div>
        </div>
        <div className="row">
          {
            resumeData.map((item, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="item flex mb-30">
                  <div className="date valign">
                    <h4>{ item.date }</h4>
                  </div>
                  <div className="cont flex">
                    <div className="valign mr-40">
                      <span className={`icon bg-color${idx+1} circle-60`}>
                        <i className={item.icon}></i>
                      </span>
                    </div>
                    <div>
                      <h6>{ item.title }</h6>
                      <p>{ item.at }</p>
                    </div>
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

export default Resume