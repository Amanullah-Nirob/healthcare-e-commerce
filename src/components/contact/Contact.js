import React from 'react';
import { NavLink } from 'react-router-dom';
import './Contact.css'
const Contact = () => {
    return (
        <div>
                 <div className='contsct-background'>
                    <div style={{textAlign:'center'}}>
                     <h1 style={{color:'white'}}>About</h1>
                    <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "gold"}}><button className='btn'>back</button></NavLink>
                    </div>
                    </div>
                    
                    
<div className='contact'>
    <div className="container">
  <div className='contactTitle'><h1>We're always eager to hear from you!</h1>
        <p>You can call us in working time or visit our office. All mails will get the response within 24 <br /> hours. Love to hear from you!</p>
        </div>
        <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
                <div className='itemsingle'>
                    <div><i class="fas fa-map-marker-alt"></i></div>
                    <div>
                        <h5>Address</h5>
                        <p>1800 Abbot Kinney Blvd. Unit D & <br /> E Venice</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className='itemsingle'>
                    <div><i class="fas fa-phone"></i></div>
                    <div>
                        <h5>Contact</h5>
                        <p>Mobile: (+61) - 1990 - 6886 <br />Hotline: 1800 - 1102 <br />Mail: contact@medizin.com</p>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-12 col-12">
                <div className='itemsingle'>
                    <div><i class="far fa-clock"></i></div>
                    <div>
                        <h5>Hour of operation</h5>
                        <p>Monday - Friday: 09:00 - 20:00 <br />Sunday & Saturday: 10:30 - 22:00</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       <div className='container'>
       <iframe title="maps" className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d4337.10499477668!2d90.71182395890216!3d23.923069493134403!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1634591808266!5m2!1sen!2sbd"   allowfullscreen="" loading="lazy"></iframe>
           </div>             


           {/* <!-- contact section start --> */}
<section class="contact"data-aos="fade-up"data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="300">
  <div class="container">

    <div class="row gy-5">
      
      <div class="col-lg-5 col-md-12 col-12">
        <h3> massage will be received within an hour</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum inventore molestiae dolore distinctio sequi et dolorem magni! Voluptatibus, nemo commodi voluptate labore placeat voluptatem ducimus eius doloremque illo sed velit.</p>
  <div className='info'>
    <h6><img alt='' src="https://img.icons8.com/external-itim2101-flat-itim2101/25/000000/external-support-services-contact-and-message-itim2101-flat-itim2101-2.png" ala=''/> Guiding the young generation to success.</h6>
    <h6><img alt='' src="https://img.icons8.com/color/30/000000/microsoft-stream-2019.png"/> Learn to Play, Converse with Confidence.</h6>
    <h6><img  alt=''src="https://img.icons8.com/color/25/000000/translate-text.png"/> maroicja to Play, Converse with Confidence hear.</h6>
    <h6><img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/25/000000/external-online-service-mobile-technology-itim2101-lineal-color-itim2101.png" alt=''/> posgiy to Play, Converse with Confidence now.</h6>
  </div>
  <img width='100%' src="https://www.expatica.com/app/uploads/2018/11/find-a-doctor-abroad-1920x1080.jpg" alt="" />
     </div> 
       <div class="col-lg-7 col-md-12 col-12" id="contact-right-form">
          <form action="" class="form text-muted">
          <div class="row mb-4">
          <div class="col-lg-6 col-md-6 col-12 form-group">
          <label for="name">Your name</label>
          <input type="name" class="form-control"/>
          </div>
          <div class="col-lg-6 col-md-6 col-12 form-group">
          <label for="email">your email</label>
          <input type="email" class="form-control"/>
          </div>
          </div>
          
          <div class="form-group">
            <label for="name">subject</label>
          <input type="name" class="form-control"/>
          </div>
          <div class="form-group my-4">
            <label for="name">massage</label>
          <textarea name="massage" cols="30" rows="10" class="form-control"></textarea>
          </div>
          
          <button class="form-button">get started</button>
          </form>
       
           </div> 
   
    </div>
  </div>
</section>
{/* <!-- contact section end --> */}
                    
        </div>
    );
};

export default Contact;