/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-img pb-0" style={{ backgroundImage: "url('nft/img/space.jpg')" }} data-scroll-index="5">
      <div className="container cal-action">
        <div className="row">
          <div className="col-lg-9">
            <div>
              <div className="text md-mb50">
                <h2>Let&lsquo;s join to our community.</h2>
                <p>Are you an artist or NFT project creator? <br /> Get in touch with us to get your content on nftsRavo.</p>
                <div className="users-imgs flex">
                  <div>
                    <div className="simg1">
                      <img src="nft/img/authors/1.jpg" alt="" />
                    </div>
                    <div className="simg2">
                      <img src="nft/img/authors/2.jpg" alt="" />
                    </div>
                    <div className="simg3">
                      <img src="nft/img/authors/3.jpg" alt="" />
                    </div>
                  </div>
                  <div className="ml-15 fz-12">
                    <span>Join to us more than<br /> <span className="fz-14 fw-700">40k+ </span> creators</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-3 valign d-flex justify-content-end">
            <div>
              <Link href="/contact-arch">
                <a className="butn butn-md bg-light text-dark radius-30">
                  <span className="text slide-up">Join Now</span>
                  <span className="text slide-down">Join Now</span>
                </a>
              </Link>
              <br className="md-hide" />
              <Link href="/contact-arch">
                <a className="butn butn-md radius-30 bord-white">
                  <span className="text slide-up">Connect Wallet</span>
                  <span className="text slide-down">Connect Wallet</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-footer pt-40 pb-40">
        <div className="container-xxl">
          <div className="row">
            <div className="col-lg-6">
              <div className="horizontal-link fz-13">
                <ul className="rest">
                  <li className="mr-30">
                    <a href="#0">Privacy policy</a>
                  </li>
                  <li className="mr-30">
                    <a href="#0">Legal notice</a>
                  </li>
                  <li>
                    <a href="#0">Terms of service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="copyrights d-flex justify-content-end">
                <p className="fz-13">© 2022 Ravo is Proudly Powered by 
                  <span className="underline ms-1">
                    <a href="https://themeforest.net/user/themescamp" rel="noreferrer" target="_blank">ThemesCamp</a>
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer