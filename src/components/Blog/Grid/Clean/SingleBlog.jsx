/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const SingleBlog = ({ blog }) => {
  return (
    <div className="col-lg-4">
      <div className="item clean mb-30">
        <div className="img radius-5">
          <img src={blog.image} alt="" />
        </div>
        <div className="cont">
          <div className="info">
            <div className="tags">
              <Link href="/blog-grid-creative">
                <a className="gat">{ blog.tag }</a>
              </Link>
            </div>
            <div className="date">
              <span>{ blog.date }</span>
            </div>
          </div>
          <div className="title">
            <h5>
              <Link href="/blog-post"><a>{ blog.title }</a></Link>
            </h5>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleBlog;