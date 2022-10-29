/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import FadeInOut from '../../FadeInOut';
import NFTCard from '../NFT-Card';
import exploreData from '../../../data/nfts/explore.json';

const Explore = () => {
  const [explores, setExplores] = useState(exploreData);

  const openTab = (tabId) => {
    // Remove class 'current' from all tab-links
    document.querySelectorAll(`.explore .item-link[data-tab]`).forEach(el => el.classList.remove('current'));
    // Add class 'current' to clicked tab-link
    document.querySelector(`.explore .item-link[data-tab="tab-${tabId}"]`).classList.add('current');

    // Close all tabs and open tab with id == tabId
    setExplores(prev_explores => {
      let newExplores = structuredClone(prev_explores);

      let newContents = newExplores.contents.map(tab => {
        tab.show = false;
        return tab;
      });

      let idx = newContents.findIndex(tab => tab.id === tabId);

      newContents[idx].show = true;

      newExplores.contents = newContents;

      return newExplores;
    });
  }

  return (
    <section className="explore tabs-fade" data-scroll-index="2">
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <div className="sec-head-bord mb-50">
              <div className="container-xxl">
                <div className="row">
                  <div className="col-12 rest flex md-no-flex">
                    <div className="sec-head mr-20 md-mb30">
                      <h4><span className="icon"><i className="fas fa-fire"></i></span> Explore NFTs</h4>
                    </div>
                    <div className="ml-auto">
                      <div className="tab-links">
                        <ul className="rest flex">
                          {
                            explores.tabs.map((tab,i) => (
                              <li className={`item-link ${i == 0 ? 'current':''}`} data-tab={`tab-${tab.id}`} onClick={() => openTab(tab.id)} key={i}>
                                <span><i className={tab.icon}></i> { tab.title }</span>
                              </li>
                            ))
                          }
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {
              explores.contents.map((tab) => (
                <FadeInOut key={tab.id} show={tab.show}>
                  <div className="tab-content feat-card current" id={`tab-${tab.id}`}>
                    <div className="row">
                      { tab.cards.map((cardData, idx) => <NFTCard data={cardData} key={idx} />) }
                    </div>
                  </div>
                </FadeInOut>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default Explore