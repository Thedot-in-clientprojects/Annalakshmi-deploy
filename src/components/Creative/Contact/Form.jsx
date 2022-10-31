import { useState, useEffect } from 'react';
// import Calendar from 'react-calendar';
// import 'react-calendar/dist/Calendar.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { v4 as uuidv4 } from 'uuid';
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
import { realDB } from '../../../lib/initFirebase';
import Link from 'next/link'
import 'firebase/database'
import 'firebase/storage'

const localizer = momentLocalizer(moment)

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    isAcecepted: false,
    isHold: false,
    isBooked: false,
    isReject: false
  });

  
  const [date, setdate] = useState(new Date().toDateString());
  const [name, setname] = useState('')
  const [phone, setphone] = useState('')
  const [message, setmessage] = useState('')


  const [isSuccess, setisSuccess] = useState(false);


  const isSuccessRender = () => {
    if(isSuccess)
    return(
      <div className="alert alert-primary" role="alert">
        Your Booking.. has been done, Our customer care will call you soon!!
    </div>
    )
  }


  useEffect(() => {
      if(isSuccess)
      setTimeout(() => {
          setisSuccess(false)
      }, 3000);
  }, [])
  

  const submitBookings = (e) => {
    e.preventDefault();
    const db = getDatabase();
    const id = uuidv4();

    set(ref(db, `booking/${id}`), {
        id: id,
        name: name,
        phone: phone,
        date: date,
        message: message 
    }).then(res => {
      setname('')
      setphone('')
      setmessage('')
      setdate(new Date().toDateString())
    })

  }


  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage('Please fill in all fields');
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage('Name must be at least 5 characters');
      return false;
    }
    if (formValues.subject.length < 10) {
      setErrMessage('Subject must be at least 10 characters');
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage('Message must be at least 10 characters');
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage('Email is invalid');
      return false;
    }
    return true;
  }

  const handleChange = (e) => {
    setFormData(prev => ({ 
      ...prev, 
      [e.target.name]: e.target.value 
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    //= Validate Form
    if (!validateForm(formData)) return;

    //= Clear Error Message
    setErrMessage('');

    //= Sumbit The Form
    document.forms[0].submit(); 
  };

  const [value, onChange] = useState(new Date());
  return (
    <div className="container">
      <div className="row justify-content-center">
        {isSuccessRender()}
        <div className="col-lg-11">
          <div className="box-shadow to-up">
            <form id="contact-form" method="post" action="contact.php">
              {
                errMessage && <div className="messages">{ errMessage }</div>
              }

              <div className="controls row">

                <div className="col-12">
                  <div className="mb-40">
                    <h5 className="fw-600">Let&lsquo;s get in touch with us !</h5>
                  </div>
                </div>

                <div className="col-lg-6 md-mb30">
                  <div className="form-group mb-30">
                    <input onChange={(e) => setname(e.target.value)} id="form_name" type="text" name="name" placeholder="Name" required="required"  value={name} />
                  </div>

                  <div className="form-group mb-30">
                    <input onChange={(e) => setphone(e.target.value)} id="form_email" type="number" name="phone" placeholder="Phone" required="required" value={phone} />
                  </div>

                  <div className="form-group">
                    {/* <input id="form_subject" type="text" name="subject" placeholder="Subject" required="required" onChange={handleChange} value={formData.subject} /> */}
                    {/* <Calendar onChange={onChange} value={value} /> */}
                    <label htmlFor="birthday">Booking Date:</label>
                  <input value={date} onChange={(e) => setdate(e.target.value)} type="date" id="booking" name="booking"/> 
                  </div>
                  {/* <Calendar onChange={onChange} value={value} /> */}
                </div>

                <div className="col-lg-6">
                  <div className="form-group sam-height">
                    <textarea onChange={(e) => setmessage(e.target.value)} id="form_message" name="message" placeholder="Message" rows="4" required="required"  value={message}></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center mt-40">
                    <button type="submit" onClick={submitBookings}>
                      <span>Book&lsquo;Now</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Form