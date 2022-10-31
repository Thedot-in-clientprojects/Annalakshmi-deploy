import React, { useState } from 'react';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import {
    MDBTabs,
    MDBTabsItem,
    MDBTabsLink,
    MDBTabsContent,
    MDBTabsPane
  } from 'mdb-react-ui-kit';
import Navbar from '../../components/Admin/Shared/Navbar';
import AdminMenu from './menu';
import AdminBlogs from '../../components/Admin/Modules/Blogs';
import AdminBookings from '../../components/Admin/Modules/Booking';
import GalleryAdmin from '../../components/Admin/Modules/Gallery';
import { dark } from '@mui/material/styles/createPalette';

function AdminComponent() {

    const [basicActive, setBasicActive] = useState('tab1');

    const handleBasicClick = (value) => {
      if (value === basicActive) {
        return;
      }
  
      setBasicActive(value);
    };

  return (
    <>
    <Navbar/>
    <>
    <div style={{padding: "15px", backgroundColor: "#FAE1C2", minHeight: "94vh"}}>
      <MDBTabs fill className='mb-3' >
        <MDBTabsItem >
          <MDBTabsLink  onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'} style={{color: "#971A1F", borderRadius: "10px", fontFamily: "GilroyExtra", fontSize: "15px"}}>
            Menu
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'} style={{color: "#971A1F", borderRadius: "10px", marginLeft: "5px", fontFamily: "GilroyExtra", fontSize: "15px"}}>
            Bookings And Users
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'} style={{color: "#971A1F", borderRadius: "10px", marginLeft: "5px", fontFamily: "GilroyExtra", fontSize: "15px"}}>
            Blogs and Reviews
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'} style={{color: "#971A1F", borderRadius: "10px", marginLeft: "5px", fontFamily: "GilroyExtra", fontSize: "15px"}}>
            Gallery
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'} style={{ backgroundColor:'#FFEEC9', marginLeft:10, marginRight:10,borderRadius:10, minHeight: "80vh" }}><AdminMenu/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><AdminBookings/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'} style={{ backgroundColor:'#FFEEC9', padding: "15px", borderRadius: "10px", minHeight: "80vh" }}><AdminBlogs/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab4'} style={{ backgroundColor:'#FFEEC9', padding: "15px", borderRadius: "10px", minHeight: "80vh" }}><GalleryAdmin/></MDBTabsPane>
      </MDBTabsContent>
      </div>
    </>
    
    </>
  )
}

export default AdminComponent