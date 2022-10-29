/* eslint-disable @next/next/no-img-element */

const Header = () => {
  return (
    <header className="pg-header-corp section-padding pb-0">
      <div className="container mt-100">
        <div className="row">
          <div className="col-lg-6 md-mb50">
            <div className="img-row flex d-flex align-items-end">
              <div className="img1">
                <img src="img/background/18.jpg" alt="" />
              </div>
              <div className="img2">
                <img src="img/background/19.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign md-mb20">
            <div className="main-text">
              <h6 className="sub-title gr-sunrise-text">How We Are ?</h6>
              <h3 className="fz-45 fw-700">Ultimate xperiences with story, emotion <br /> and purpose</h3>
            </div>
          </div>
        </div>
        <div className="row mt-30">
          <div className="col-lg-6">
            <div className="img md-mb30">
              <img src="img/background/14.jpg" alt="" />
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img">
              <img src="img/background/16.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header