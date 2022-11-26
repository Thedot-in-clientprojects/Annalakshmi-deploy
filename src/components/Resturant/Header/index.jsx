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


const Fade = React.forwardRef(function Fade(props, ref) {
  const { in: open, children, onEnter, onExited, ...other } = props;
  const style = useSpring({
    from: { opacity: 0 },
    to: { opacity: open ? 1 : 0 },
    onStart: () => {
      if (open && onEnter) {
        onEnter();
      }
    },
    onRest: () => {
      if (!open && onExited) {
        onExited();
      }
    },
  });

  return (
    <animated.div ref={ref} style={style} {...other}>
      {children}
    </animated.div>
  );
});

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};



function Header() {
  const [open, setOpen] = React.useState(false);
  const [openUserData, setOpenUserData] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleOpenUserData = () => setOpenUserData(true);
  const handleClose = () => setOpen(false);
  const handleCloseUserData = () => setOpen(false);

  const [date, setdate] = useState(dayjs(new Date()))
  const handleChange = (newValue) => {
    setdate(newValue);
  };
  
  
  const [noMembers, setnoMembers] = useState(2);
  const handleChangeHere = (event) => {
    setnoMembers(event.target.value);
  };

  const formGetUserPhone = (e) => {
    e.preventDefault();
    console.log("Form Get User Phone");
    handleOpenUserData()
    // handleClose()
    // setOpen(false);
  }

  const [name, setname] = useState('');
  const [phone, setphone] = useState('');

  
  const [sessionHere, setsessionHere] = useState('');
  

  //**   Lunch Section Slot

  const [lunchSessionStatus, setlunchSessionStatus] = useState(false);

  // **


  const selectSessionHere = (e, session) => {
    setsessionHere(session);
    console.log('SESSION -> ', session);
    if(session === 'Lunch'){
      console.log('***LUNCH***')
        setlunchSessionStatus(!lunchSessionStatus);
    }
    else if(session === 'Dinner'){
        setlunchSessionStatus(false);
    }
  }


  const submitReservation = (e) => {
    e.preventDefault();
    const id = uuidv4();
    console.log('Date : ', date.$d);
    console.log('Date : ', dayjs(date.$d).format('DD/MM/YYYY'));
    // console.log('date -> ',  moment(date.$d).format('MMMM Do YYYY, h:mm:ss a'))
    const db = getDatabase();
    if(true){  
    set(ref(db, `reservation/${id}`), {
        userId: id,
        name: name,
        no: noMembers,
        phone: phone,
        date: dayjs(date.$d).format('DD/MM/YYYY'),
        session: sessionHere,
        status: 'New'
      }).then(res => {
        setname('')
        setphone('')
        setdate('')
        handleCloseUserData()
        window.location.reload()

      })
  }else{
  } 
}

const [currentTime, setcurrentTime] = useState(new Date().getHours());
const [currentDate, setcurrentDate] = useState(new Date().getDate());
const [currentMonth, setcurrentMonth] = useState(new Date().getMonth());
const [currentYear, setcurrentYear] = useState(new Date().getFullYear())



// ** Booking Logic *************************


const [sessionStatus, setsessionStatus] = useState('');

useEffect(() => {
  setInterval(() => {
    setcurrentDate(new Date().getDate())
    setcurrentTime(new Date().getHours())
    console.log("Hours - ", currentTime)
  }, 1000);
}, [])






// ******************************************



// *? *****************************************************




const [getAllReservations, setgetAllReservations] = useState([]);
const [todaysTotalCount, settodaysTotalCount] = useState(0);
const getAllReservationsHere = () => {
    const db = getDatabase();
    let reservation_per_date = [];
    const reservation = ref(db, 'reservation/');
    let formatDate = dayjs(new Date()).format('DD/MM/YYYY');
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
      console.log("Reservation Status - ", reservation_counter);
      setgetAllReservations(reservation_per_date)
      settodaysTotalCount(reservation_counter)
}


useEffect(() => {
  getAllReservationsHere()
}, [])







// *? ******************************************************

  return (
    <header style={{paddingTop: 80}}   data-scroll-index="0">
          <div className='header-main'>
            <Container>
              <img className='header-main-img' src="/img/headerimg.png" />
              <h1 className='header-main-title'>A UNIQUE DINING <br /> CONCEPT</h1>
             
            
                <button className="header-main-btn" onClick={handleOpen}>Reservation</button>
                <Modal
                  aria-labelledby="spring-modal-title"
                  aria-describedby="spring-modal-description"
                  open={open}
                  onClose={handleClose}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style} style={{borderRadius: 15,}}>
                      <div>
                        <p style={{fontWeight: "bold", marginBottom: 10}}>Select date and time</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                          <Stack spacing={3}>
                            {/* <DateTimePicker
                              value={date}
                              onChange={handleChange}
                              renderInput={(params) => <TextField {...params} />}
                            /> */}
                            {
                              todaysTotalCount > 3 ? (
                                <p>
                                  Reservation Available
                                </p>
                              ) : (
                                <p>
                                  Booking Full
                                </p>
                              )
                            }
                            <MobileDatePicker
                          label="Date mobile"
                          inputFormat="MM/DD/YYYY"
                          value={date}
                          onChange={handleChange}
                          minDate={new Date(currentYear, currentMonth, currentDate + 1)}
                          maxDate={new Date(currentYear, currentMonth, currentDate + 4)}
                          renderInput={(params) => <TextField {...params} />}
                        />
                          </Stack>

                        </LocalizationProvider>

                        <p style={{fontWeight: "bold", marginBottom: 10}}>Select the Session</p>
                            
                        <div>
                          {currentTime <= 15 ? (
                                <>
                                <Chip icon={<LightModeIcon />} 
                                // color={sessionHere === 'Lunch' ?  "success" : ""} 
                                label="Lunch" variant="outlined" style={{
                                  marginRight:15,
                                }}
                            onClick={(e) => selectSessionHere(e, 'Lunch')}

                                  />
                                  <Chip icon={<NightsStayIcon />} label="Dinner" variant="outlined" 
                            // color={sessionHere === 'Dinner' ?  "success" : ""}
                            onClick={(e) => selectSessionHere(e, 'Dinner')}
                            />
                            </>
                          )  :  (
                            <Chip icon={<NightsStayIcon />} label="Dinner" variant="outlined" 
                            onClick={(e) => selectSessionHere(e, 'Dinner')}
                            />
                          )
                          }

                          {lunchSessionStatus ? (
                            <div style={{
                              marginTop:15
                            }}>
                                <Chip icon={<AccessTimeIcon />} label="12:30 PM" variant="outlined" 
                            
                            />
                            <Chip icon={<AccessTimeIcon />} label="1:30 PM" variant="outlined" 
                            style={{
                              marginLeft:10
                            }}
                            
                            />
                            <Chip icon={<AccessTimeIcon />} label="2:30 PM" variant="outlined" 
                            style={{
                              marginLeft:10
                            }}
                            />
                                
                            </div>
                          ) : (
                            <div>
                                
                            </div>
                          )

                          }
                          


                        
                          
                        </div>


                        <p style={{fontWeight: "bold", marginBottom: 10, marginTop:25}}>Select no. members</p>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">Age</InputLabel>
                          <Select
                            labelId="demo-simple-select-label"
                            id="demo-simple-select"
                            value={noMembers}
                            label="Members"
                            onChange={handleChangeHere}
                          >
                            <MenuItem value={1}>1</MenuItem>
                            <MenuItem value={2}>2</MenuItem>
                            <MenuItem value={3}>3</MenuItem>
                            <MenuItem value={4}>4</MenuItem>
                            <MenuItem value={5}>5</MenuItem>
                            <MenuItem value={6}>6</MenuItem>
                            <MenuItem value={7}>7</MenuItem>
                            <MenuItem value={8}>8</MenuItem>
                            <MenuItem value={9}>9</MenuItem>
                            <MenuItem value={10}>10</MenuItem>
                          </Select>
                        </FormControl>
                      </div>
                      {/* <Button type="success" onClick={() => {}}>Submit</Button> */}
                      <div
                      style={{
                        flex:1,
                        justifyContent:'center',
                        alignItems:'center'
                      }}
                      >
                      <a onClick={formGetUserPhone} style={{
                       
                        
                      }}>
                        <button style={{
                          padding: "8px 35px",
                          backgroundColor: "#9B1915",
                          color: "#fff",
                          marginTop: "1.5rem",
                          border: "none",
                          borderRadius: "5px"
                        }}>
                        Next
                        </button>
                      </a>
                      </div>
                      </Box>
                  </Fade>

                </Modal>
                <Modal
                  aria-labelledby="spring-modal-title"
                  aria-describedby="spring-modal-description"
                  open={openUserData}
                  onClose={handleCloseUserData}
                  closeAfterTransition
                  BackdropComponent={Backdrop}
                  BackdropProps={{
                    timeout: 500,
                  }}
                >
                  <Fade in={open}>
                    <Box sx={style} style={{borderRadius: 15,}}>
                      <div>
                        <p style={{fontWeight: "bold", marginBottom: 10}}>Enter your Name</p>
                        <div>
                          <FormControl fullWidth>
                        <TextField value={name} onChange={(e) => setname(e.target.value)} id="outlined-basic" label="Enter the Name" variant="outlined" />
                        </FormControl>
                        </div> 
                        <p style={{fontWeight: "bold", marginBottom: 10, marginTop:25}}>Enter your Phone</p>
                        <FormControl fullWidth>
                        <TextField value={phone} onChange={(e) => setphone(e.target.value)} id="outlined-basic" label="Enter the Phone" variant="outlined" />
                        </FormControl>
                      </div>
                      {/* <Button type="success" onClick={() => {}}>Submit</Button> */}
                      <a onClick={(e) => submitReservation(e)}>
                      <button style={{
                          padding: "8px 30px",
                          backgroundColor: "#9B1915",
                          color: "#fff",
                          marginTop: "1.5rem",
                          border: "none",
                          borderRadius: "5px"
                        }}>
                        Reserve
                        </button>
                      </a>

                      </Box>
                  </Fade>

                </Modal>
              
            </Container>
          </div>
    </header>
  )
}

export default Header