/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const SingleBlog = ({ blog, direction }) => {
  return (
    <div className="item side-img box-shadow radius-15 mb-50">
      <div className="row">
        {
          direction === 'left' ?
          (
            <div className="col-lg-5 rest">
              <div className="img bg-img" style={{ backgroundImage: `url('${blog.image}')` }}></div>
            </div>
          ) : null
        }
        <div className="col-lg-7 valign">
          <div className="full-width">
            <div className="cont">
              <div className="date text-u fz-13 fw-500 opacity-7 mb-10">
                <span>14 sep 2021</span>
              </div>
              <div className="title">
                <h5 className="fw-600 mb-10"><Link href="/blog-post"><a>{ blog.title }</a></Link></h5>
                <p>{ blog.short_desc }</p>
              </div>
              <div className="info flex">
                <div>
                  <div className="author flex">
                    <div className="flex-img">
                      <div className="author-img circle-60 mr-15">
                        <img src={blog.author_image} alt="" />
                      </div>
                    </div>
                    <div className="flex-cont valign">
                      <div>
                        <span className="fz-12 mb-5 opacity-8">Written By :</span>
                        <h6 className="fz-16">{ blog.author }</h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ml-auto valign">
                  <Link href="/blog-grid-clean">
                    <a>
                      <span className="gat">{ blog.tag }</span>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          direction === 'right' ?
          (
            <div className="col-lg-5 rest">
              <div className="img bg-img" style={{ backgroundImage: `url('${blog.image}')` }}></div>
            </div>
          ) : null
        }
      </div>
    </div>
  )
}

export default SingleBlog;