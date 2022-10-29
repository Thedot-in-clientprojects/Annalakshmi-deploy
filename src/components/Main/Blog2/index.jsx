/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from '../../../data/main/blog2.json';

const Blog = ({ grblue }) => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="row mb-100">
          <div className="col-md-7">
            <div className="simple-head">
              <h6 className="sub-head radius mb-20">
                <span className="fz-12 ls2 text-u">articles</span>
              </h6>
              <div>
                <h2 className={`fz-40 ${grblue ? 'fw-700':'fw-800 gr-purple-red-text inline'}`}>Latest News</h2>
              </div>
            </div>
          </div>
          <div className="col-md-5 justify-content-end valign">
            <div className="s-title valign ml-auto">
              <h6>
                <a href="blog-grid-modern.html">Read all news</a>
                <i className="icon fz-20 pe-7s-angle-right"></i>
              </h6>
            </div>
          </div>
        </div>

        <div className="row">
          {
            blogs.map((blog, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item box-shadow crv">
                  <div className="img">
                    <img src={blog.image} alt="" />
                    <div className="tags">
                      <Link href="/blog-grid-clean"><a>{ blog.tag }</a></Link>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">
                      <div className="author">
                        <span>{ blog.author }</span>
                      </div>
                      <div className="date">
                        <span className={`${grblue ? 'gr-blue-text':'gr-purple-red-text'}`}>{ blog.date }</span>
                      </div>
                    </div>
                    <div className="title">
                      <h5 className="fw-700 fz-18">
                        <Link href="/blog-post">
                          <a>{ blog.title }</a>
                        </Link>
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

export default Blog;