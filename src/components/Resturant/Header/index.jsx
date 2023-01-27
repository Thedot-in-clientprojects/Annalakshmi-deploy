/* eslint-disable @next/next/no-img-element */
import React, { useState, useEffect } from "react";
import Link from 'next/link';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { useSpring, animated } from 'react-spring';
import {Container} from "@mui/material"
import dayjs from 'dayjs';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { Button } from "react-scroll";
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
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
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { realDB } from '../../../lib/initFirebase';
import 'firebase/database'
import 'firebase/storage'
import Chip from '@mui/material/Chip';
import LightModeIcon from '@mui/icons-material/LightMode';
import NightsStayIcon from '@mui/icons-material/NightsStay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { NoEncryption } from "@mui/icons-material";
import Router from 'next/router'


// const Fade = React.forwardRef(function Fade(props, ref) {
//   const { in: open, children, onEnter, onExited, ...other } = props;
//   const style = useSpring({
//     from: { opacity: 0 },
//     to: { opacity: open ? 1 : 0 },
//     onStart: () => {
//       if (open && onEnter) {
//         onEnter();
//       }
//     },
//     onRest: () => {
//       if (!open && onExited) {
//         onExited();
//       }
//     },
//   });

//   return (
//     <animated.div ref={ref} style={style} {...other}>
//       {children}
//     </animated.div>
//   );
// });

// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '50%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   bgcolor: 'background.paper',
//   boxShadow: 24,
//   p: 4,
// };



function Header() {
//   const [open, setOpen] = React.useState(false);
//   const [openUserData, setOpenUserData] = React.useState(false);
//   const handleOpen = () => setOpen(true);
//   const handleOpenUserData = () => setOpenUserData(true);
//   const handleClose = () => setOpen(false);
//   const handleCloseUserData = () => setOpen(false);

//   const [date, setdate] = useState(dayjs(new Date()))


//   // Temp Status ----------------------------------------------------

//   const [tempStatus, settempStatus] = useState('');
//   const [tempSessionTwelve, settempSessionTwelve] = useState('');
//   const [tempSessionOne, settempSessionOne] = useState('');
//   const [tempSessionTwo, settempSessionTwo] = useState('');
//   const [tempDinner, settempDinner] = useState('');
//   const [tempLunch, settempLunch] = useState('');
//   const [tempData, settempData] = useState('');
//   // ----------------------------------------------------------------


//   const getTodaysSessionStatus = () => {
//     const db = getDatabase();
//     console.log("Date Handle Change -> ", dayjs(date.$d).format('DD-MM-YYYY') )
//     const sessionToday = ref(db, `/block/booking/date/${dayjs(new Date()).format('DD-MM-YYYY')}`);
//     onValue(sessionToday, (snapshot) => {
//         const data = snapshot.val();
//         console.log("Check DATA -> Home Pae ", data);
//           console.log("Status -> ", data);
//           if(data){
//             settempData(data)
//             settempStatus(data.status);
//             settempSessionTwelve(data.sessionTwelve);
//             settempSessionOne(data.sessionOne);
//             settempSessionTwo(data.sessionTwo);
//             settempDinner(data.dinner);
//             settempLunch(data.lunch);
//           }
       
//     });     
//   }

//   useEffect(() => {
//     getTodaysSessionStatus()
//   }, [])
  


//   const handleChange = (newValue) => {
//     setdate(newValue);
//     const db = getDatabase();
//     console.log("The Actual Date: ", (date.$D + 1) + '-' + (date.$M + 1) + '-' + date.$y);
//     const actualDate = (date.$D + 1) + '-' + (date.$M + 1) + '-' + date.$y;
//     console.log("Date Handle Change -> ", dayjs(date.$d).format('DD-MM-YYYY') )
//     const sessionToday = ref(db, `/block/booking/date/${actualDate}`);
//     onValue(sessionToday, (snapshot) => {
//         const data = snapshot.val();
//         console.log("Check DATA -> Home Pae ", data);
//           console.log("Status -> ", data);
//           settempData(data)
//           settempStatus(data.status);
//           settempSessionTwelve(data.sessionTwelve);
//           settempSessionOne(data.sessionOne);
//           settempSessionTwo(data.sessionTwo);
//           settempDinner(data.dinner);
//           settempLunch(data.lunch);
//     });          
//   };
  
  
//   const [noMembers, setnoMembers] = useState(2);
//   const handleChangeHere = (event) => {
//     setnoMembers(event.target.value);
//   };

//   const formGetUserPhone = (e) => {
//     e.preventDefault();
//     console.log("Form Get User Phone");
//     handleOpenUserData()
//     // handleClose()
//     // setOpen(false);
//   }

//   const [name, setname] = useState('');
//   const [phone, setphone] = useState('');

  
//   const [sessionHere, setsessionHere] = useState('');
  

//   //**   Lunch Section Slot

//   const [lunchSessionStatus, setlunchSessionStatus] = useState(false);
//   const [dinnerSessionStatus, setdinnerSessionStatus] = useState(false);
//   const [lunchTimingSessionStatus12, setlunchTimingSessionStatus12] = useState(false);
//   const [lunchTimingSessionStatus01, setlunchTimingSessionStatus01] = useState(false);
//   const [lunchTimingSessionStatus02, setlunchTimingSessionStatus02] = useState(false);
//   // **

//   // *? Lunch Session Picker

// const [lunchSessionSlot, setlunchSessionSlot] = useState('');
// const luchSessionPicker = (e, lunchSession) => {
//       e.preventDefault();
//       setlunchSessionSlot(lunchSession);
//       if(lunchSession === '12:00 PM'){
//           setlunchTimingSessionStatus12(true);
//           setlunchTimingSessionStatus01(false);
//           setlunchTimingSessionStatus02(false);
//       }
//       else if(lunchSession === '1:30 PM'){
//           setlunchTimingSessionStatus01(true);
//           setlunchTimingSessionStatus12(false);
//           setlunchTimingSessionStatus02(false);
//       }
//       else if(lunchSession === '2:00 PM'){
//           setlunchTimingSessionStatus01(false);
//           setlunchTimingSessionStatus02(true);
//           setlunchTimingSessionStatus12(false);

//         }
// } 

// // *?



//   const selectSessionHere = (e, session) => {
//     setsessionHere(session);
//     console.log('SESSION -> ', session);
//     if(session === 'Lunch'){
//       console.log('***LUNCH***')
//       setdinnerSessionStatus(false);
//       setlunchSessionStatus(!lunchSessionStatus);
//     }
//     else if(session === 'Dinner'){
//       setdinnerSessionStatus(!dinnerSessionStatus);
//       setlunchSessionStatus(false);
//     }
//   }


//   const submitReservation = (e) => {
//     e.preventDefault();
//     const id = uuidv4();
//     console.log('Date : ', date.$d);
//     console.log('Date : ', dayjs(date.$d).format('DD/MM/YYYY'));
//     // console.log('date -> ',  moment(date.$d).format('MMMM Do YYYY, h:mm:ss a'))
//     const db = getDatabase();
//     if(true){  
//     set(ref(db, `reservation/${id}`), {
//         userId: id,
//         name: name,
//         no: noMembers,
//         phone: phone,
//         date: dayjs(date.$d).format('DD/MM/YYYY'),
//         session: sessionHere,
//         status: 'New',
//         lunchSlot: lunchSessionSlot
//       }).then(res => {
//         setname('')
//         setphone('')
//         setdate('')
//         handleCloseUserData();
//         window.open(`https://wa.me/919843021844?text=Hi, This is _*${name}*_, I am reserving for *${noMembers}* members on *${date}* - ${sessionHere} Session - *${lunchSessionSlot}*. Contact me: +91 ${phone}`)
//         // window.location.href
//         // window.location.reload()
//         Router.push('/success-page');

//       })
//   }else{
//   } 
// }

// const [currentTime, setcurrentTime] = useState(new Date().getHours());
// const [currentDate, setcurrentDate] = useState(new Date().getDate());
// const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
// const [currentYear, setcurrentYear] = useState(new Date().getFullYear())



// // ** Booking Logic *************************


// const [sessionStatus, setsessionStatus] = useState('');

// useEffect(() => {
//   setInterval(() => {
//     setcurrentDate(new Date().getDate())
//     setcurrentTime(new Date().getHours())
//     console.log("Hours - ", currentTime)
//   }, 1000);
// }, [])






// // ******************************************



// // *? *****************************************************




// const [getAllReservations, setgetAllReservations] = useState([]);
// const [todaysTotalCount, settodaysTotalCount] = useState(0);
// const getAllReservationsHere = () => {
//     const db = getDatabase();
//     let reservation_per_date = [];
//     const reservation = ref(db, 'reservation/');
//     let formatDate = dayjs(new Date()).format('DD/MM/YYYY');
//     let reservation_counter = 0;
//     onValue(reservation, (snapshot) => {
//         const data = snapshot.val();
//         console.log("Reservation By Date -> ", data)
//         Object.entries(data).map((res, index) => {
//               console.log("res -> ", res[1])
//               if(res[1].date === formatDate){
//                 reservation_per_date.push(res);
//                 reservation_counter = reservation_counter + 1;
//               }
//         })
//       });
//       console.log("Reservation Status - ", reservation_counter);
//       setgetAllReservations(reservation_per_date)
//       settodaysTotalCount(reservation_counter)
// }


// useEffect(() => {
//   getAllReservationsHere()
// }, [])



// // ************************ Global Booking Status *****************************

// const [bookingStatus, setbookingStatus] = useState(false);
// const [bookingStatusHere, setbookingStatusHere] = useState('');

// const getBookingStatusHere = () => {
//   const db = getDatabase();
//   const bookings = ref(db, `/status/booking/`);
//   onValue(bookings, (snapshot) => {
//       const data = snapshot.val();
//       console.log("Status -> ", data)
//       setbookingStatusHere(data.status)
//     })
// }

// const getBookingStatusByDateHere = () => { 
//   const db = getDatabase();

//   const bookings = ref(db, `/block/booking/date/${dayjs(new Date()).format('DD/MM/YYYY')}`);
//   onValue(bookings, (snapshot) => {
//       const data = snapshot.val();
//       console.log("Booking By Date -> ", data)
//     })
// }

// useEffect(() => {
//   getBookingStatusHere()
//   getBookingStatusByDateHere()
// }, [bookingStatus])



// ****************************************************************************


// *? ******************************************************

// ************************* All Calendar Logics *******************************






// *****************************************************************************

  return (
    <header style={{paddingTop: 80}}   data-scroll-index="0">
          <div className='header-main'>
            <Container>
              <img className='header-main-img' src="/img/headerimg.png" />
              <h1 className='header-main-title'> Where vegetarian  dining <br/> is a cultural experience.</h1>
             
            
                {/* <button className="header-main-btn" onClick={handleOpen}>Reservation</button> */}

               
              
            </Container>
          </div>
    </header>
  )
}

export default Header