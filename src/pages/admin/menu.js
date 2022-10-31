import React, { useState, useEffect } from 'react';
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
import { realDB } from '../../lib/initFirebase';
import Link from 'next/link'
import 'firebase/database'
import 'firebase/storage'
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane,
    MDBRow,
    MDBCol,
    MDBInput,
    MDBBtn 
  } from 'mdb-react-ui-kit';
  import { v4 as uuidv4 } from 'uuid';

function AdminMenu() {


    const [verticalActive, setVerticalActive] = useState('tab1');

    const handleVerticalClick = (value) => {
      if (value === verticalActive) {
        return;
      }
  
      setVerticalActive(value);
    };

    const [categoryName, setcategoryName] = useState('');
    const [allCategories, setallCategories] = useState([]);
    const [missingField, setmissingField] = useState(false);


    const [productName, setproductName] = useState('');
    const [productPrice, setproductPrice] = useState('');
    const [productCategory, setproductCategory] = useState('');
    const [productDescription, setproductDescription] = useState('');
    const [allProducts, setallProducts] = useState([]);

    


    const createCategory = (e) => {
        e.preventDefault();
       if(categoryName.length > 0){
        const id = uuidv4();
        const db = getDatabase();
        set(ref(db, `category/${id}`), {
            id: id,
            name: categoryName,
          }).then(res => {
            setcategoryName('')
          })
      }else{
        setmissingField(true)
      }
    }
  

    const getAllCategories = () => {
        const db = getDatabase();
        const categories = ref(db, 'category/');
        onValue(categories, (snapshot) => {
            const data = snapshot.val();
            setallCategories(data);
          });
    }

    const deleteCategory = (e, id) => {
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, `category/${id}`), {
           
          }).then(res => {
            window.location.reload()
          })
    }

    const createProduct = (e) => {
        e.preventDefault();
        const id = uuidv4();

        const db = getDatabase();
     if(true){  
        set(ref(db, `product/${id}`), {
            id: id,
            name: productName,
            price: productPrice,
            description: productDescription,
            category: productCategory
          }).then(res => {
            setproductName('')
            setproductDescription('')
            setproductPrice('')
            setproductCategory('')
          })
      }else{
        setmissingField(true)
      } 
    }

    const getAllProducts = () => {
        const db = getDatabase();
        const product = ref(db, 'product/');
        onValue(product, (snapshot) => {
            const data = snapshot.val();
            setallProducts(data);
          });
    }

    useEffect(() => {
        getAllCategories()
        getAllProducts()
    }, [])
    

    const deleteProduct = (e, id) => {
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, `product/${id}`), {
           
          }).then(res => {
            window.location.reload()
          })
    }

    const [setProductForEdit, setsetProductForEdit] = useState(false);
    const [setCategoryForEdit, setsetCategoryForEdit] = useState(false);
    const [setProductIdForEdit, setsetProductIdForEdit] = useState('');
    const editProduct = (e, product) => {
      console.log('product - ', product);
      setsetProductForEdit(true);
      setproductName(product.name);
      setproductCategory(product.category)
      setproductDescription(product.description)
      setproductPrice(product.price)
      setsetProductIdForEdit(product.id)
    }

    const updateProduct = (e) => {
      e.preventDefault();
      const db = getDatabase();
      set(ref(db, `product/${setProductIdForEdit}`), {
        id: setProductIdForEdit,
        name: productName,
        price: productPrice,
        description: productDescription,
        category: productCategory
      }).then(res => {
        setproductName('')
        setproductDescription('')
        setproductPrice('')
        setproductCategory('')
        setsetProductForEdit(false)
        window.location.reload()
      })
    }
    const productEditPanel = () => {
      if(setProductForEdit)
          return(
            <div >
                <h3 className='mt-3' >
                        Create Product
                    </h3>
                    <div>
                    <div>
                    <p className='mt-3'>
                        Enter the Product Name
                    </p>
                    <MDBInput value={productName} onChange={(e) => setproductName(e.target.value)} label='Example label' id='form1' type='text' />

                    <p className='mt-3'>
                        Select Category
                    </p>
                    <select onChange={(e) => setproductCategory(e.target.value)} className="browser-default custom-select">
                    {allCategories && Object.entries(allCategories).map((cate, index) => {
                      return(
                    <option key={index} value={cate[1].name}>{cate[1].name}</option>
                      )
                  })}
                  </select>
                    <p className='mt-3'>
                        Enter the Price
                    </p>
                    <MDBInput value={productPrice} onChange={(e) => setproductPrice(e.target.value)} label='Example label' id='form1' type='text' />
                    <p className='mt-3'>
                        Enter the Product Desciption
                    </p>
                    <MDBInput value={productDescription} onChange={(e) => setproductDescription(e.target.value)} label='Example label' id='form1' type='text' />
                    <MDBBtn className='mt-2' onClick={updateProduct}>Update</MDBBtn>
                    </div>
                    </div>
                </div>
          )
    }

    const [editableCategoryName, seteditableCategoryName] = useState('');
    const [isCategoryEditProduct, setisCategoryEditProduct] = useState(0)

  return (
    <div>
        <div className='container' style={{padding: "15px"}}>
        <MDBRow>
        <MDBCol size='3'>
          <MDBTabs className='flex-column text-center'>
            <MDBTabsItem>
              <MDBTabsLink onClick={() => handleVerticalClick('tab1')} active={verticalActive === 'tab1'} style={{borderRadius: "10px", color: "#9B1915", fontFamily: "GilroyMedium", fontSize: "15px"}}>
                Categories
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem style={{marginTop: "10px"}}>
              <MDBTabsLink onClick={() => handleVerticalClick('tab2')} active={verticalActive === 'tab2'} style={{borderRadius: "10px", color: "#9B1915", fontFamily: "GilroyMedium", fontSize: "15px"}}>
                Products
              </MDBTabsLink>
            </MDBTabsItem>
            <MDBTabsItem style={{marginTop: "10px"}}>
              <MDBTabsLink onClick={() => handleVerticalClick('tab3')} active={verticalActive === 'tab3'} style={{borderRadius: "10px", color: "#9B1915", fontFamily: "GilroyMedium", fontSize: "15px"}}>
                Manage
              </MDBTabsLink>
            </MDBTabsItem>
          </MDBTabs>
        </MDBCol>
        <MDBCol size='9'>
          <MDBTabsContent>
            <MDBTabsPane show={verticalActive === 'tab1'}>
                <div>
                    <h3 className='mt-3 gilroyM'>
                        Create Category
                    </h3>
                    <div>
                    <p className='mt-3 gilroyM'>
                        Enter the Category Name
                    </p>
                    <MDBInput value={categoryName} onChange={(e) => setcategoryName(e.target.value)} label='category name' id='form1' type='text' />
                    <MDBBtn  className='mt-2 gilroyM' onClick={createCategory}>Create</MDBBtn>
                    </div>
                </div>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab2'}>
                <div>
                <h3 className='mt-3 gilroyM'>
                        Create Product
                    </h3>
                    <div>
                    <div>
                    <p className='mt-3 gilroyM'>
                        Enter the Product Name
                    </p>
                    <MDBInput value={productName} onChange={(e) => setproductName(e.target.value)} label='Product name' id='form1' type='text' />

                    <p className='mt-3 gilroyM'>
                        Select Category
                    </p>
                    <select onChange={(e) => setproductCategory(e.target.value)} className="browser-default custom-select gilroyM">
                    {allCategories && Object.entries(allCategories).map((cate, index) => {
                      return(
                    <option key={index} value={cate[1].name}>{cate[1].name}</option>
                      )
                  })}
                  </select>
                    <p className='mt-3 gilroyM'>
                        Enter the Price
                    </p>
                    <MDBInput value={productPrice} onChange={(e) => setproductPrice(e.target.value)} label='enter price' id='form1' type='text' />
                    <p className='mt-3 gilroyM'>
                        Enter the Product Desciption
                    </p>
                    <MDBInput value={productDescription} onChange={(e) => setproductDescription(e.target.value)} label='Product discription' id='form1' type='text' />
                    <MDBBtn className='mt-4 gilroyM' onClick={createProduct}>Create</MDBBtn>
                    </div>
                    </div>
                </div>
            </MDBTabsPane>
            <MDBTabsPane show={verticalActive === 'tab3'}>
              {productEditPanel()}
              <hr style={{height: "3px", backgroungColor: "#131313"}}/>
                <div>
                    <h4 style={{padding: "20px 0"}} className="gilroyM">
                        Categories List
                    </h4>
                    <div style={{display: 'flex',justifyContent: "space-between", alignItems: "center", flexDirection: "row", flexWrap: "wrap"}}>
                        {allCategories && Object.entries(allCategories).map((cate, index) => {
                            return(
                                <div key={index} style={{border: "1px solid #131313", padding: "5px", margin: "5px", borderRadius: "10px"}}>
                                
                                <li style={{listStyle: "none"}}>
                                  <h4 className="gilroyM">
                                    {console.log(cate)}
                                   Name - {cate[1].name}
                                   </h4>
                                </li>
                    <MDBBtn className='mt-2 btn-dark gilroyM'  onClick={createCategory}>Edit</MDBBtn>
                    <MDBBtn className='mt-2 btn-danger gilroyM' style={{marginLeft: "10px"}} onClick={(e) => deleteCategory(e,cate[0])}>Delete</MDBBtn>


                                </div>
                            )
                        })
                        }
                    </div>
                    <hr style={{height: "3px", backgroungColor: "#131313"}}/>
                    <h4 style={{padding: "20px 0"}} className="gilroyM">
                        Product List
                    </h4>
                    <div style={{display: 'flex', justifyContent: "space-between", alignItems: "center", flexDirection: "row", flexWrap: "wrap",}}>
                        {allProducts && Object.entries(allProducts).map((prod, index) => {
                            return(
                                <div key={index} style={{border: "1px solid #131313", padding: "5px", margin: "5px", borderRadius: "10px"}}>
                                  <h4>
                                <li style={{listStyle: "none", color: "#131313"}} className="gilroyM">
                                   Name {prod[1].name}
                                </li>
                                </h4>
                    <MDBBtn className='mt-2 btn-dark gilroyM' onClick={(e) => editProduct(e, prod[1])}>Edit</MDBBtn>
                    <MDBBtn className='mt-2 btn-danger gilroyM' style={{marginLeft: "10px"}} onClick={(e) => deleteProduct(e,prod[0])}>Delete</MDBBtn>


                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </MDBTabsPane>
          </MDBTabsContent>
        </MDBCol>
      </MDBRow>
        </div>  
    </div>
  )
}

export default AdminMenu