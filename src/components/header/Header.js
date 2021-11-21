import Button from '@restart/ui/esm/Button';
import React, { useEffect, useState } from 'react';
import { Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import FirstHeader from './FirstHeader';
import './Header.css'
import SecondHeader from './SecondHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import ThridHeader from './ThridHeader';
import UseAuth from '../../hooks/UseAuth';



const Header = () => {
  const {user}=UseAuth()
    return (
<div className='main-header-list' style={{backgroundColor:'#ffffff'}}>
    
<FirstHeader></FirstHeader>
<SecondHeader>
</SecondHeader>
{/* <ThridHeader></ThridHeader> */}


<Navbar  expand="lg">
  <Container>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="my-2 me-auto my-lg-0"
   
        navbarScroll
      >
    <NavLink to="/home"activeStyle={{fontWeight: "bold",color: "#e01212"}}>home</NavLink>
<NavLink className='shop-nav' to="/shop"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Shop <FontAwesomeIcon icon={faSortDown} />

<span>Hot</span>
</NavLink>

<NavLink className='blog-nav' to="/blog"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Doctor  <FontAwesomeIcon icon={faSortDown} /> <span>new</span></NavLink>
<NavLink to="/about"activeStyle={{fontWeight: "bold",color: "#e01212"}}>About Us</NavLink>
<NavLink to="/contact"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Contact Us</NavLink>
<NavLink className='only-mobile-v' to="/myaccount"activeStyle={{fontWeight: "bold",color: "#e01212"}}>my account</NavLink>
<NavLink className='only-mobile-v' to="/links"activeStyle={{fontWeight: "bold",color: "#e01212"}}>social links</NavLink>
<NavLink className='only-mobile-v' to="/others"activeStyle={{fontWeight: "bold",color: "#e01212"}}>others links</NavLink>
  
       
      </Nav>
  <div className='third-right-content'>

<div className='userName'>
{   !user.displayName?<p>{user.email}</p>:<p>{user.displayName}</p> }
</div>



<div><img  alt=''src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/30/000000/external-headphones-internet-technology-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/></div>
  <div className='third-right-content-detiles'><p>Hotline <br /><h6>706-676-8237</h6></p></div>
<div><img className='third-right-content2' alt=''src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/30/000000/external-headphones-internet-technology-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/></div>
 
</div>
    </Navbar.Collapse>
  </Container>
</Navbar>

</div>
);




}



export default Header;