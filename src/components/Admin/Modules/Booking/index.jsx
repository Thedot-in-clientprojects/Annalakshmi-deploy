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
          reservation_list.push(res)
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
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Process'
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
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Accept'
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
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Accept'
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
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    console.log(res)
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Done'
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
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Process'
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
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'New'
      }).then(res => {
       
      })
}

const resMoveToHold = (e, res) => {
    e.preventDefault();
    const db = getDatabase();

    set(ref(db, `user/reservation/${res[0]}`), {
        userId: res[0],
        name: res[1].name,
        no: res[1].noMembers,
        phone: res[1].phone,
        date: res[1].date,
        session: res[1].session,
        status: 'Hold'
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
        status: 'Rejected'
      }).then(res => {
       
      })
}

const resBookingCancel = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Canceled'
      }).then(res => {
       
      })
}

const resBookingToComplete = (e, res) => {
    e.preventDefault();
    setResReRedner(!resReRender)
    const db = getDatabase();
    const userId = res.userId;
    const name = res.name
    const phone = res.phone
    const no = res.no
    const date = res.date
    const session = res.session
    set(ref(db, `/reservation/${res.userId}`), {
        userId: userId,
        name: name,
        no: no,
        phone: phone,
        date: date,
        session: session,
        status: 'Complete'
      }).then(res => {
       
      })
}


const [value, onChange] = useState(new Date());

const calendarDate = (e) => {
    console.log("Date - ", dayjs(e).format('DD/MM/YYYY'));
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
            <Button variant="contained">Reset All</Button>
            <h3 style={{
              textAlign: 'center',
              fontWeight:'600'
            }}>
              {todaysTotalCount}
            </h3>
            </span>
        </h4>
        <div style={{
            margin:25,
            justifyContent:'center',
            alignSelf: 'center'
        }}>
        <Calendar 
            //  minDate={new Date(currentYear, currentMonth, currentDate + 1)}
        onChange={calendarDate} value={value} />
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
                          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
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
                        <CardActions>
                          {
                            console.log("Incoming Reservations - ", res)
                          }
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} onClick={(e) => resMoveToTodayAccepted(e, res[1])} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} onClick={(e) => resMoveToTodayDone(e, res[1])} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }}  size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
                            <Button variant="contained" style={{ backgroundColor:'#2B1CFF' }} onClick={(e) => resBookingCancel(e, res[1])} size="small">Called</Button>
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
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} onClick={(e) => resMoveToTodayProcess(e, res[1])} size="small">Booking To Process</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small" onClick={(e) => resMoveBackToProcess(e, res[1])}>Back to Process</Button>
                          {/* <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button> */}
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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
                        <CardActions>
                          <Button variant="contained" style={{ backgroundColor:'#009005' }} size="small">Accept</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F8EB00', color:'#000' }} size="small">Hold</Button>
                          <Button variant="contained" style={{ backgroundColor:'#F80000', color:'#FFF' }} size="small">Rejected</Button>
                        </CardActions>
                        <CardActions>
                            <FormControl fullWidth>
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