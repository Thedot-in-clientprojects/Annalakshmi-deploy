/* eslint-disable @next/next/no-img-element */
import { useEffect } from 'react';
import coundown from '../../../common/countdown';
import NFTCard from '../NFT-Card';
import features from '../../../data/nfts/features.json';

const Features = () => {
  useEffect(() => {
    setTimeout(() => {
      coundown();
    });
  }, []);

  return (
    <section className="feat-card section-padding" data-scroll-index="1">
      <div className="container-xxl">
        <div className="sec-head-bord mb-80">
          <div className="container-xxl">
            <div className="row">
              <div className="col-md-8 rest">
                <div className="sec-head">
                  <h4><span className="icon"><i className="fas fa-fire"></i></span> Featured NFTs</h4>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
        <div className="row">
          { features.map((feature, i) => <NFTCard data={feature} key={i} countdown={true} />) }
        </div>
      </div>
    </section>
  )
}

export default Features