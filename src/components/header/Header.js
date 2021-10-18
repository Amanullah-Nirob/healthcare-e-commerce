import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import FirstHeader from './FirstHeader';
import './Header.css'
import SecondHeader from './SecondHeader';

import ThridHeader from './ThridHeader';


const Header = () => {
   
    return (
<div style={{backgroundColor:'#fff'}}>
    
<FirstHeader></FirstHeader>
<SecondHeader>
</SecondHeader>
<ThridHeader></ThridHeader>
</div>
);




}



export default Header;