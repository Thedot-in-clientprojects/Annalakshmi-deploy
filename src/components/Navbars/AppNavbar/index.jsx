/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Navbar = ({ links, navbarRef, theme, logoTheme, container }) => {
  const goToSection = (e, link) => {
    if (link == "#0") e.preventDefault();
    
    const section = document.querySelector(`[data-scroll-index="${e.target.dataset.scrollNav}"]`);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }
  
  return (
    <nav className={`navbar navbar-expand-lg ${theme}`} ref={navbarRef}>
      <div className={`container${container==='nft-market' ? '-xxl':''}`}>
        <Link className="navbar-brand" href="/landing-preview">
          <div className="logo" style={{cursor: "pointer"}}>
             <img src="img/annalogo1.png" alt="" className="logo--in" />
          </div>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav">
            {
              links && links.length && links.map((link, idx) => (
                <li className="nav-item gilroyEB" key={idx}>
                  <a className="nav-link" style={{fontSize: "1.1rem"}} href={link.href} data-scroll-nav={idx} onClick={e => goToSection(e, link.href)}>{ link.name }</a>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar;