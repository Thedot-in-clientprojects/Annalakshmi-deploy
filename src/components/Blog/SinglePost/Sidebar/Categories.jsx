import Link from 'next/link';

const Categories = ({ categories }) => {
  return (
    <div className="widget catogry">
      <h6 className="title-widget">Categories</h6>
      <ul className="rest">
        {
          categories.map((category, idx) => (
            <li key={idx}>
              <span><Link href="/blog-grid-clean"><a>{ category.name }</a></Link></span>
              <span className="ml-auto">{ category.posts }</span>
            </li>
          ))
        }
      </ul>
    </div>
  )
}

export default Categories