/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

const PostContent = ({ post_meta }) => {
  return (
    <div className="col-lg-8">
      <div className="main-post md-mb50">
        <div className="item pb-60">
          <div className="cont">
            <div className="title">
              <h3 className="fw-800">{ post_meta.title }</h3>
            </div>
            <div className="info flex mt-15">
              <div className="author mr-30 opacity-8 fz-14">
                <span>{ post_meta.author }</span>
              </div>
              <div className="tags mr-30 opacity-8 fz-14">
                <Link href="/blog-grid-clean"><a className="gat">{ post_meta.tags }</a></Link>
              </div>
              <div className="date fz-14">
                <span>{ post_meta.date }</span>
              </div>
            </div>
          </div>
          <div className="main-img mt-40 mb-40 radius-5">
            <img src="img/blog/b/b1.jpg" alt="" />
          </div>
          <div className="text mb-20">
            <p>A new report said earlier this week that Apple is working on a brand new laptop.
              Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air
              series. A trusted Apple insider with a proven track record confirmed that Apple
              is working on the larger MacBook Air.</p>
          </div>
          <div className="text">
            <p>However, Apple might not include it in the Air series when it launches it. As for
              the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a
              late 2023 release at best, according to the new claims.</p>
          </div>
          <div className="title mt-30">
            <h5 className="fw-600">What sizes do MacBook Airs come in?</h5>
          </div>
          <div className="text mt-20">
            <p>Apple currently sells only one MacBook Air size. The laptop comes in a 13-inch
              version that matches the pre-2021 13-inch MacBook Pro size. Previously, Apple
              sold an 11-inch MacBook Air, but the company discontinued that model in 2017.
            </p>
          </div>

          <div className="post-qoute mt-50">
            <h6 className="fz-20">
              <span>Increase your site traffic and gain new customers with a beautiful and
                functional blog.</span>
              <span className="fz-12 text-u ls2 gr-purple-red-text mt-20"> - Ravo Universe</span>
            </h6>
          </div>

          <div className="mb-50 mt-50">
            <div className="row">
              <div className="col-6">
                <div className="iner-img">
                  <img src="img/blog/b/v1.jpg" alt="" />
                </div>
              </div>
              <div className="col-6">
                <div className="iner-img">
                  <img src="img/blog/b/v4.jpg" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="title mb-30">
            <h5 className="fw-600">Apple currently sells only one MacBook Air size.</h5>
          </div>

          <div className="text mb-20">
            <p>A new report said earlier this week that Apple is working on a brand new laptop.
              Apple plans to release a 15-inch MacBook Air in 2023, a first for the Air
              series. A trusted Apple insider with a proven track record confirmed that Apple
              is working on the larger MacBook Air.</p>
          </div>

          <div className="unorder-list mb-30">
            <h6 className="fw-600 mb-15">Ordered & Unordered Lists.</h6>
            <ul className="rest">
              <li>Yet this above sewed flirted opened ouch</li>
              <li>Goldfinch realistic sporadic ingenuous</li>
              <li>Abominable this abidin far successfully then like piquan</li>
            </ul>
          </div>

          <div className="order-list mb-30">
            <h6 className="fw-600 mb-15">Ordered & Unordered Lists.</h6>
            <ul className="rest">
              <li><span>01 -</span> Yet this above sewed flirted opened ouch</li>
              <li><span>02 -</span> Goldfinch realistic sporadic ingenuous</li>
              <li><span>03 -</span> Abominable this abidin far successfully then like piquan
              </li>
            </ul>
          </div>

          <div className="text">
            <p>However, Apple might not include it in the Air series when it launches it. As for
              the notebook’s release date, the 15-inch MacBook isn’t coming soon. It’ll get a
              late 2023 release at best, according to the new claims.</p>
          </div>
        </div>
        <div className="info-area flex mt-20 pb-20">
          <div>
            <div className="tags flex">
              <div className="valign">
                <span>Tags :</span>
              </div>
              <div>
                <Link href="/blog-grid-clean"><a>Tech</a></Link>
                <Link href="/blog-grid-clean"><a>Ravo</a></Link>
              </div>
            </div>
          </div>
          <div className="ml-auto">
            <div className="share-icon flex">
              <div className="valign">
                <span>Share :</span>
              </div>
              <div>
                <a href="https://www.facebook.com/"><i className="fab fa-facebook-f"></i></a>
                <a href="https://www.twitter.com/"><i className="fab fa-twitter"></i></a>
                <a href="https://www.youtube.com/"><i className="fab fa-youtube"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="author-area mt-50">
          <div className="flex">
            <div className="author-img mr-30">
              <div className="img">
                <img src={post_meta.author_image} alt="" className="circle-img" />
              </div>
            </div>
            <div className="cont valign">
              <div className="full-width">
                <h6 className="fw-600 mb-10">{ post_meta.author }</h6>
                <p>{ post_meta.author_brief }</p>
              </div>
            </div>
          </div>
        </div>
        <div className="next-prv-post flex mt-50">
          <div className="thumb-post bg-img" style={{ backgroundImage: "url('img/blog/b/b4.jpg')" }}>
            <Link href="/blog-post">
              <a>
                <span className="fz-12 text-u ls1 gr-purple-red-text mb-15"><i
                  className="pe-7s-angle-left"></i> Prev Post</span>
                <h6 className="fw-600 fz-16">Ways to quickly traffic to <br /> your website.</h6>
              </a>
            </Link>
          </div>
          <div className="thumb-post ml-auto text-right bg-img" style={{ backgroundImage: "url('img/blog/b/b5.jpg')" }}>
            <Link href="/blog-post">
              <a>
                <span className="fz-12 text-u ls1 gr-purple-red-text mb-15">Next Post <i
                  className="pe-7s-angle-right"></i></span>
                <h6 className="fw-600 fz-16">How to Handle Your Good Employee.</h6>
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PostContent