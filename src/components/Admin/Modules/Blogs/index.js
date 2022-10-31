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
import { doc, onSnapshot, collection, query, where, setDoc } from "firebase/firestore";
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

function AdminBlogs() {


    const [date, setdate] = useState(new Date().toDateString());
    const [title, settitle] = useState('');
    const [category, setcategory] = useState('');
    const [content, setcontent] = useState('');
    const [image, setimage] = useState('');
    const [imageUpload, setimageUpload] = useState('');
    const [isTreadning, setisTreadning] = useState(false);

    const [isLoading, setisLoading] = useState(false);
    const [imageUploadedSuccess, setimageUploadedSuccess] = useState(false);

    const createBlog = (e) => {
        e.preventDefault();
        const id = uuidv4();

        const db = getDatabase();
        set(ref(db, `blog/${id}`), {
            id: id,
            title: title,
            category: category,
            content: content,
            image: image,
            date: date
          }).then(res => {
            setcategory('')
            setcontent('')
            settitle('')
            setimage('')
            setisLoading(false)

          })
    }






    const onFileInputChange = (event) => {
        const { files } = event.target;
        setimageUpload(event.target.files[0])
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



    const submitBlog = (e) => {
        e.preventDefault();

    }


    const deleteBlog = (e, id) => {
        e.preventDefault();
        const db = getDatabase();
        set(ref(db, `blog/${id}`), {
           
          }).then(res => {
            // window.location.reload()
          })
    }

    const [allBlogs, setallBlogs] = useState([])
    const getAllBlogs = () => {
        const db = getDatabase();
        const blog = ref(db, 'blog/');
        onValue(blog, snapshot => {
            let blog_data = snapshot.val()
            if(blog_data)
                setallBlogs(blog_data)
        } )
    }




    useEffect(() => {
      getAllBlogs()
    
    }, [])
    

  return (
    <div className='container' >
      <h6 className='gilroyM'>AdminBlogs</h6>
        <h4 className='gilroyM'>
          Create Blogs
        </h4>
        <p style={{marginTop: "20px"}} className='gilroyM'>
            Enter Title
        </p>
        <MDBInput value={title} onChange={(e) => settitle(e.target.value)} label='Enter Title' id='form1' type='text' />
        <p style={{marginTop: "20px"}} className='gilroyM'>
            Enter Category
        </p>
        <MDBInput value={category} onChange={(e) => setcategory(e.target.value)} label='Enter Category' id='form2' type='text' />
        <p style={{marginTop: "20px"}} className='gilroyM'>
            Enter Content
        </p>
        <MDBInput value={content} onChange={(e) => setcontent(e.target.value)} rows="8" label='Enter Content' id='form3' type='textarea' />
        <p style={{marginTop: "20px"}} className='gilroyM'>
            Enter Content
        </p>
        <MDBInput type="textarea" label="Material textarea" rows="5" />
        <label  className="form-label gilroyM" style={{marginTop: "20px"}}>chosse image for blog card</label>
        <input type="file" className="form-control" id="customFile" onChange={onFileInputChange}/>
        <MDBBtn className='mt-2 gilroyM' onClick={uploadImage}>Upload</MDBBtn>
            <br>
            </br>
        
        <MDBBtn className='mt-5 btn-success gilroyM' onClick={createBlog} style={{marginBottom: "20px"}}>Create Blog</MDBBtn>
        <hr style={{height: "3px"}} />
    <div>
        <p className='gilroyM'>
            All Blogs
        </p>
        <div>
            {allBlogs && Object.entries(allBlogs).map((blog, index) => {
                return(
                    <div key={index}>
                        <p className='gilroyM'>
                            {blog[1].title}
                        </p>
        <MDBBtn className='mt-2 gilroyM' onClick={(e) => deleteBlog(e,blog[0])} style={{marginBottom: "20px"}}>Upload</MDBBtn>

                    </div>
                )
            })

            }
        </div>
    </div>
    </div>
  )
}

export default AdminBlogs