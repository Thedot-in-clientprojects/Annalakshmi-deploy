/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import { SlideDown } from 'react-slidedown';
import 'react-slidedown/lib/slidedown.css';
import MenuSheet from "./Menu-Sheet";
import menuData from '../../../data/restaurant/menu.json';
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


const Menu = () => {
  const [Menu, setMenu] = useState([]);
  const [allCategories, setallCategories] = useState([]);
  const [allProducts, setallProducts] = useState([]);
  const [allGallery, setallGallery] = useState([]);


  // const getMenus = () => {
  //   const db = getDatabase();
  //   const products = ref(db, 'product/');
  //   onValue(products, (snapshot) => {
  //       const data = snapshot.val();
  //       setMenu(data);
  //     });
  // }

  const [statusMenuDefault, setstatusMenuDefault] = useState('');


  const getAllCategories = () => {
    const db = getDatabase();
    const categories = ref(db, 'category/');
    onValue(categories, (snapshot) => {
        const data = snapshot.val();
        setallCategories(data);
      });
}


const getAllProducts = () => {
  const db = getDatabase();
  const product = ref(db, 'product/');
  onValue(product, (snapshot) => {
      const data = snapshot.val();
      setallProducts(data);
      setstatusMenuDefault('true')
    });
}

const getAllGallery = () => {
  const db = getDatabase();
  const product = ref(db, 'gallery/');
  onValue(product, (snapshot) => {
      const data = snapshot.val();
      setallGallery(data);
    });
}

const [specialMenu, setspecialMenu] = useState([]);
const getAllSpecialMenu = () => {
  const db = getDatabase();
  const special = ref(db, 'gallery/');
  onValue(special, (snapshot) => {
      const data = snapshot.val();
      setspecialMenu(data);
      setMenu(data)
    });
}

  useEffect(() => {
    // getMenus()
    getAllCategories()
    getAllProducts()
    getAllGallery()
    // getAllSpecialMenu()
  }, [])
  
  const [selectedIndex, setselectedIndex] = useState(0);
  
  const openTab = (e, cate, ind) => {
    e.preventDefault(); 
    const db = getDatabase();
    setselectedIndex(ind)
    let theProducts = Object.entries(allProducts).filter((prod, index) => prod[1].category === cate)
    console.log("The Products - ", theProducts);
    setMenu(theProducts)
  }

  useEffect(() => {
      console.log("useEffect All Products - ", allProducts)
      let theProducts = Object.entries(allProducts).filter((prod, index) => prod[1].category === 'Breakfast')
      console.log("useEffect The Products - ", theProducts);
      setMenu(theProducts)  
  }, [statusMenuDefault])
  

  return (
    <section className="menu-book tabs  bg-gray " data-scroll-index="2">
      <img src="img/decbg.png"  style={{marginTop: "80px"}}/>
      <div className="container " >
      
        <div className="row">
          <div className="col-12">
            <div className="round-head text-center mb-80 mt-15">
              <h6 className="ls2 text-u fz-12 mb-15">special recipes<span></span></h6>
              <h2>Our Menu</h2>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="tab-links mb-60">
              <ul className="text-center">
                {allCategories && Object.entries(allCategories).map((category, index) => {
                    return(
                      <li 
                      className={`item-link ${index == selectedIndex ? 'current':''}`} 
                      data-tab={`tab-${index}`} 
                      onClick={(e) => openTab(e, category[1].name, index)} 
                      key={index}
                    >
                      <h6 className="fz-14 text-u ls1">{ category[1].name }</h6>
                    </li>  
                    )
                })
                  }
              </ul>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="position-re">
            <div className="tab-content current">
                 <div className="row">
                  <div>
              {
               Menu && Object.entries(Menu).map((menu, index) => (
                <>
                {index%2 === 0 ? (
                  <div className={`menu-list ${index !== menu[1].length - 1 ? 'mb-40':''}`} key={index}>
                <div className="item">
                  <div className="flex mb-5">
                    {
                      console.log("Product - ", menu)
                    }
                    <h5 className="title fz-16 fw-600 text-u ls2 textmenuwidth">{ menu[1][1].name }</h5>
                    <div className="dots"></div>
                    <h6 className="price" style={{marginLeft:15}}> ₹{menu[1][1].price }</h6>
                  </div>
                  <p>{ menu[1][1].description }</p>
                </div>
              </div>
                ) : (
                  null
                )

                }
                
              </>
                  // <SlideDown key={idx} closed={item.closed}>
                  //   <div className="tab-content current" id={`tab-${item.id}`}>
                  //     <div className="row">
                  //       <MenuSheet menuList={item.list1} mb={true} />
                  //       <MenuSheet menuList={item.list2} />
                  //     </div>
                  //   </div>
                  // </SlideDown>
                ))
              }
              </div>
              <div>
              {
               Menu && Object.entries(Menu).map((menu, index) => (
                <>
                {index%2 !== 0 ? (
                  <div className={`menu-list mb-40`} key={index}>
                <div className="item">
                  <div className="flex mb-5">
                    {
                      console.log("Product - ", menu)
                    }
                    <h5 className="title fz-16 fw-600 ls2">{ menu[1][1].name }</h5>
                    <div className="dots"></div>
                    <h6 className="price" style={{marginLeft:15}}> ₹{menu[1][1].price }</h6>
                  </div>
                  <p>{ menu[1][1].description }</p>
                </div>
              </div>
                ) : (
                  null
                )

                }
                
              </>
                  // <SlideDown key={idx} closed={item.closed}>
                  //   <div className="tab-content current" id={`tab-${item.id}`}>
                  //     <div className="row">
                  //       <MenuSheet menuList={item.list1} mb={true} />
                  //       <MenuSheet menuList={item.list2} />
                  //     </div>
                  //   </div>
                  // </SlideDown>
                ))
              }
              </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="paltes">
        <div className="img1 img">
          <img src="restaurant/img/plate2.png" alt="" />
        </div>
        <div className="img2 img">
          <img src="restaurant/img/plate1.png" alt="" />
        </div>
        <div className="img3 img">
          <img src="restaurant/img/plate3.png" alt="" />
        </div>
      </div>
      <img src="img/decbg.png" />
    </section>
  )
}

export default Menu