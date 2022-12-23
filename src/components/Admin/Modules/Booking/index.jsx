import React, { useState, useEffect } from 'react';
import firebase from 'firebase/compat/app'
import {
    getStorage,
    ref as sRef,
    uploadBytesResumable,
    uploadBytes,
    getDownloadURL 
} from "firebase/storage";
import { ref, runTransaction, getDatabase, set , onValue , get, onChildAdded, onChildChanged, onChildRemoved, orderByChild  } from 'firebase/database'
import { doc, onSnapshot, collection, query, where } from "firebase/firestore";
import { realDB } from '../../../../lib/initFirebase';
import Link from 'next/link'
import 'firebase/database'
import 'firebase/storage'
import Grid from '@mui/material/Grid';
import { Box, FormControl } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import dayjs from 'dayjs';
import { v4 as uuidv4 } from 'uuid';



function AdminBookings() {

const [getAllBookings, setgetAllBookings] = useState([]);

const getAllBookingsHere = () => {
    const db = getDatabase();
    const product = ref(db, 'booking/');
    onValue(product, (snapshot) => {
        const data = snapshot.val();    
        setgetAllBookings(data);
      });   
}

const [getAllReservations, setgetAllReservations] = useState([]);
const [todaysTotalCount, settodaysTotalCount] = useState(0);

const getAllReservationsHere = () => {
    const db = getDatabase();
    let reservation_list = [];
    const reservation = ref(db, 'reservation/');
    onValue(reservation, (snapshot) => {
        const data = snapshot.val();
        Object.entries(data).map((res, index) => {
          if(res[1].date === selectedDateWordIt){
            reservation_list.push(res)
          }
        })
        setgetAllReservations(reservation_list);
      });
}

const [resReRender, setResReRedner] = useState(false);

useEffect(() => {
    getAllBookingsHere()
    getAllReservationsHere()
}, [resReRender])



const resMoveToTodayProcess = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    console.log(res.userId);
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Process',
        lunchSlot: lunchSlot
      }).then(res => {
      })
}

const resMoveToTodayAccepted = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    console.log(res.userId);
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Accept',
        lunchSlot: lunchSlot
      }).then(res => {
      })
}

const resMoveBackToAccept = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    console.log(res.userId);
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Accept',
        lunchSlot: lunchSlot
      }).then(res => {
      })
}

// userId: id,
// name: name,
// no: noMembers,
// phone: phone,
// date: "28-10-2022",
// session: "Noon",
// status: 'New'


const resMoveToTodayDone = (e, res) => {
  e.preventDefault();
  setResReRedner(!resReRender)
  const db = getDatabase();
  console.log(res.userId);
  const userId = res.userId;
  const name = res.name
  const phone = res.phone
  const no = res.no
  const date = res.date
  const session = res.session
  const status = res.status
  const lunchSlot = res.lunchSlot
  set(ref(db, `/reservation/${res.userId}`), {
      userId: userId,
      name: name,
      no: no,
      phone: phone,
      date: date,
      session: session,
      status: 'Done',
      lunchSlot: lunchSlot
    }).then(res => {
    })
}

const resMoveBackToProcess = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Process',
        lunchSlot: lunchSlot
      }).then(res => {
      })
}

const resMoveBackToNew = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'New',
        lunchSlot: lunchSlot
      }).then(res => {
       
      })
}

const resMoveToHold = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
      userId: userId,
      name: name,
      no: no,
      phone: phone,
      date: date,
      session: session,
      status: 'Hold',
      lunchSlot: lunchSlot
      }).then(res => {
       
      })
}


const resMoveToRejected = (e, res) => {
    e.preventDefault();
    const db = getDatabase();

    set(ref(db, `user/reservation/${res[0]}`), {
        userId: res[0],
        name: res[1].name,
        no: res[1].noMembers,
        phone: res[1].phone,
        date: res[1].date,
        session: res[1].session,
        status: 'Rejected',
        lunchSlot: res[1].lunchSlot
      }).then(res => {
       
      })
}

const resBookingCancel = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    const status = res.status
    const lunchSlot = res.lunchSlot
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Canceled',
        lunchSlot: lunchSlot
      }).then(res => {
       
      })
}

const resBookingToComplete = (e, res) => {
  e.preventDefault();
  setResReRedner(!resReRender)
  const db = getDatabase();
  console.log(res.userId);
  const userId = res.userId;
  const name = res.name
  const phone = res.phone
  const no = res.no
  const date = res.date
  const session = res.session
  const status = res.status
  const lunchSlot = res.lunchSlot
  set(ref(db, `/reservation/${res.userId}`), {
      userId: userId,
      name: name,
      no: no,
      phone: phone,
      date: date,
      session: session,
      status: 'Complete',
      lunchSlot: lunchSlot
    }).then(res => {
    })
}

const resBookingToCompletedDone = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;

    set(ref(db, `/reservation/${res.userId}`), {
  
      }).then(res => {
       
      })
}


const [value, onChange] = useState(new Date());
const [selectedDateWord, setselectedDateWord] = useState('');
const [selectedDateWordIt, setselectedDateWordIt] = useState('');
const calendarDate = (e) => {
    console.log("Date - ", dayjs(e).format('DD/MM/YYYY'));
    setselectedDateWord(dayjs(e).format('DD-MM-YYYY'));
    setselectedDateWordIt(dayjs(e).format('DD/MM/YYYY'));
    let formatDate = dayjs(e).format('DD/MM/YYYY');
    const db = getDatabase();
    const reservation = ref(db, `reservation/`)
    let reservation_per_date = []
    let reservation_counter = 0;
    onValue(reservation, (snapshot) => {
        const data = snapshot.val();
        console.log("Reservation By Date -> ", data)
        Object.entries(data).map((res, index) => {
              console.log("res -> ", res[1])
              if(res[1].date === formatDate){
                reservation_per_date.push(res);
                reservation_counter = reservation_counter + 1;
              }
        })
      });
    console.log("All Reservation Based on Date -> ", reservation_per_date);
    setgetAllReservations(reservation_per_date);
    settodaysTotalCount(reservation_counter);
    // const res_reservation = reservation.orderByChild('date').equalTo(formatDate)
    // res_reservation.on("value", function(snapshot) {
    //     console.log("Date Per Reservation -> ", snapshot.val())
    // })  
    // onValue(reservation, (snapshot) => {
    //     const data = snapshot.val();
    //     console.log("Reservation By Date -> ", data)
    //     setgetAllReservations(data);
    //   });


    // setgetAllReservations
}

const [currentTime, setcurrentTime] = useState(new Date().getHours());
const [currentDate, setcurrentDate] = useState(new Date().getDate());
const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
const [currentYear, setcurrentYear] = useState(new Date().getFullYear())


const allReservationHereSlotDisplay = (e) => {
    e.preventDefault();
    const db = getDatabase();
    let reservation_list = [];
    const reservation = ref(db, 'reservation/');
    onValue(reservation, (snapshot) => {
        const data = snapshot.val();
        Object.entries(data).map((res, index) => {
            reservation_list.push(res)
        });
        setgetAllReservations(reservation_list);
      });
}

const [bookingStatus, setbookingStatus] = useState(false);
// false -> Closed
// true  -> Open
const doBookingClose = (e) => {
      e.preventDefault();
      setbookingStatus(false);
      const db = getDatabase();
        const id = uuidv4();
          if(selectedDateWord){
            set(ref(db, `/block/booking/date/${selectedDateWord}`), {
              date: selectedDateWord,
              status: 'closed',
              sessionTwelve: 'opened',
              sessionOne: 'opened',
              sessionTwo: 'opened',
              dinner:'opened',
              lunch: 'opened'
              }).then(res => {
             
            })
          }
         
     
}
const doBookingOpen = (e) => {
      e.preventDefault();
      setbookingStatus(true);
      const db = getDatabase();
      const id = uuidv4();
        if(selectedDateWord){
          set(ref(db, `/block/booking/date/${selectedDateWord}`), {
            date: selectedDateWord,
            status: 'opened',
            sessionTwelve: 'opened',
            sessionOne: 'opened',
            sessionTwo: 'opened',
            dinner:'opened',
            lunch: 'opened'
            }).then(res => {
           
          })
        }
       
    }


  const getBookingStatusHere = () => {
    const db = getDatabase();
    const bookings = ref(db, `/status/booking/`);
    onValue(bookings, (snapshot) => {
        const data = snapshot.val();
        console.log("Status -> ", data)
        if(data.status === 'opened'){
            setbookingStatus(true);
        }
        else if(data.status === 'closed'){
            setbookingStatus(false);
        }
      })
  }

  useEffect(() => {
    getBookingStatusHere();   
  }, [])
  


  const doBookingThisDateClose = (e) => {
          e.preventDefault();
          const db = getDatabase();
          const id = uuidv4();
          if(selectedDateWord){
            set(ref(db, `/block/booking/date/${selectedDateWord}`), {
              date: selectedDateWord,
              status: 'closed'
            }).then(res => {
             
            })
          }
         
  }


  const doBookingThisDateOpen = (e) => {
        e.preventDefault();
        const db = getDatabase();
        const id = uuidv4();
          if(selectedDateWord){
            set(ref(db, `/block/booking/date/${selectedDateWord}`), {
              date: selectedDateWord,
              status: 'opened'
            }).then(res => {
             
            })
          }
         
  }


  // Temp Status ----------------------------------------------------

  const [tempStatus, settempStatus] = useState('');
  const [tempSessionTwelve, settempSessionTwelve] = useState('');
  const [tempSessionOne, settempSessionOne] = useState('');
  const [tempSessionTwo, settempSessionTwo] = useState('');
  const [tempDinner, settempDinner] = useState('');
  const [tempLunch, settempLunch] = useState('');
  const [tempData, settempData] = useState('');
  // ----------------------------------------------------------------


  // ? ***************************************************************

  const [selectedProductStatus, setselectedProductStatus] = useState(false);
  const [isLoadingHere, setisLoadingHere] = useState(false);
  // ? ---------------------------------------------------------------
  const doBookingThisDateCloseTodaySession = (e, session, status) => {
        e.preventDefault();
        const db = getDatabase();
        const id = uuidv4();
        setisLoadingHere(true)
        if(selectedDateWord === ''){
          setselectedProductStatus(true);
          setisLoadingHere(false)
        }
        else{
        const sessionToday = ref(db, `/block/booking/date/${selectedDateWord}`);
        onValue(sessionToday, (snapshot) => {
            const data = snapshot.val();
            setisLoadingHere(true)
            console.log("Check DATA -> ", data);
            if(data){
              console.log("Status -> ", data);
              settempData(data)
              settempStatus(data.status);
              settempSessionTwelve(data.sessionTwelve);
              settempSessionOne(data.sessionOne);
              settempSessionTwo(data.sessionTwo);
              settempDinner(data.dinner);
              settempLunch(data.lunch);
              
            if(selectedDateWord){

              if(session === 'dinner'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: data.status,
                  sessionTwelve: data.sessionTwelve,
                  sessionOne: data.sessionOne,
                  sessionTwo: data.sessionTwo,
                  dinner: status,
                  lunch: data.lunch
                  }).then(res => {
                      setisLoadingHere(false)
                      window.location.reload(true)
                })
              }
            else if(session === 'lunch'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: data.status,
                  sessionTwelve: status,
                  sessionOne: status,
                  sessionTwo: status,
                  dinner: data.dinner,
                  lunch: status
                  }).then(res => {
                    setisLoadingHere(false)
                      window.location.reload(true)
                })
              }
              else if(session === 'Global'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: status,
                  sessionTwelve: data.sessionTwelve,
                  sessionOne: data.sessionOne,
                  sessionTwo: data.sessionTwo,
                  dinner: data.dinner,
                  lunch: data.lunch  
                  }).then(res => {
                    setisLoadingHere(false)
                      window.location.reload(true)
                })
              }
              else if(session === '12:00 PM'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: data.status,
                  sessionTwelve: status,
                  sessionOne: data.sessionOne,
                  sessionTwo: data.sessionTwo,
                  dinner: data.dinner,
                  lunch: data.lunch
                  }).then(res => {
                    setisLoadingHere(false)
                      window.location.reload(true)

                })
              }
              else if(session === '1:30 PM'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: data.status,
                  sessionTwelve: data.sessionTwelve,
                  sessionOne: status,
                  sessionTwo: data.sessionTwo,
                  dinner: data.dinner,
                  lunch: data.lunch
                  }).then(res => {
                    setisLoadingHere(false)
                      window.location.reload(true)

                })
              }
              else if(session === '2:00 PM'){
                set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                  date: data.date,
                  status: data.status,
                  sessionTwelve: data.sessionTwelve,
                  sessionOne: data.sessionOne,
                  sessionTwo: status,
                  dinner: data.dinner,
                  lunch: data.lunch
                  }).then(res => {
                    setisLoadingHere(false)
                      window.location.reload(true)

                })
              }
            }
            }
            else{
              settempData('')
             }
          })
          
        }
          
         
  }

  const getSelectedDateStatusHere = () => {
    const db = getDatabase();
    setisLoadingHere(true)
 
    console.log('selectedDateWord : ', selectedDateWord);
    if(selectedDateWord === ''){
        setselectedProductStatus(true)
    }
    else{
    const sessionToday = ref(db, `/block/booking/date/${selectedDateWord ? selectedDateWord : dayjs(new Date()).format('DD-MM-YYYY')}`);
    onValue(sessionToday, (snapshot) => {
            const data = snapshot.val();
            console.log("Status getSelectedDateStatusHere() -> ", data);
            if(data === null){
              set(ref(db, `/block/booking/date/${selectedDateWord}`), {
                date: selectedDateWord,
                status: 'opened',
                sessionTwelve: 'opened',
                sessionOne: 'opened',
                sessionTwo: 'opened',
                dinner: 'opened',
                lunch: 'opened'
                }).then(res => {
                  setisLoadingHere(false)

              })
              
            }
            else{
              settempData(data);
              settempStatus(data.status);
              settempSessionTwelve(data.sessionTwelve);
              settempSessionOne(data.sessionOne);
              settempSessionTwo(data.sessionTwo);
              settempDinner(data.dinner);
              settempLunch(data.lunch);
              setisLoadingHere(false);

            }
            
        });
      }

  }


  useEffect(() => {
      if(selectedProductStatus){
        setTimeout(() => {
          setselectedProductStatus(false)
      }, 3000);
      }
        getSelectedDateStatusHere();
  }, [selectedProductStatus, tempData])
  

  return (
    <div>
        <h4 style={{
            marginLeft: 35,
            marginTop: 45,
            color:'#000000',
            marginBottom: 45,
            fontWeight: '800'
        }}>
            Admin Booking <span>
            <Button variant="contained" onClick={allReservationHereSlotDisplay}>Show All</Button>
            {bookingStatus ? (
              <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#C50000'
              }} onClick={doBookingClose}>Click to Close Booking</Button>
            ) : (
              
              <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00A455'
              }} onClick={doBookingOpen}>Click to Open Booking</Button> 
            )
            }
            <div style={{display: "flex", backgroundColor: "#fff", marginTop: "30px", justifyContent:"space-between", alignItems: "center", padding: "20px"}}>
            <div>
                {selectedProductStatus ? (
                     <div style={{position:"fixed", top: "170px", right: "10px", background: "#fff", padding: "10px 20px", boxShadow: "0 19px 38px #1c1c1c4c, 0 15px 12px #2c2c2c38", borderRadius: "2px", color: "#E26868", zIndex: "10"}}>Please select a date</div>
                ) : (
                  <div style={{position:"fixed", top: "170px", right: "10px", background: "#fff", padding: "10px 20px", boxShadow: "0 19px 38px #1c1c1c4c, 0 15px 12px #2c2c2c38", borderRadius: "2px", zIndex: "10"}}>{selectedDateWord}</div>
                )
                }
            </div>
            <h3 style={{
              textAlign: 'center',
              fontWeight:'600',
            }}>
              Total Bookings - {todaysTotalCount}
            </h3>
            <Calendar 
              onChange={calendarDate} value={value} style={{color: "#22222"}} />
              <Button variant="contained" style={{
                marginTop:15
              }} onClick={doBookingThisDateClose}>Close Booking This Date</Button>
        <Button variant="contained" style={{
                backgroundColor: '#45C500',
                marginTop:15
              }} onClick={doBookingThisDateOpen}>Open Booking This Date</Button>
            </div>
            </span>
            
        </h4>
        
        <div style={{
            margin:25,
            justifyContent:'center',
            alignSelf: 'center'
        }}>
       
        
        <div>
          <h4 style={{
            marginTop: 45,
            color:'#000000',
            marginBottom: 45,
            fontWeight: '800',
            }}>Booking Slot Status</h4>
          <div style={{
            margin:20,
            display: "grid",
            justifyContent: "space-between",
            gridTemplateColumns: "1fr 1fr",

          }}>
          
          <div style={{backgroundColor: "#fff", padding: "10px", margin: "10px", borderRadius: "5px"}}>
          <p style={{ backgroundColor: "#fff", padding: "10px", fontWeight: "800", textAlign: "center"}}>
            Status: 12:00 PM <span style={{color: "#E26868", fontSize: "20px"}}>{tempSessionTwelve}</span>
          </p>
          <div>
          {isLoadingHere ? (
            <p>
              Loading ... 
            </p>
          ) : (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00C53B',
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '12:00 PM', 'opened')}>Open Booking  - 12:00 PM Today</Button>  
              <Button variant="contained" style={{
                marginLeft:10,
                
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '12:00 PM', 'closed')}>Close Booking  - 12:00 PM Today</Button>  
            </div>
          )}
          </div>
          </div>

          <div style={{backgroundColor: "#fff", padding: "10px", margin: "10px", borderRadius: "5px"}}>
          <p style={{ backgroundColor: "#fff", padding: "10px", fontWeight: "800", textAlign: "center"}}>
          Status: 1:30 PM <span style={{color: "#E26868", fontSize: "20px"}}>{tempSessionOne}</span>
          </p>
          <div>
          {isLoadingHere ? (
            <p>
              Loading ... 
            </p>
          ) : (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00C53B',
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '1:30 PM', 'opened')}>Open Booking  - 1:30 PM Today</Button>  
              <Button variant="contained" style={{
                marginLeft:10,
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '1:30 PM', 'closed')}>Close Booking  - 1:30 PM Today</Button>  
            </div>
          )}
          </div>
          </div>
          
          <div style={{backgroundColor: "#fff", padding: "10px", margin: "10px", borderRadius: "5px"}}>
          <p style={{ backgroundColor: "#fff", padding: "10px", fontWeight: "800", textAlign: "center"}}>
          Status: 2:00 PM <span style={{color: "#E26868", fontSize: "20px"}}> {tempSessionTwo}</span>
          </p>
          <div>
          {isLoadingHere ? (
            <p>
              Loading ... 
            </p>
          ) : (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
              <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00C53B',
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '2:00 PM', 'opened')}>Open Booking  - 2:00 PM Today</Button>  
              <Button variant="contained" style={{
                marginLeft:10,
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, '2:00 PM', 'closed')}>Close Booking  - 2:00 PM Today</Button>  
            </div>
          )}
          </div>
          </div>
          
          <div style={{backgroundColor: "#E8C4C4", padding: "10px", margin: "10px", borderRadius: "5px"}}>
          <p style={{ backgroundColor: "#E8C4C4", padding: "10px", fontWeight: "800", textAlign: "center"}}>
          Status: Lunch<span style={{color: "#E26868", fontSize: "20px"}}> {tempLunch}</span>
          </p>
          <div>
          {isLoadingHere ? (
            <p>
              Loading ... 
            </p>
          ) : (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00C53B',
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, 'lunch', 'opened')}>Open Booking  - Lunch Today</Button>  
            <Button variant="contained" style={{
                marginLeft:10,
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, 'lunch', 'closed')}>Close Booking  - Lunch Today</Button>  
            </div>
          )}
          </div>
          </div>
          
          <div style={{backgroundColor: "#E8C4C4", padding: "10px", margin: "10px", borderRadius: "5px"}}>
          <p style={{ backgroundColor: "#E8C4C4", padding: "10px", fontWeight: "800", textAlign: "center"}}>
          Status: Dinner <span style={{color: "#E26868", fontSize: "20px"}}> {tempDinner}</span>
          </p>
          <div>
          {isLoadingHere ? (
            <p>
              Loading ... 
            </p>
          ) : (
            <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <Button variant="contained" style={{
                marginLeft:10,
                backgroundColor: '#00C53B',
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, 'dinner', 'opened')}>Open Booking  - Dinner Today</Button>  
            <Button variant="contained" style={{
                marginLeft:10,
                marginTop:15
              }} onClick={(e) => doBookingThisDateCloseTodaySession(e, 'dinner', 'closed')}>Close Booking  - Dinner Today</Button>
            </div>
          )}
          </div>
          </div>
          
          </div>
          
        
        </div>
        
        
        </div>
        <div>
        <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <div >
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
            Incoming Bookings 
        </h4>
           <div>
                {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'New')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={res[1].session != 'Lunch' ? {
                            backgroundColor:'#BAFF9F',
                            margin:15,
                            marginBottom:15
                          } : {
                            backgroundColor:'#DAFF82',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom
                          style={{
                            fontWeight:'600',
                            fontSize:18
                          }}
                          >
                            Session - {res[1].session}
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          {
                            console.log("Incoming Reservations - ", res)
                          }
                          
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} onClick={(e) => resMoveToTodayAccepted(e, res[1])} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} onClick={(e) => resMoveToHold(e, res[1])} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }}  size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                              
                              <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} onClick={(e) => resBookingCancel(e, res[1])} size="small">Call</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
           </div>
             </div>
        </Grid>
        <Grid item xs={3}>
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
            Accepted Bookings
        </h4>
          <div>
                {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Accept')
                    return(
                        <Card  key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#BAFF9F',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800',
                            color:'#000000'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} onClick={(e) => resMoveToTodayProcess(e, res[1])} size="small">Booking To Process</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} onClick={(e) => resMoveBackToNew(e, res[1])} size="small">Back to New</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
           </div>
        </Grid>
        <Grid item xs={3}>
          <div>
          <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
            On Process Bookings
        </h4>
          <div>
                {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Process')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#BAFF9F',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                        <FormControl fullWidth>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small" onClick={(e) => resMoveToTodayDone(e, res[1])}>Done</Button>
                          </FormControl>
                          {/* <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button> */}
                          {/* <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button> */}
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} onClick={(e) => resMoveBackToAccept(e, res[1])} size="small">Back to Accept</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
           </div>
            </div>
        </Grid>
        <Grid item xs={3}>
          <div>
          <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
            Done Bookings
        </h4>
          <div>
                {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Done')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#BAFF9F',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small" onClick={(e) => resMoveBackToProcess(e, res[1])}>Back to Process</Button>
                          {/* <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button> */}
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} onClick={(e) => resBookingToComplete(e, res[1])} size="small">Complete</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
           </div>
            </div>
        </Grid>
        </Grid>
        </Box>    
        </div>  
        <div>
        <Grid container spacing={2}>
        <Grid item xs={3}>
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
         Bookings Cancelled
        </h4>
        <div>
        {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Canceled')
                    return(
                        <Card sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#BAFF9F',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small" onClick={(e) => resMoveBackToNew(e, res[1])}>Back To Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small" onClick={(e) => resMoveToHold(e, res[1])}>Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small" onClick={(e) => resMoveToRejected(e, res[1])}>Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} size="small">Called</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
        </div>          
        </Grid>
        <Grid item xs={3}>
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
         Bookings Completed
        </h4>
        <div>
        {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Complete')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#FF8181',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#FF0C34' }} onClick={(e) => resBookingToCompletedDone(e, res[1])} size="small">Booking Complete</Button>
                          {/* <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button> */}
                          {/* <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button> */}
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} size="small">Called</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
        </div>      
        </Grid>
        <Grid item xs={3}>
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
         Bookings on Hold
        </h4>
        <div>
        {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Hold')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#FF8181',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small" onClick={(e) => resMoveBackToAccept(e, res[1])}>Back To Accept</Button>
                          {/* <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button> */}
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small" onClick={(e) => resMoveBackToAccept(e, res[1])}>Delete</Button>
                        </CardActions>
                        <p style={{
                                fontSize:17,  
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} size="small">Called</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
        </div>      
        </Grid>
        <Grid item xs={3}>
        <h4 style={{
            textAlign:'center',
            color: '#000',
            fontWeight: '600'
        }}>
         Bookings on Rejected
        </h4>
        <div>
        {getAllReservations && getAllReservations.map((res, index) => {
                    if(res[1].status === 'Rejected')
                    return(
                        <Card key={index} sx={{ minWidth: 275 }} style={{
                            backgroundColor:'#FF8181',
                            margin:15,
                            marginBottom:15
                          }}>
                        <CardContent>
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                            New User
                          </Typography>
                          <Typography variant="h5" component="div">
                            {
                                res[1].name
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            {
                                res[1].date
                            }
                          </Typography>
                          <Typography sx={{ mb: 1.5 }} color="text.secondary">
                          Members <span style={{
                            fontStyle:'normal',
                            fontWeight:'800'
                          }}>{
                                 res[1].no
                            }</span>
                          </Typography>
                          <Typography variant="body2">
                            {res[1].name} is booking Session: {res[1].session} on Date: {res[1].date}
                            <br />
                          </Typography>
                        </CardContent>
                        <p style={{
                                fontSize:17,
                                fontWeight:'700',
                                marginLeft:15
                              }}>
                                {
                                  res[1].lunchSlot
                                } 🌞
                              </p>
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <p
                              style={{
                                fontSize:17,
                                fontWeight:'700'
                              }}
                              >
                               📞 {
                                  res[1].phone
                                }
                              </p>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} size="small">Called</Button>
                            </FormControl>
                        </CardActions>
                      </Card>
                    )
                })
                }
        </div>      
        </Grid>
        </Grid>
        </div>
        <div>
                <h3 style={{
                    marginTop:15,
                    marginLeft:15
                }}>
                    Enquery
                </h3>
        
        </div> 
            {getAllBookings && Object.entries(getAllBookings).map((book, index) => {
                return(
                    <div key={index}>
                        <p>
                            {
                                book[1].name
                            }
                        </p>
                     </div>   
                )
            })

            }
    </div>
  )
}

export default AdminBookings