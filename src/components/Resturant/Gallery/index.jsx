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
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import InnerImageZoom from 'react-inner-image-zoom';


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


const galleryData =  [
  {
    imageURL: "assets/mone.png" 
  },
  {
    imageURL: "assets/mtwo.png" 
  },
  {
    imageURL: "assets/mthree.png" 
  },
  {
    imageURL: "assets/mfour.png" 
  },
  {
    imageURL: "assets/mfive.png" 
  },
  {
    imageURL: "assets/msix.png" 
  },
  {
    imageURL: "assets/mseven.png" 
  },
  {
    imageURL: "assets/meight.png" 
  },
  {
    imageURL: "assets/mnine.png" 
  },
  {
    imageURL: "assets/mten.png" 
  },
  {
    imageURL: "assets/meleven.png" 
  },
  {
    imageURL: "assets/mtwelve.png" 
  },
  {
    imageURL: "assets/mthirteen.png" 
  },
]

useEffect(() => {
  getAllGallery()
}, [])



  return (
    <section className="sipm-gallery section-padding light-bg" data-scroll-index="4">
      <div className="container-fluid ontop">
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80">
              <h2>Restaurant Menu</h2>
            </div>
          </div>
        </div>

        <div className="row mb-80 md-mb50" style={{ marginBottom:22 }}>

        {
            galleryData.map((gallery, index) => {
              return(
                <div className={`col-lg-4 ${index == 1 ? 'valign':''}`} key={index} style={{
                  marginBottom: 10
                }}>
                  <div className={`click-zoom item-img ${index < 2 ? 'md-mb50':''}`}>
                    <a href="#0">
                    <input type="checkbox"/>
                    <InnerImageZoom src={gallery.imageURL} zoomSrc={gallery.imageURL} />
                    </a>
                  </div>
                </div>
              )
            })
          }
           
        </div>
    
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