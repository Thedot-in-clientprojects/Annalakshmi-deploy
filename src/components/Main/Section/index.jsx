/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../../../data/main/accordions.json';

const Section = () => {
  const [accordions, setAccordions] = useState(accordionsData);

  const openAccordion = (e) => {
    document.querySelectorAll('.accordion.bord .item').forEach(accordion => accordion.classList.remove('active'))

    let item = e.target.closest('.item');
    item.classList.add('active');

    let newAccordions = accordions.map((accordion, idx) => {
      if (item.id.split('-')[1] == idx) accordion.closed = false;
      else accordion.closed = true;

      return accordion;
    });

    setAccordions(newAccordions);
  }

  return (
    <section className="section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content">
              <div className="sub-title gr-purple-red-text inline">
                <span>Highly expertise</span>
              </div>
              <h4 className="mb-40">The hundred of completed works still counting.</h4>

              <div className="accordion bord">
                {
                  accordions.map((accordion, idx) => (
                    <div className={`item wow fadeInUp ${idx == 0 ? 'active':''}`} id={`accordion-${idx}`} data-wow-delay={`${(idx * 0.2) + 0.1}s`} key={idx} onClick={openAccordion}>
                      <div className="title">
                        <h6 className="fz-15">{ accordion.title }</h6>
                        <span className="ico"></span>
                      </div>
                      <SlideDown className="accordion-info active" closed={accordion.closed}>
                        <p>{ accordion.details }</p>
                      </SlideDown>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1 wow slideInUp">
            <div className="img wow imago">
              <img src="img/about/02.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section