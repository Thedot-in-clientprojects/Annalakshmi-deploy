/* eslint-disable @next/next/no-img-element */
import blockData from '../../../data/mobile-app/block.json';

const Block = () => {
  return (
    <section className="section-padding blck" data-scroll-index="1">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 offset-lg-1">
            <div className="img hf-circle md-mb50">
              <img src="mobile-app/img/1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-6 offset-lg-2 valign">
            <div className="content">
              <div className="fz-12 ls2 text-u mb-10">
                <span className="gr-orange-text">Highly expertise</span>
              </div>
              <h2 className="mb-20">We design brand, digital experience.</h2>
              <p>Morbi sagittis hendrt nulla ultricies. Cras en diam ips elementum pretium hendrerit ultricies.</p>

              <ul className="check-list rest mt-20">
                {
                  blockData.map((item, idx) => (
                    <li className={item !== blockData.length - 1 ? 'mb-10':''} key={idx}>
                      <span className="icon mr-20"><i className="fas fa-check"></i></span>{item}
                    </li>
                  ))
                }
              </ul>

              <a href="#0" className="butn butn-md gr-orange-bg text-light radius-30 mt-30">
                <span className="text slide-up">Download Now</span>
                <span className="text slide-down">Download Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="circle-blur"></div>
    </section>
  )
}

export default Block