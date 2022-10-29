/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Comments = ({ comments }) => {
  return (
    <div className="comments-post section-padding">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-9 col-md-11">
            <div className="text mb-60">
              <h4>Comments</h4>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          {
            comments.map((comment, idx) => (
              <div className="col-lg-9 col-md-11" key={idx}>
                <div className="item-box">
                  <div className="flex">
                    <div className="user-img mr-30">
                      <div className="img circle-80 line-height-1">
                        <img src={comment.author.image} alt="" className="circle-img" />
                      </div>
                    </div>
                    <div className="cont">
                      <h6>{ comment.author.name }</h6>
                      <span className="fz-13 mb-15 opacity-8">{ comment.date }</span>
                      <p>{ comment.content }</p>
                    </div>
                    <div className="replay-post">
                      <a href="#0">
                        <span>Replay</span>
                      </a>
                    </div>
                  </div>
                </div>
                {
                  comment.replies.map((reply, i) => (
                    <div key={i}>
                      <div className="item-box replayed">
                        <div className="flex">
                          <div className="user-img mr-30">
                            <div className="img circle-80 line-height-1">
                              <img src={reply.author.image} alt="" className="circle-img" />
                            </div>
                          </div>
                          <div className="cont">
                            <h6>{ reply.author.name }</h6>
                            <span className="fz-13 mb-15 opacity-8">{ reply.date }</span>
                            <p>{ reply.content }</p>
                          </div>
                          <div className="replay-post">
                            <a href="#0">
                              <span>Replay</span>
                            </a>
                          </div>
                        </div>
                      </div>
                      {
                        reply.replies.map((nReply, j) => (
                          <div className="item-box replayed next-step" key={j}>
                            <div className="flex">
                              <div className="user-img mr-30">
                                <div className="img circle-80 line-height-1">
                                  <img src={nReply.author.image} alt="" className="circle-img" />
                                </div>
                              </div>
                              <div className="cont">
                                <h6>{ nReply.author.name }</h6>
                                <span className="fz-13 mb-15 opacity-8">{ nReply.date }</span>
                                <p>{ nReply.content }</p>
                              </div>
                              <div className="replay-post">
                                <a href="#0">
                                  <span>Replay</span>
                                </a>
                              </div>
                            </div>
                          </div>
                        ))
                      }
                    </div>
                  ))
                }
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Comments