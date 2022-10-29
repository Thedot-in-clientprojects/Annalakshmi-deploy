import Link from 'next/link';

const Tags = ({ tags }) => {
  return (
    <div className="widget tags">
      <h6 className="title-widget">Tags</h6>
      <div>
        {
          tags.map((tag, idx) => (
            <Link href="/blog-grid-creative" key={idx}><a className="ms-1">{ tag }</a></Link>
          ))
        }
      </div>
    </div>
  )
}

export default Tags