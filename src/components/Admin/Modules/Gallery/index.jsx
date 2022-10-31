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
import { realDB } from '../../../../lib/initFirebase';
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



function GalleryAdmin() {

    const [image, setimage] = useState('');
    const [imageUpload, setimageUpload] = useState('');
    const [isTreadning, setisTreadning] = useState(false);

    const [isLoading, setisLoading] = useState(false);
    const [imageUploadedSuccess, setimageUploadedSuccess] = useState(false);

        
    const submitGallery = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const id = uuidv4();
    
        set(ref(db, `gallery/${id}`), {
            url: image
        }).then(res => {
          setimage('')
        })
    }
    const uploadImage = (e) => {
        e.preventDefault();
        
          setimageUploadedSuccess(false)
          let file = imageUpload;
          setisLoading(true)
          // create a storage ref
          const storage = getStorage();
          const storageRef = sRef(storage, "user_uploads" + file.name)
          const uploadTask = uploadBytesResumable(storageRef, file);
  
  
          uploadTask.on('state_changed', 
            (snapshot) => {
  
              const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log('Upload is ' + progress + '% done');
              switch (snapshot.state) {
                case 'paused':
                  console.log('Upload is paused');
                  break;
                case 'running':
                  console.log('Upload is running');
                  break;
              }
            }, 
            (error) => {
            }, 
            () => {
     
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                console.log('File available at', downloadURL);
                setimage(downloadURL)
                setisLoading(false)
                setimageUploadedSuccess(true)
              });
            }
          )
    }

    const onFileInputChange = (event) => {
        const { files } = event.target;
        setimageUpload(event.target.files[0])
      }
    
      const [getAllGalleryData, setgetAllGalleryData] = useState([]);
      const getAllGallery = () => {
        const db = getDatabase();
        const product = ref(db, 'gallery/');
        onValue(product, (snapshot) => {
            const data = snapshot.val();
            setgetAllGalleryData(data);
            setimage('')
            setimageUpload('')
          });
      }

      useEffect(() => {
        getAllGallery()
      }, [])
      

  return (
    <div><h3 className='gilroyM'>Gallery</h3>
        <label  className="form-label gilroyM">click below and choose the image file you need to upload</label>
        <input type="file" className="form-control" id="customFile" onChange={onFileInputChange}/>
        <MDBBtn className='mt-2 gilroyM' onClick={uploadImage}>Upload</MDBBtn>
         <div className="text-center mt-40">
                    <MDBBtn className='btn-success gilroyM' type="submit" onClick={submitGallery} style={{marginBottom: "20px"}}>
                      <span>Upload to Gallery</span>
                    </MDBBtn>
                  </div>
                  <hr style={{height: "3px"}} />
        <div>
            {getAllGalleryData && Object.entries(getAllGalleryData).map((galler, index) => {
                return(
                    <img key={index} src={galler[1].url} style={{ 
                        height:300,
                        width:300,
                        marginLeft: "10px"
                    }}/>
                    
                )
            })
            }
        </div>
    </div>
  )
}

export default GalleryAdmin