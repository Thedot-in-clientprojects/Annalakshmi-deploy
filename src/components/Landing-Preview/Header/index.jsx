/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    setTimeout(() => {
      if (Parallax) {
        var scene = document.getElementById('js-scene');
        new Parallax(scene);
  
        var scene2 = document.getElementById('js-scene2');
        new Parallax(scene2);
      }
    });
  }, []);

  return (
    <header className="valign">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">
            <div className="cont text-center">
              <h1>Creative Agency, Corporate & Portfolio Multi-purpose Template.</h1>
              <a href="#0" className="butn butn-md bg-dark text-light radius-30 mt-40 me-2">
                <span className="text slide-up">All Demos</span>
                <span className="text slide-down">All Demos</span>
              </a>
              <a href="#0" className="butn butn-md bg-light radius-30 mt-40 ">
                <span className="text slide-up">Purchase Now</span>
                <span className="text slide-down">Purchase Now</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="circle-img">
        <img src="landing-preview/img/circle.png" alt="" />
      </div>

      <div className="mag-img">
        <div id="js-scene" data-invert-y="true" data-invert-x="true">
          <div className="imgs one">
            <div className="top layer" data-depth="0.10">
              <img src="landing-preview/img/header/1.jpg" alt="" />
            </div>

            <div className="bottm btm1 layer" data-depth="0.15">
              <img src="landing-preview/img/header/1.jpg" alt="" />
            </div>
            <div className="bottm btm2 layer" data-depth="0.20">
              <img src="landing-preview/img/header/1.jpg" alt="" />
            </div>
          </div>

          <div className="imgs three">
            <div className="top layer" data-depth="0.10">
              <img src="landing-preview/img/header/4.jpg" alt="" />
            </div>

            <div className="bottm btm1 vers layer" data-depth="0.15">
              <img src="landing-preview/img/header/4.jpg" alt="" />
            </div>
            <div className="bottm btm2 vers layer" data-depth="0.20">
              <img src="landing-preview/img/header/4.jpg" alt="" />
            </div>
          </div>

          <div className="imgs four">
            <div className="top layer" data-depth="0.10">
              <img src="landing-preview/img/header/8.jpg" alt="" />
            </div>

            <div className="bottm btm1 layer" data-depth="0.15">
              <img src="landing-preview/img/header/8.jpg" alt="" />
            </div>
            <div className="bottm btm2 layer" data-depth="0.20">
              <img src="landing-preview/img/header/8.jpg" alt="" />
            </div>
          </div>
        </div>

        <div id="js-scene2" data-invert-y="false" data-invert-x="false">
          <div className="imgs two">
            <div className="top layer" data-depth="0.10">
              <img src="landing-preview/img/header/11.jpg" alt="" />
            </div>
            <div className="bottm btm1 vers layer" data-depth="0.15">
              <img src="landing-preview/img/header/11.jpg" alt="" />
            </div>
            <div className="bottm btm2 vers layer" data-depth="0.20">
              <img src="landing-preview/img/header/11.jpg" alt="" />
            </div>
          </div>
          
          <div className="imgs five">
            <div className="top layer" data-depth="0.10">
              <img src="landing-preview/img/header/5.jpg" alt="" />
            </div>
            <div className="bottm btm1 layer" data-depth="0.15">
              <img src="landing-preview/img/header/5.jpg" alt="" />
            </div>
            <div className="bottm btm2 layer" data-depth="0.20">
              <img src="landing-preview/img/header/5.jpg" alt="" />
            </div>
          </div>

          <div className="mob">
            <div className="layer" data-depth="0.10">
              <img src="landing-preview/img/header/mob.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header