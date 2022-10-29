import { useState } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import accordionsData from '../../../data/main/accordions.json';

const SecHalf = () => {
  const [accordions, setAccordions] = useState(accordionsData);

  const openAccordion = (e) => {
    document.querySelectorAll('.accordion .item').forEach(accordion => accordion.classList.remove('active'))

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
    <section className="sec-half position-re">
      <div className="bg-img" style={{ backgroundImage: "url('img/background/25.jpg')" }} data-overlay-dark="2"></div>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 offset-lg-7">
            <div className="content">
              <span className="sub-title">Our Vision</span>
              <h3 className="mb-20 fz-45 fw-700 main-color">Inspired design for the digital age.</h3>
              <p>We appreciate your trust greatly. Our clients choose us and our products because they know we are the best.</p>

              <div className="accordion mt-50">
                {
                  accordions.map((accordion, idx) => (
                    <div className={`item ${idx == 0 ? 'active':''} ${idx == accordion.length - 1 ? 'mb-0':''}`} id={`accordion-${idx}`} key={idx} onClick={openAccordion}>
                      <div>
                        <div className="title">
                          <h6 className="fz-16">{ accordion.title }</h6>
                        </div>
                        <SlideDown className="accordion-info active" closed={accordion.closed}>
                          <p>{ accordion.details }</p>
                        </SlideDown>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SecHalf