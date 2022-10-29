/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from "../../../data/corporate/blog.json";

const Blog = () => {
  return (
    <section className="blog section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Our Blogs <span></span></h6>
              <h2 className="fw-700">Latest News</h2>
            </div>
          </div>
        </div>
        
        <div className="row">
          {
            blogs.map((blog, idx) => (
              <div className="col-lg-6" key={idx}>
                <div className="item side-img stwo box-shadow radius-5">
                  <div className="row">
                    <div className="col-lg-5 rest">
                      <div className="img bg-img" style={{ backgroundImage: `url('${blog.bg}')` }}>
                        <Link href="/blog-grid-clean">
                          <a>
                            <span className="gat">{ blog.tag }</span>
                          </a>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-7 valign">
                      <div className="full-width">
                        <div className="cont">
                          <div className="date text-u fz-13 fw-500 gr-sunrise-text mb-10">
                            <span>{ blog.date }</span>
                          </div>
                          <div className="title">
                            <h6 className="fw-700 line-height-30 mb-10">
                              <Link href="/blog-side-img">
                                <a>{ blog.title }</a>
                              </Link>
                            </h6>
                          </div>
                          <div className="info flex">
                            <div>
                              <div className="author flex">
                                <div className="flex-img">
                                  <div className="author-img circle-50 mr-15">
                                    <img src={blog.image} alt="" />
                                  </div>
                                </div>
                                <div className="flex-cont valign">
                                  <div>
                                    <span className="fz-12 opacity-8">Written By :</span>
                                    <h6 className="fz-16">{ blog.author }</h6>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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

export default Blog