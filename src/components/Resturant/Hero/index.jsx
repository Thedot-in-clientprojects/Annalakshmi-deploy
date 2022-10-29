/* eslint-disable @next/next/no-img-element */
import heroData from '../../../data/restaurant/hero.json';


const Hero = () => {
  return (
    <section className="position-re" data-scroll-index="1">
      <img src="img/decbg.png" className="bg--dec" />
      <div className="container">
        
        <div className="row">
          <div className="col-lg-5">
            <div style={{padding: "4rem"}}>
              <img src="img/annapic1.png" alt="" />
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1 valign">
            <div className="content">
              <h3 className="saman" style={{color: "#9B1915", fontSize: "4rem"}}>
                Annalakshmi
              </h3>
              <h5 className="mb-20 fz-22 fw-500 gilroyEB">Goddess of Abundance</h5>
              <p className="fz-18 gilroyM">
              Annalakshmi is an Indian vegetarian restaurant with
              a unique dining concept: ‘Eat as you want, Give as you feel.’ 
              Since 1986, Annalakshmi has been serving the Coimbatorian 
              community with delicious home-styled Indian vegetarian food.
              Named after the goddess of nourishment and abundance, 
              Annalakshmi strives to serve all its guests with that same 
              whole-hearted generosity.
              </p>
              
            </div>
          </div>
        </div>
      </div>
      <img src="img/decbg.png" className="bgd--dec" />
    </section>
  )
}

export default Hero