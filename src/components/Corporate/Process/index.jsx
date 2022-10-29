import process from '../../../data/corporate/process.json';

const Process = ({ services }) => {
  return (
    <section className={`features-process section-padding position-re ${services ? 'pb-50 bg-gray-light':'pt-0'}`}>
      <div className="container">
        <div className="row">
          {
            process.map((step, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item flex">
                  <div className="fz-40 mr-20 lf-culm">
                    <span className="numb">{ step.numb }</span>
                  </div>
                  <div className="cont">
                    <h5 className="mb-10 fz-20 fw-600">{ step.title }</h5>
                    <p>{ services ? step.srdescription : step.description }</p>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      { services ? null : <div className="circle-pattern bottom right"></div> }
    </section>
  )
}

export default Process