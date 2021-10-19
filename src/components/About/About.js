import React from 'react';
import { Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import './About.css'
const About = () => {
    return (
        <div>
        {/* About-background ==================================================================================*/}
                    <div className='About-background'>
                    <div style={{textAlign:'center'}}>
                     <h1 style={{color:'white'}}>About</h1>
                    <NavLink to="/service"activeStyle={{fontWeight: "bold",color: "gold"}}><button className='btn'>back</button></NavLink>
                    </div>
                    </div>
        {/* about discription =================================================================================*/}
                    <div className="about-discription">
                    <Container>
                   <div className="about-discription-all-content">
                       <div className="about-left-content"data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
        {/* about title ========================================================================================*/}
                           <div className='text-center education-title'data-aos="zoom-in" data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                               <h2>
                               <img src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-doctor-hospital-and-medical-justicon-flat-justicon.png" alt=''/>
                                   ADEN 
                                   <img src="https://img.icons8.com/external-justicon-flat-justicon/50/000000/external-doctor-hospital-and-medical-justicon-flat-justicon.png" alt=''/>
                            </h2></div>
        {/* about details ==============================================================*/}
        {/* PRINCIPAL-NAME====================================================================================== */}
                    <div className='PRINCIPAL-NAME'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                        <h2>Joseph White</h2>
                        <h5>president of ADEN Hospital and Pharmacy </h5>
                    </div>
        {/* education============================================================================================ */}
                        <div className='education'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                        <div className='mb-4 row'>
                            <div className="col-lg-6 col-md-12 col-12">
                        <img alt='' width='100%' src="https://static.vecteezy.com/system/resources/thumbnails/000/366/277/small/yces_7r8s_131120.jpg"/>
                        </div>
                        <div className="col-lg-6 col-md-12 col-12">
                            <h3>Hospital</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos dolor cum magnam aut saepe blanditiis hic deserunt qui error at, dolores eligendi aspernatur facere! Quibusdam iusto tempore numquam libero, velit delectus rem ipsum cupiditate sed maiores aut, quidem, laborum fugit.</p>
                        </div>
                        </div>
                        <p>Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed</p>
                        </div>
        {/* catagory =============================================================================================*/}
                              <div>
                                  <div className="row">
                                      <div className="col-lg-6 col-md-12 col-12">
                                      <div className='catgory'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> We Enrich Lives Through Learning.</h6>
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> Guiding the young generation to success.</h6>
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> Learn to Play, Converse with Confidence.</h6>
                                </div>
                                      </div>
                                      <div className="col-lg-6 col-md-12 col-12">
                                      <div className='catgory'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> We Enrich Lives Through Learning.</h6>
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> Guiding the young generation to success.</h6>
                                <h6><img src="https://img.icons8.com/color/30/000000/verified-badge.png" alt=''/> Learn to Play, Converse with Confidence.</h6>
                                </div>
                                      </div>
                                  </div>
                              </div>
                              
                          <div className='best-doctor'>
                              <div className="row">
                                  <div className="col-lg-6 col-md-12 col-12">
                                      <img width='100%'  src="https://jewishbusinessnews.com/wp-content/uploads/2020/02/Doctor-Medical-health-hospital-AdobeStock_316761139.jpg" alt="" />
                                  </div>
                                  <div className="col-lg-6 col-md-12 col-12">
                                      <img width='100%' src="https://st3.depositphotos.com/10654668/13844/i/600/depositphotos_138445604-stock-photo-male-doctor-in-hospital.jpg" alt="" />
                                  </div>
                              </div>
                              </div>    
                              
                              
        {/* Experience ============================================================================================*/}
                            <div className='Experience'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                                <h3><img alt='' src="https://img.icons8.com/color/50/000000/internship.png"/> Experience</h3>
                                <p>Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed turpis amet nisl eros risus a eu cras fringilla. Ac porta adipiscing. Eros sit mauris. Odio sed</p>
                            </div>
        {/* our Skills =============================================================================================*/}
                                <div className='Skills'data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                                    <h3><img alt='' src="https://img.icons8.com/external-itim2101-flat-itim2101/50/000000/external-skill-teamwork-itim2101-flat-itim2101-1.png"/> Our Skills</h3>
                                   <p> Congue mollis felis tortor id. Sed aliquet amet sit vitae commodo commodo ultricies lectus. A nullam consequat sociis lectus erat. Suscipit ridiculus quis ante cras mauris faucibus nunc vel vel et sed. Sodales nulla ut. Placerat sem sed. Sed et sed.</p>
                                </div>
        
                       </div>
        {/* about-right-content======================================================================================*/}
                       <div className="about-right-content"data-aos="zoom-in"  data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-delay="200">
                          <img width='300px' className='right-content-img' src="https://previews.123rf.com/images/serezniy/serezniy1809/serezniy180938268/110020090-team-of-young-doctors-in-modern-clinic.jpg" alt="" />
                       <div className='right-content-discription'>
                       <h2><img alt='' src="https://img.icons8.com/flat-round/40/000000/medal--v1.png"/> Our achievements</h2>
                       <p>SKLIFY Education is the best online school education platform in Asia in 2019-20.</p>
                         <h3><img alt='' src="https://img.icons8.com/fluency/40/000000/training.png"/> hospital introduction</h3>
                        <p>In this course, you will learn Photoshop, Illustrator, Adobe XD, InDesign & more. Also, you will learn how to bring out the best in your photographs with this beginner's course on Adobe Lightroom Classic, the photo editing app that's optimized for desktops.</p>
                       </div>
                       </div>
                   </div>
                     </Container>
                    </div>
        
        
                </div>
    );
};

export default About;