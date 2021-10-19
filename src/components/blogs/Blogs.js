import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Blog from './Blog';
import './blog.css'
const Blogs = () => {

  const [items,setItems]=useState([])

useEffect(()=>{
    fetch(`Data/Data3.json`)
    .then(response=>response.json())
    .then(data=>setItems(data))
},[])

    return (
        <div>
               <div className='blog-background'>
                    <div style={{textAlign:'center'}}>
                     <h1 style={{color:'white'}}>About</h1>
                    <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "gold"}}><button className='btn'>back</button></NavLink>
                    </div>
                    </div>
            <div className="container">
                <div className='blog-text'>
                    <h2>our best doctors</h2>
                    <p>The doctors and nurses and aides were super duper helpful. I really really appreciate all your kindness and  your kindness and good care you have provide me good care you have provide me with. Thank you so much!</p>
                </div>
                <div className="row">
                    {
                        items.map((x)=><Blog item={x}/>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Blogs;