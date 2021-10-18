import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import UseAuth from '../../hooks/UseAuth';

const ThridHeader = () => {
    const {user}=UseAuth()
    return (
        <div>
            <div className="thrid-Header">
    <div className="containor">
    <div className='thied-header-all-content'>
<div className='main-header-list'>

<NavLink to="/home"activeStyle={{fontWeight: "bold",color: "#e01212"}}>home</NavLink>
<NavLink className='shop-nav' to="/shop"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Shop <FontAwesomeIcon icon={faSortDown} />

<span>Hot</span>
</NavLink>
<NavLink className='blog-nav' to="/blog"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Blog  <FontAwesomeIcon icon={faSortDown} /> <span>new</span></NavLink>
<NavLink to="/pages"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Pages</NavLink>
<NavLink to="/about"activeStyle={{fontWeight: "bold",color: "#e01212"}}>About Us</NavLink>
<NavLink to="/contact"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Contact Us</NavLink>
<NavLink to="/vendor"activeStyle={{fontWeight: "bold",color: "#e01212"}}>Vendor Zone</NavLink>
<NavLink className='only-mobile-v' to="/myaccount"activeStyle={{fontWeight: "bold",color: "#e01212"}}>my account</NavLink>
<NavLink className='only-mobile-v' to="/links"activeStyle={{fontWeight: "bold",color: "#e01212"}}>social links</NavLink>
<NavLink className='only-mobile-v' to="/others"activeStyle={{fontWeight: "bold",color: "#e01212"}}>others links</NavLink>
</div>

<div className='third-right-content'>
<div className='userName'>
{
    user.email? <div>{!user.displayName?<p>{user.email}</p>:<p>{user.displayName}</p>}</div>: <div></div>
}
</div>
<div><img  alt=''src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/30/000000/external-headphones-internet-technology-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/></div>
   <div className='third-right-content-detiles'><p>Hotline <br /><h6>706-676-8237</h6></p></div>
<div><img className='third-right-content2' alt=''src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/30/000000/external-headphones-internet-technology-vitaliy-gorbachev-flat-vitaly-gorbachev.png"/></div>
  
</div>


</div>
    </div>
</div>

        </div>
    );
};

export default ThridHeader;