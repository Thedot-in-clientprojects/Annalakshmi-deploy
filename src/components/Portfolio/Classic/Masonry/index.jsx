/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import Link from 'next/link';
import initIsotope from '../../../../common/initIsotope';
import data from '../../../../data/portfolio/classic/masonry.json';

const Portfolio = () => {
  useEffect(() => {
    //= Init Isotope
    setTimeout(() => {
      initIsotope();
    }, 500);
  }, []);

  return (
    <section className="portfolio section-padding pt-0">
      <div className="container-fluid">
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

        <div className="wild-padding">
          <div className="gallery col-12 rest">
            <div className="row">
              {
                data.gallery.map((item, index) => (
                  <div className={`col-lg-3 col-md-6 items md-getter ${item.filter} wow fadeInUp`} data-wow-delay=".4s" key={index}>
                    <div className="item-img">
                      <Link href="/project-details">
                        <a className="imago wow">
                          <img src={item.image} alt="image" />
                          <div className="item-img-overlay"></div>
                        </a>
                      </Link>
                    </div>
                    <div className="cont text-center">
                      <h6 className="fw-500">{ item.title }</h6>
                      <p>{ item.type }</p>
                    </div>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio