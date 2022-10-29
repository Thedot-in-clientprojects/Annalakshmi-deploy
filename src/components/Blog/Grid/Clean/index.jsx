import SingleBlog from './SingleBlog';
import blogs from '../../../../data/blog/grid.json';

const Blog = () => {
  return (
    <section className="blog-grid section-padding">
      <div className="container">
        <div className="row">
          { blogs.map(blog => <SingleBlog blog={blog} key={blog.id} />) }
        </div>
      </div>
    </section>
  )
}

export default Blog