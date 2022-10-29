/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Gallery = ({ gallery }) => {
  return (
    <div className="widget gallry">
      <h6 className="title-widget">gallery</h6>
      <div>
        <ul className="rest d-flex justify-content-around">
          {
            gallery.map((image, idx) => (
              idx < 3 ? (
                <li key={idx}>
                  <Link href="/portfolio-classic-masonry">
                    <a>
                      <img src={image} alt="" />
                    </a>
                  </Link>
                </li>
              ) : null
            ))
          }
        </ul>
        <ul className="rest d-flex justify-content-around">
          {
            gallery.map((image, idx) => (
              idx >= 3 ? (
                <li key={idx}>
                  <Link href="/portfolio-classic-masonry">
                    <a>
                      <img src={image} alt="" />
                    </a>
                  </Link>
                </li>
              ) : null
            ))
          }
        </ul>
      </div>
    </div>
  )
}

export default Gallery