import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import './ServiceDetiles.css'
const ServiceDitles = () => {
   let {serviceId}=useParams()
   serviceId=parseInt(serviceId)

    const [ditailes,setDitailes]=useState([])
   useEffect(()=>{
       fetch(`/Data/Data2.json`)
       .then(response=>response.json())
       .then(data=>setDitailes(data))
   },[])

  const singlrservice=ditailes.find((x)=>x.id===serviceId)


    return (
       
        <div className='articleDitails'>
        <div className='articles'>
     <div className='containor'>
     <div className='article-content-text'>
      <h1 className=''>Services card <span className='text-warning'>{singlrservice?.id}</span> more  information <br /> ditailes hear. read now</h1>
      <p>Lorem ipsum dolor sit amet, consectetuer adipiscing <span className='extra-text'>elit. Aenean</span> <br /> commodo ligula eget dolor. Aenean massa.</p>
      <Link to='/home'>back home</Link>
      </div>
      
   </div>
   </div>
   
   <div className="containor">
       <div className="pt-5 articledetils-all-content">
           <div className="row">
               <div className=" col-lg-8 col-12">
          <div className='right-img1'><img src={singlrservice?.img} alt="" />
          </div>
          <div className='right-textp'>
              <h3>{singlrservice?.title}</h3>
          <p><span className='text-danger'>{singlrservice?.dic}</span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit.</p> 
          </div>
          
          <div className='first1all-content'>
              <h5>CONTENT WRITER FOR WEBSITE</h5>
              <div className="row abram">
               <div className="col-lg-6 col-md-12 col-12">
                   <img src="https://image.freepik.com/free-photo/team-young-specialist-doctors-standing-corridor-hospital_1303-21199.jpg" alt="" />
               </div>
               <div className="col-lg-6 col-md-12 col-12">
                   <img src="https://www.bapiotrainingacademy.com/wp-content/uploads/2020/11/young-female-doctor-posing-in-the-corridor-of-the-hospital-scaled-1024x682.jpg" alt="" />
               </div>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
              </div>
          </div>
          
          <div className='row checks-icon'>
<div className="col-lg-6 col-md-12 col-12">
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Nulla at metus ultricies, placerat augue</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Curabitur mollis ex vestibulum</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus auctor</h6>
</div>
<div className="col-lg-6 col-md-12 col-12">
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Nulla at metus ultricies, placerat augue</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Curabitur mollis ex vestibulum</h6>
<h6><i class="fas fa-check text-warning me-1"></i> Quisque aliquet nibh sit amet lectus auctor</h6>
</div>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
</div>

<div>
<div className="row right-linksArticle">
  <div className="col-lg-6 col-md-6 col-12 ">
     <div className='d-flex fuck1'>
     <h5 className='me-2 text-dark'>Tags : </h5>
      <p className=' text-warning'>TREATMENT, SPECIALIST</p>
     </div>
  </div>
  <div className="col-lg-6 col-md-6 col-12">
<div className='fuck2'>
<h5 className='text-dark'>Share This :</h5>
<div className="d-flex sochial-icon">
<p><i class="fab fa-facebook-f"></i></p>
<p><i class="fab fa-twitter"></i></p>
<p><i class="fab fa-linkedin-in"></i></p>
</div>
</div>
  </div>
</div>
</div>
</div>

               <div className="col-lg-4 col-12">
                  <div className="first-lft-stap">
                  <h5 className='left-art-title'>FEATURED NEWS</h5>
                  <div className='futher-txt'>
                      <h5>LOOK HOW WE MAKE  CARCINOMA SPECIALIST WITH THIS TECHNIQUE</h5>
                      <div className='d-flex'>
                     <small> <i class="fas fa-clock"></i></small>
                      <small>August 3, 2021</small>
                      </div>
                  </div>
                  <div className='futher-txt'>
                      <h5>LOOK HOW WE MAKE HEARD SPECIALIST WITH THIS TECHNIQUE</h5>
                      <div className='d-flex'>
                     <small> <i class="fas fa-clock"></i></small>
                      <small>August 3, 2021</small>
                      </div>
                  </div>
                  <div className='futher-txt'>
                      <h5>LOOK HOW WE MAKE SEXOLOGIST WITH THIS TECHNIQUE</h5>
                      <div className='d-flex'>
                     <small> <i class="fas fa-clock"></i></small>
                      <small>August 3, 2021</small>
                      </div>
                  </div>
                  </div>
                   
                   <div className='catagory'>
                       <h4 className='title2'>CATEGORY</h4>
                       <div className='title3'>
                           <h5>NEWS</h5>
                           <h5>FUTURE</h5>
                           <h5>TREATMENT</h5>
                       </div>
                   </div>
                   <div className='titlimg'>
                       <div className="titleoverley"></div>
                       <img width='100%' src="https://templatekit.jegtheme.com/burgry/wp-content/uploads/sites/132/2021/08/woman-making-order-in-cafe.jpg" alt="" />
                   <div className="titlimftext">
                       <h5>GET 20% DISCOUNT FOR ONLINE PAYMENT</h5>
                       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. .</p>
                       <p className='text-warning text-capitalize'>get started</p>
                   </div>
                   
                   </div>
                   
                   
               </div>
           </div>
       </div>
       
   </div>
   
   
   
  </div>

    );
};

export default ServiceDitles;