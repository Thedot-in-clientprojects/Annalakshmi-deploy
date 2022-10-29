/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from '../../../data/architecture/blog.json';

const Blog = () => {
  return (
    <section className="blog section-padding" data-scroll-index="5">
      <div className="container">
        <div className="sec-head mb-100">
          <div className="flex">
            <div className="m-title valign">
              <h3>Latest News</h3>
            </div>
            <div className="s-title valign">
              <h6>
                <Link href="/blog-grid-creative">
                  <a>All Posts</a>
                </Link>
                <span className="icon pe-7s-angle-right"></span>
              </h6>
            </div>
          </div>
        </div>
        <div className="row">
          {
            blogs.map((blog, i) => (
              <div className="col-lg-6" key={i}>
                <div className={`item ${i !== blogs.length - 1 ? 'md-mb50':''}`}>
                  <div className="img">
                    <img src={blog.image} alt="" />
                  </div>
                  <div className="cont mt-40">
                    <div className="flex">
                      <div className="date">
                        <h3>{ blog.date.day }</h3>
                        <p>{ blog.date.monthYear }</p>
                      </div>
                      <div className="ml-20">
                        <h5>
                          <Link href="/blog-post">
                            <a>{ blog.title }</a>
                          </Link>
                        </h5>
                        <div className="info mt-10">
                          <Link href="/blog-grid-clean">
                            <a className="tag fz-14 yellow-green-color">{ blog.tag }</a>
                          </Link>
                          <span className="ml-10 mr-10 opacity-7">-</span>
                          <Link href="/blog-grid-clean">
                            <a className="opacity-7 fz-14">by { blog.user }</a>
                          </Link>
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