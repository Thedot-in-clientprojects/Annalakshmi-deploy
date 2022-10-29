/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from 'react';
import gallery from '../../../data/restaurant/gallery.json';
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
import Link from 'next/link'
import 'firebase/database'
import 'firebase/storage'

const Gallery = () => {


  const [allGallery, setallGallery] = useState([]);

  
const getAllGallery = () => {
  const db = getDatabase();
  const product = ref(db, 'gallery/');
  onValue(product, (snapshot) => {
      const data = snapshot.val();
      setallGallery(data);
    });
}


useEffect(() => {
  getAllGallery()
}, [])



  return (
    <section className="sipm-gallery section-padding dark-bg" data-scroll-index="4">
      <div className="container-fluid ontop">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h6 className="ls2 text-u fz-12 mb-15">Our Gallery<span></span></h6>
              <h2>Restaurant Gallery</h2>
            </div>
          </div>
        </div>
        <div className="row mb-80 md-mb50" style={{ marginBottom:22 }}>

        {
            allGallery && Object.entries(allGallery).map((gallery, index) => {
              return(
                <div className={`col-lg-4 ${index == 1 ? 'valign':''}`} key={index}>
                  <div className={`item-img ${index < 2 ? 'md-mb50':''}`}>
                    <a href="#0">
                      <img src={gallery[1].url} />
                    </a>
                  </div>
                </div>
              )
            })
          }
           
        </div>
        {/* <div className="row" style={{
          margin:55
        }}>
          {
              allGallery && Object.entries(allGallery).map((gallery, index) => (
              index > 3 ? (
                <div className={`col-lg-4 ${index == 4 ? '':'valign'}`} key={index}>
                  <div className={`item-img ${index < 5 ? 'md-mb50':''}`}>
                    <a href="#0">
                      <img src={gallery[1].url} alt="" />
                    </a>
                  </div>
                </div>
              ) 
              : null
            ))
          }
        </div> */}
      </div>

      <div className="pt top-left opacity-1">
        <img src="restaurant/img/de/b1.svg" alt="" />
      </div>

      <div className="pt bottom-left opacity-1">
        <img src="restaurant/img/de/b2.svg" alt="" />
      </div>

      <div className="pt center-right opacity-1">
        <img src="restaurant/img/de/b4.svg" alt="" />
      </div>
    </section>
  )
}

export default Gallery