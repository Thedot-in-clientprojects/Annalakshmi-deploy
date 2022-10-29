/* eslint-disable @next/next/no-img-element */
import SingleBlog from '../Grid/Modern/SingleBlog';

const RecentPosts = ({ recent_blogs }) => {
  return (
    <div className="recent-posts bg-light-gray section-padding mt-100">
      <div className="blog-grid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="text-center mb-60">
                <h4>Recent Posts</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {
              recent_blogs.map(blog => <SingleBlog blog={blog} key={blog.id} />)
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentPosts