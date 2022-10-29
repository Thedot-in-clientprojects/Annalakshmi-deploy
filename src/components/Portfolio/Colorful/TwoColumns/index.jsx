/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Link from 'next/link';
import initIsotope from '../../../../common/initIsotope';
import data from '../../../../data/portfolio/colorful/two-columns.json';

const Portfolio = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pt-0">
      <div className="container">
        <div className="row">
          <div className="filtering d-flex justify-content-center col-12 mb-10">
            <div className="filter">
              {
                data.filters.map((filter, index) => (
                  <span data-filter={filter.operator} className={index == 0 ? 'active':''} key={index}>{ filter.name }</span>
                ))
              }
            </div>
          </div>
        </div>

        <div className="gallery col-12 rest">
          <div className="row">
            {
              data.gallery.map((item, index) => (
                <div className={`col-md-6 items mt-30 md-getter ${item.filter} wow fadeInUp`} data-wow-delay=".4s" key={index}>
                  <div className="item-img colorful-cont">
                    <Link href="/project-details">
                      <a className="imago wow">
                        <img src={item.image} alt="image" />
                        <div className="item-img-overlay"></div>
                      </a>
                    </Link>
                    <div className="cont">
                      <Link href="/project-details">
                        <a className="icon">
                          <i className="fas fa-long-arrow-alt-right"></i>
                        </a>
                      </Link>
                      <div>
                        <p>{ item.type }</p>
                        <h6 className="fw-500">
                          <Link href="/project-details"><a>{ item.title }</a></Link>
                        </h6>
                      </div>
                      <div className="bg-gr gr-purple-red-bg"></div>
                    </div>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio