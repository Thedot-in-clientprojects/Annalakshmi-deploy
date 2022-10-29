/* eslint-disable @next/next/no-img-element */
import SingleBlog from './SingleBlog';
import blogs from '../../../data/blog/side-image.json';

const BlogSideImg = () => {
  return (
    <section className="blog section-padding">
      <div className="container">

        <div className="row justify-content-center">
          <div className="col-lg-11">
            {
              blogs.map((blog, idx) => <SingleBlog blog={blog} direction={idx % 2 === 0 ? 'left':'right'} key={blog.id} />)
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default BlogSideImg;