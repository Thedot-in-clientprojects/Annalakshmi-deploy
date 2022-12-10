import React, { useState } from 'react';
import {
    MDBContainer,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarToggler,
    MDBIcon,
    MDBNavbarNav,
    MDBNavbarItem,
    MDBNavbarLink,
    MDBBtn,
    MDBDropdown,
    MDBDropdownToggle,
    MDBDropdownMenu,
    MDBDropdownItem,
    MDBCollapse,
  } from 'mdb-react-ui-kit';


function Navbar() {
    
    const [showBasic, setShowBasic] = useState(false);

  return (
    <MDBNavbar expand='lg' light bgColor='light' sticky>
    <MDBContainer fluid style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
      
      <MDBNavbarBrand href='#'>
        <img src="img/annalogo.png" style={{width: "120px"}} /> <span className="gilroyEB" style={{marginTop: "13px", marginLeft: "5px", color: "#9B1915"}}>ADMIN</span>
      </MDBNavbarBrand>
     
    </MDBContainer>
  </MDBNavbar>
  )
}

export default Navbar