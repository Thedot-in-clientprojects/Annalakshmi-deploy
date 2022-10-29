/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const LatestPosts = ({ latest_posts }) => {
  return (
    <div className="widget last-post-thum">
      <h6 className="title-widget">latest Posts</h6>
      {
        latest_posts.map((post, idx) => (
          <div className="item" key={idx}>
            <div className="valign">
              <div className="img">
                <Link href="/blog-grid-modern"><a><img src={post.image} alt="" /></a></Link>
              </div>
            </div>
            <div className="cont">
              <h6><Link href="/blog-grid-creative"><a>{ post.title }</a></Link></h6>
              <span><Link href="/blog-grid-creative"><a>{ post.date }</a></Link></span>
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default LatestPosts