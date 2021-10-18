import React from 'react';
import { Link ,useLocation,useHistory} from 'react-router-dom';
import UseAuth from '../../hooks/UseAuth';
import './LoginOrRegister.css'
const LoginOrRegister = () => {
  
 const {googleLoginFunction,formSubmitFunction,error,emailfunction,passwordFunction,updateName,
  checkBoxFunction,
  isLoged,
 
}=UseAuth()

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
     
<section class="Appointment-section">
<div class="Appointment-section-container">
    <h1 class="Appointment-title">
        <span>a</span>
        <span>p</span>
        <span>p</span>
        <span>o</span>
        <span>i</span>
        <span>n</span>
        <span>t</span>
        <span>m</span>
        <span>e</span>
        <span>n</span>
        <span>t</span>
      <br/>
      <span>n</span>
      <span>o</span>
      <span>w</span>


      </h1>
    
<div class="Appointment-section-all-content">
<div class="wow slideInLeft  left-content-img" >
    {/* <img src="https://i.ibb.co/kxv2Cvd/farhan.jpg" alt=""/> */}
</div>

<div class="right-content-form">
    <form onSubmit={(event)=>formSubmitFunction(event)}>
      
      <div class="all-baje-icon">
        <img class="iconbaje" src="https://i.ibb.co/61wgCR1/icon3.jpg" alt=""/>
        <img class="iconbaje add" src="https://i.ibb.co/61wgCR1/icon3.jpg" alt=""/>
      </div>

        <div class="form-title">
            
<span>i</span>
<span>n</span>
<span>t</span>
<span>e</span>
<span>r</span>
<span>v</span>
<span>i</span>
<span>e</span>
<span>w</span>
<span>e</span>
<span>r</span>
<br/>
<span>d</span>
<span>e</span>
<span>t</span>
<span>a</span>
<span>i</span>
<span>l</span>
<span>s</span>
<hr/>
</div>

{/* ============================================================= */}

{!isLoged&&<div>
<p>fullname</p>
<input onBlur={(e)=>updateName(e)} type="name" name="name" placeholder="enter your name" required/>
</div>}
<p> email</p>
<input onBlur={(event)=>emailfunction(event)} type="email" name="email" placeholder="enter your email"required/>

<p>password</p>
<input onBlur={(event)=>passwordFunction(event)} type="password" name="phone" placeholder="enter your password"required/>

<input onClick={(event)=>checkBoxFunction(event)} type="checkbox"  />
<label className='check' htmlFor="checkbox">already register?</label><br />

<button  className='mt-3 btn btn-warning'>{isLoged?`login`:`register`}</button>
<div>-----------------  or ---------------------</div>
{/* <p className='text-danger'>{error}</p> */}
<button onClick={hendleGoolgeSingIn} className='btn btn-outline-primary'>google log in</button><br />





{/* ======================================================================= */}



<div class="all-baje-icon nambar2">
    <img class="iconbaje" src="https://i.ibb.co/mGMgb0D/icon2.jpg" alt=""/>
    <img class="iconbaje add" src="https://i.ibb.co/mGMgb0D/icon2.jpg" alt=""/>
  </div>


</form>

</div>

</div>
</div>
</section>
    );
};

export default LoginOrRegister;