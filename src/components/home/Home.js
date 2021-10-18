import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import DoctorCart from './DoctorCart/DoctorCart';
import './Home.css'
import HomeBottomPartnar from './HomeBottomPartnar';
import HomeService from './HomeService';
import MainHome from './MainHome';
import SingleMadicin from './SingleMadicin';


const   Home = () => {

const [Madicins,setMadicins]=useState([])

const [services,setServices]=useState([])
// data 1===============================
  useEffect(()=>{
  fetch(`Data/Data1.json`)
  .then(response=>response.json())
  .then(data=>setMadicins(data))
  },[])
  // data 2============================
  useEffect(()=>{
  fetch(`Data/Data2.json`)
  .then(response=>response.json())
  .then(data=>setServices(data))
  },[])





    return (
        <div>
<MainHome></MainHome>
<HomeBottomPartnar></HomeBottomPartnar>
<DoctorCart />

<div className='bestsell-area'>
<div className='containor'>
<h3> <span>Best Sell </span> Of The Month</h3>
  <div className="row">
  {
    Madicins.map((x)=><SingleMadicin madicin={x} />)
  }
</div>
</div>

</div>



{/* services area ============================*/}

<div className='servicess'>
  
<div className='containor'>
<h3> <span>our best service </span> Of The Month</h3>
<Row xs={1} md={4} className="g-4">
{
   services.map((y)=><HomeService service={y} />)
 }

</Row>

</div>
</div>

        </div>


    );
};

export default Home;


