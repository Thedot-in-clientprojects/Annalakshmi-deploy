/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import blogs from "../../../data/restaurant/blog.json";
import firebase from 'firebase/compat/app'
import {
    getStorage,
    ref as sRef,
    uploadBytesResumable,
    uploadBytes,
    getDownloadURL 
} from "firebase/storage";
import { ref, runTransaction, getDatabase, set , onValue , get, onChildAdded, onChildChanged, onChildRemoved  } from 'firebase/database'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { realDB } from '../../../lib/initFirebase';
import 'firebase/database'
import 'firebase/storage'
import { useState, useEffect } from 'react';

const TrendingIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="10" viewBox="0 0 16 10">
    <polygon fillRule="evenodd" points="104.988 9.2 109.488 9.2 109.488 13.7 107.76 11.972 103.062 16.688 100.074 13.7 95.574 18.2 94.512 17.138 100.074 11.594 103.062 14.582 106.716 10.928" transform="translate(-94 -9)"></polygon>
  </svg>
)

const Blog = () => {

  const [getAllBlogs, setgetAllBlogs] = useState([]);
  const getAllBlogsNow = () => {
    const db = getDatabase();
    const categories = ref(db, 'blog/');
    onValue(categories, (snapshot) => {
        const data = snapshot.val();
        setgetAllBlogs(data);
      });
  }

  useEffect(() => {
      getAllBlogsNow();
  }, [])
  


  return (
    <section className="blog-grid section-padding" data-scroll-index="6">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Our Blog<span></span></h6>
              <h2>Blogs & Events</h2>
            </div>
          </div>
        </div>
        <div className="row">
         
          {
           getAllBlogs &&  Object.entries(getAllBlogs).map((blog, idx) => (
              <div className="col-lg-4" key={idx}>
                <div className="item box-shadow crv">
                  <div className="img">
                    <img src={blog[1].image} alt="" />
                    <div className="tags">
                      <Link href="/blog-grid-clean">
                        <a className="gat">{ blog[1].tag }</a>
                      </Link>
                      <Link href="/blog-grid-clean">
                        <a className="tag">
                          <TrendingIcon />
                        </a>
                      </Link>
                    </div>
                  </div>
                  <div className="cont">
                    <div className="info">
                      <div className="author">
                        <span>{ blog[1].category }</span>
                      </div>
                      <div className="date">
                        <span>{ blog[1].date }</span>
                      </div>
                    </div>
                    <div className="title">
                      <h5 className="fw-700 fz-18">
                        <Link href="/blog-grid-modern">
                          <a>{ blog[1].title }</a>
                        </Link>
                      </h5>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default Blog