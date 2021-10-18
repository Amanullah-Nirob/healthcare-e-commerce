import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';

const FirstHeader = () => {
    const {user,logOutFunction}=UseAuth()
    return (
        <div>
            <div className='border'>
<div className='containor first-header'>
    <div className='first-header-list'>
  <div className='sosial-link'>
  <a href="/home"><img alt='' src="https://img.icons8.com/fluency/17/000000/facebook-new.png"/></a>
        <a href="/home"><img alt='' src="https://img.icons8.com/fluency/17/000000/twitter.png"/></a>
         <a href="/home"><img alt='' src="https://img.icons8.com/fluency/17/000000/google-logo.png"/></a>
        <a href="/home"><img alt='' src="https://img.icons8.com/fluency/17/000000/pinterest.png"/></a>
        <a href="/home"><img alt='' src="https://img.icons8.com/fluency/17/000000/instagram-new.png"/></a>
  </div>
    </div>
    
    <div className='header-list2'>
    
            <a href="#">language  <FontAwesomeIcon icon={faSortDown} /></a>
            <a href="#">currency <FontAwesomeIcon icon={faSortDown} /></a>
             {
             user.email?<button onClick={logOutFunction}>log out</button>:
            <Link to='/login'>login/ragister</Link>
             }
       
       
    </div>
</div>
</div>
        </div>
    );
};

export default FirstHeader;