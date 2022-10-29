/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from '../../../data/main/blog1.json';

const Blog = () => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="mb-80">
              <div className="flex">
                <div className="m-title valign">
                  <div>
                    <h6 className="ls2 text-u fz-13 mb-20 gr-purple-red-text rest inline">Our Blog</h6>
                    <h2 className="fw-700">Upcoming Events</h2>
                  </div>
                </div>
                <div className="s-title valign ml-auto">
                  <h6>
                    <Link href="/blog-grid-modern"><a>Read all news</a></Link>
                    <i className="icon fz-20 pe-7s-angle-right"></i>
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs.map((blog, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item box-shadow crv wow fadeInUp" data-wow-delay={`${(idx * 0.2) + 0.1}s`}>
                  <div className="img">
                    <img src={blog.image} alt="" />
                    <div className="tags">
                      <Link href="/blog-grid-clean">
                        <a className="gat">{ blog.tag }</a>
                      </Link>
                      <Link href="/blog-grid-clean">
                        <a className="tag">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10">
                            <polygon fillRule="evenodd" points="104.988 9.2 109.488 9.2 109.488 13.7 107.76 11.972 103.062 16.688 100.074 13.7 95.574 18.2 94.512 17.138 100.074 11.594 103.062 14.582 106.716 10.928" transform="translate(-94 -9)"></polygon>
                          </svg>
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">
                      <div className="author gr-purple-red-text">
                        <span>{ blog.author }</span>
                      </div>
                      <div className="date">
                        <span>{ blog.date }</span>
                      </div>
                    </div>
                    <div className="title">
                      <h5 className="fz-18 fw-700">
                        <Link href="/blog-post"><a>{ blog.title }</a></Link>
                      </h5>
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