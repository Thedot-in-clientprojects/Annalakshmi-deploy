/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import blockdata from '../../../data/mobile-app/block2.json';

const Block = () => {
  const [blockData, setBlockData] = useState(blockdata);

  const openTab = (e, tab) => {
    let element = e.target;
    if (e.target.tagName !== 'LI') element = e.target.closest('li');
    
    document.querySelectorAll('.item-link').forEach(item => item.classList.remove('current'));
    element.classList.add('current');

    let newBlockData = blockdata.map(item => {
      if (item.tab === tab) item.closed = false;
      else item.closed = true;

      return item;
    })

    setBlockData(newBlockData);
  }

  return (
    <section className="section-padding blck tabs">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign">
            <div className="content md-mb50">
              <div className="fz-12 ls2 text-u mb-10">
                <span className="gr-orange-text">Highly expertise</span>
              </div>
              <h2>We design brand, digital experience.</h2>

              <div className="tab-links mt-40">
                <ul className="rest">
                  {
                    blockData.map((item, idx) => (
                      <li 
                        className={`item-link ${idx !== blockData.length - 1 ? 'mb-20':''} ${idx == 0 ? 'current':''}`} 
                        data-tab={`tab-${item.tab}`} 
                        onClick={(e) => openTab(e, item.tab)} 
                        key={idx}
                      >
                        <div className="item flex">
                          <div>
                            <span className="icon fz-25">
                              <i className={`${item.icon} gr-orange-text`}></i>
                            </span>
                          </div>
                          <div className="cont">
                            <h6 className="mb-5 fz-16">{ item.title }</h6>
                            <p className="fz-14">{ item.details }</p>
                          </div>
                        </div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-3 offset-lg-2 valign">
            <div className="full-width">
              {
                blockData.map((item, idx) => (
                  <SlideDown key={idx} closed={item.closed}>
                    <div className="tab-content current" id={`tab-${item.tab}`}>
                      <div className="img circle">
                        <img src={item.image} alt="" />
                      </div>
                    </div>
                  </SlideDown>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Block