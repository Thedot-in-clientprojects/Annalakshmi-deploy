/* eslint-disable @next/next/no-img-element */
import React from 'react'

const NFTCard = ({ data, countdown }) => {
  return (
    <div className={`col-lg-3 col-md-6 ${!countdown ? 'mt-30':''}`}>
      <div className="item-card md-mb50">
        <div className="img">
          <a href="#0">
            <img src={data.image} alt="" />
          </a>
          <div className="fav">
            <span className="icon pe-7s-like"></span>
          </div>
          {
            countdown ?
            (
              <div className="clockdiv" data-date={data.countdown_date}>
                <div>
                  <span className="days"></span>
                </div>
                <div>
                  <span className="hours"></span>
                </div>
                <div>
                  <span className="minutes"></span>
                </div>
                <div>
                  <span className="seconds"></span>
                </div>
              </div>
            )
            :
            null
          }
        </div>
        <div className="cont">
          <div className="info">
            <div className="flex">
              <div className="authors-img">
                <div className="img1">
                  <img src={data.author.picture} alt="" />
                </div>
              </div>
              <div className="author-name valign">
                <span className="fz-12 ml-10 opacity-8">
                  <a href="#0">{ data.author.name }</a>
                </span>
              </div>
            </div>
            <div className="item-title mt-15">
              <h6 className="fw-700"><a href="#0">{ data.title }</a></h6>
            </div>
            <div className="eth mt-10">
              <span className="fz-14">
                <span className="fz-12 opacity-7 mr-5">Highest bid :</span>
                <span className="icon">
                  <img src="nft/img/eth1.svg" alt="" />
                </span>
                <span>{ data.price } ETH</span>
              </span>
            </div>
          </div>
          <div className="botm flex">
            <div className="left valign">
              <div className="reles">
                <span className="fz-12">Relesed :<span className="opacity-7 ml-5">{ data.date }</span></span>
              </div>
            </div>
            <div className="right ml-auto">
              <div className="bid">
                <a href="#0">Bid</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NFTCard;