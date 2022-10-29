/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import demosData from "../../../data/landing-preview/demos.json";

const Demos = () => {
  return (
    <section className="demos section-padding">
      <div className="container-xxl">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-10">
            <div className="sec-head text-center mb-40">
              <h2 className="num"><span className="gr-sunset-text">10<span className="thin">+</span></span></h2>
              <h3>Stunning Homepages</h3>
              <p>A great collection of beautiful website templates for your need. Choose the best suitable template and start customizing it.</p>
            </div>
          </div>
        </div>
        <div className="row">
          {
            demosData.map((demo) => (
              <div className="col-lg-4 col-md-6" key={demo.id}>
                <div className="item">
                  <Link href={demo.link}>
                    <a target="_blank">
                      <div className="img">
                        <img src={demo.image} alt="" />
                      </div>
                      <div className="info">
                        <span>{ demo.type }</span>
                        <h6>{ demo.title }</h6>
                      </div>
                    </a>
                  </Link>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Demos;