import React from 'react';
import { Carousel } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChartBar } from '@fortawesome/free-solid-svg-icons'
const MainHome = () => {
    return (
        <div>
                <div className='home'>
                <div className="container">
                    <div className="home-all-content">
                        <div className='catagory'>
                          <div className='home-title'>
                          <h5><FontAwesomeIcon icon={faChartBar} style={{marginRight:'6px'}} /> Shop By Categories</h5>
                          </div>
                          <div className='home-ditails-all'>
                              <h5><img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/25/000000/external-woman-christmas-vitaliy-gorbachev-flat-vitaly-gorbachev-2.png" alt=''/> Women</h5>
                          <h5><img src="https://img.icons8.com/external-vitaliy-gorbachev-flat-vitaly-gorbachev/25/000000/external-man-avatars-vitaliy-gorbachev-flat-vitaly-gorbachev-8.png" alt=''/> man</h5>
                          <h5><img alt=''src="https://img.icons8.com/fluency/25/000000/children.png"/> Children</h5>
                          <h5><img width='25px' src="https://cdn-icons-png.flaticon.com/128/4727/4727334.png" alt=''/>junior</h5>
                          <h5><img width='30px' src="https://img.favpng.com/9/8/25/writing-child-clip-art-png-favpng-Dntz5zGTxpCU6Ak8wBCgSeSCi.jpg" alt=''/>kids</h5>
                          <h5><img src="https://img.icons8.com/office/16/000000/lungs.png" alt=''/>Lungs</h5>
                          <h5><img alt=''src="https://img.icons8.com/office/25/000000/baby.png"/>Baby</h5>
                          <h5><img src="https://img.icons8.com/office/25/000000/stomach.png" alt=''/>stomach</h5>
                          <h5><img width='25px' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrQWIBBGu9I5nJOHWrl9uPRDOOtFOkyETnhA&usqp=CAU" alt=''/>Throat</h5>
                          <h4><img src="https://img.icons8.com/external-kiranshastry-gradient-kiranshastry/30/000000/external-more-interface-kiranshastry-gradient-kiranshastry.png" alt=''/> Others </h4>
                          </div>
                        </div>
                         
                        <div className='carosel'>
                        <Carousel>
  <Carousel.Item className='carosal-item1' style={{backgroundColor:'#f0e0d6'}}>
    <img
      className="d-block" 
      src="https://i.ibb.co/pX0M1y7/istockphoto-588364332-612x612-removebg-preview.png"
      alt="First slide"
    />
    <Carousel.Caption>
     <div className='carosel-ditails'>
         <p>New arrival</p>
     <h3>Fall - Winter  <br />2021</h3>
     
     <button>SHOP NOW</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
  
  <Carousel.Item className='carosal-item2'  style={{backgroundColor:'#f1dce5'}}>
    <img
      className="d-block w-100"
      src="https://i.ibb.co/MPvxkCj/211462-removebg-preview.png"
      alt="Second slide"/>

    <Carousel.Caption>
    <div className='carosel-ditails'>
         <p>New arrival</p>
     <h3>Spring - Summer  <br />2021</h3>
     
     <button>SHOP NOW</button>
     </div>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainHome;