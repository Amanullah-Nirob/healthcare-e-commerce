import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './LoginOrRegister.css'
const LoginOrRegister = () => {
  
 const {googleLoginFunction,formSubmitFunction,error,emailfunction,passwordFunction,updateName,user}=UseAuth()

const location=useLocation()
const history=useHistory()
const reDireact_uri=location.state?.from || '/home'
const hendleGoolgeSingIn=()=>{
  googleLoginFunction()
  .then((result) => {
    history.push(reDireact_uri)
})
}





return (

  <div className='loginditile'>
  <div className='articles'>
<div className='containor'>
<div className='loginditile-article-content-text'>
<h1 className='text-uppercase'>registation or login form  <br /> ditailes hear. read now</h1>
<p>Lorem ipsum dolor sit amet, consectetuer adipiscing <span className='extra-text'>elit. Aenean</span> <br /> commodo ligula eget dolor. Aenean massa.</p>
<Link to='/home'>back home</Link>
</div>

</div>
</div>
<div class="Appointment-section">



<div class="Appointment-section-container">

    
<div class="Appointment-section-all-content">
  
<div class="wow slideInLeft  left-content-img" >
  <div>
    <h2>GET CLOSER</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
  </div>
  
  
  <div className='moreInformations'>
  <div className='informations'>
    <div className='single-item'>
    <div className="icon">
    <i class="fas fa-map"></i>
    </div>
    <div>
      <h5>LOCATION</h5>
      <p>Jl. Pantai Kuta No.34,<br />
       Badung, bangladesh</p>
    </div>
    </div>
    <div className='single-item nember2'>
    <div className="icon">
    <i class="fas fa-location-arrow"></i>
    </div>
    <div>
      <h5>email address</h5>
      <p>khannirub55@gmail.com</p>
    </div>
    </div>
  </div>
  <div className='informations numbers-2'>
    <div className='single-item'>
    <div className="icon">
    <i class="fas fa-phone-volume"></i>
    </div>
    <div>
      <h5>phone</h5>
      <p>+8801725502623</p>
    </div>
    </div>
    <div className='single-item nember2'>
    <div className="icon">
    <i class="fas fa-door-open"></i>
    </div>
    <div>
      <h5>OPEN HOUR</h5>
      <p>10.00 am - 09.00 pm</p>
    </div>
    </div>
  </div>
 
  </div>
<div className="owner">
    
 <div className='row'>
  <div className="col-lg-6 col-md-6 col-12">
  <img src="https://i.ibb.co/kxv2Cvd/farhan.jpg" alt=""/>
  </div>
  <div className="col-lg-6 col-md-6 col-12">
<h4>our owner</h4>
<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates eius explicabo unde totam nemo minus quas enim odio debitis cupiditate nobis quod possimus facere nam ex et accusantium tenetur earum, facilis reiciendis, sequi optio. Minima, dolores deleniti delectus ab autem quae, neque deserunt incidunt a officia corrupti explicabo inventore repellendus!</p>
  </div>
 </div>
</div>
  
</div>






<div class="right-content-form">
    <form onSubmit={(event)=>formSubmitFunction(event)}>
      
    
    {user.email&&<div className='alert'>
  <p>registation sucsessfull</p>
</div>}

<div class="form-title">
<div>
<span>R</span><span>e</span><span>g</span><span>i</span><span>s</span><span>t</span><span>e</span><span>t</span><span>i</span><span>o</span><span>n</span>
<br/><span>d</span><span>e</span><span>t</span><span>a</span><span>i</span><span>l</span><span>s</span><hr/>
</div>

</div>



{/* ============================================================= */}

<div>
<p>fullname</p>
<input onBlur={(e)=>updateName(e)} type="name" name="name" placeholder="enter your name" required/>
</div>


<p> email</p>
<input onBlur={(event)=>emailfunction(event)} type="email" name="email" placeholder="enter your email"required/>

<p>password</p>
<input onBlur={(event)=>passwordFunction(event)} type="password" name="phone" placeholder="enter your password"required/>

<div className='text-center checkbox'>
<Link to='/simplelogin'>have you account?</Link>

</div>
<button  className='mt-3 registerbtn'>registater</button>
<div className='loginwith'>------------------- sing in with  ------------------</div>
{/* <p className='text-danger'>{error}</p> */}
<button onClick={hendleGoolgeSingIn} className='btn googlebtn'><img alt=''src="https://img.icons8.com/fluency/50/000000/google-logo.png"/></button><br />





{/* ======================================================================= */}






</form>

</div>

</div>
</div>
</div>
</div>
     

    );
};

export default LoginOrRegister;