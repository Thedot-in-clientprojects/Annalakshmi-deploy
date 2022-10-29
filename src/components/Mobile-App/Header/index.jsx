/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import headerData from '../../../data/mobile-app/header.json';

const Header = () => {
  const [_,setVisibleIdx] = useState(0);

  useEffect(() => {
    let words = document.querySelectorAll('.cd-words-wrapper b');

    setInterval(() => {
      words.forEach((word) => {
        word.classList.remove('is-visible');
        word.classList.add('is-hidden');
      });

      setVisibleIdx(p => {
        let newIdx = 0;
        if (p === words.length - 1) newIdx = 0;
        else newIdx = p + 1;

        words[newIdx].classList.remove('is-hidden');
        words[newIdx].classList.add('is-visible');

        return newIdx;
      });

    }, 3000);
  }, []);

  return (
    <header className="full-height valign bg-img" style={{ backgroundImage: "url('mobile-app/img/bg-1.png')" }} data-scroll-index="0">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 valign order2">
            <div className="cont">
              <h6 className="gr-orange-bg radius-30 fz-12 text-u ls2 mb-10">A connected wallet for a connected</h6>
              <h1 className="cd-headline slide mb-10">
                <span className="d-block">Mobile banking.</span>
                <span className="cd-words-wrapper">
                  {
                    headerData.words.map((word, idx) => (
                      <b className={`fw-600 ${idx == 0 ? 'is-visible':'is-hidden'}`} key={idx}>{ word }</b>
                    ))
                  }
                </span>
              </h1>
              <p>A connected wallet for a connected world. By making money move more freely, for more people, for more growth.</p>

              <div className="stauts flex mt-40">
                <div className="item flex mr-20">
                  <div className="mr-15">
                    <h4>{ headerData.numbers.downloads }</h4>
                  </div>
                  <div className="valign">
                    <span className="fw-300 fz-14">Downloaded</span>
                  </div>
                </div>
                <div className="item flex">
                  <div className="mr-15">
                    <h4>{ headerData.numbers.rating }</h4>
                  </div>
                  <div className="valign">
                    <span className="fw-300 fz-14">AVG Rating</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-2 order1">
            <div className="img mt-40">
              <img src="mobile-app/img/header-app0.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header