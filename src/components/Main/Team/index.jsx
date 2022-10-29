/* eslint-disable @next/next/no-img-element */
import team from '../../../data/main/team.json';

const Team = () => {
  return (
    <section className="team-clas section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-80">
              <div className="flex">
                <div className="m-title valign">
                  <div>
                    <h6 className="ls2 text-u fz-13 mb-20 gr-purple-red-text rest inline">Our Team</h6>
                    <h2 className="fw-700">Creative Minds</h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {
            team.map((member, idx) => (
              <div className="col-lg-4 col-md-6" key={idx}>
                <div className={`item ${idx !== team.length - 1 ? 'md-mb50':''} wow fadeInUp`} data-wow-delay=".1s">
                  <div className="img radius-10">
                    <img src={member.picture} alt="" />
                    <div className="social">
                      <a href="#0" className="me-1"><i className="fab fa-facebook-f"></i></a>
                      <a href="#0" className="me-1"><i className="fab fa-twitter"></i></a>
                      <a href="#0"><i className="fab fa-behance"></i></a>
                    </div>
                  </div>
                  <div className="info text-center mt-25">
                    <h6 className="mb-5 fw-600">{ member.name }</h6>
                    <span className="fz-15">{ member.position }</span>
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

export default Team