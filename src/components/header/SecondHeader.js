import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import Header from './Header';

const SecondHeader = () => {
  
    return (
        <div>
            <div className='second-header'>
    <div className="containor">
        <div className='second-header-all-content'>
           {/* image */}
        <div className='header-image'> 
        <div className='bars'><i class="fas fa-bars"></i></div>
        <div className='header-logo'>
         <img className='headerimage' src="https://pro-16ed9.kxcdn.com/demo-51/wp-content/uploads/2020/10/logo.png" alt="" />
        </div> 
        <div className='cards'><img alt=''src="https://img.icons8.com/fluency/30/000000/favorite-cart.png"/>
        <span>1</span>
        </div>
        </div>
            
            
            {/* search hear input */}
            <div className='second-header-search-immlicity'>
   
                <input className='second-input' type="text" placeholder='search-products...' /><button className='second-header-btn'>search</button><button className='second-header-btn2'> <FontAwesomeIcon icon={faSearch} /></button>
            </div>
            
            {/* cart icons love icons ect */}
            <div className='cart-icons'>
                <div className=' cart-related-icon'>
                    <a href="/home"><img alt='' src="https://img.icons8.com/color-glass/23/000000/compare-git.png"/></a>
                    <span>0</span>
                </div>
                <div className=' cart-related-icon'>
                <a href="/home"><img alt=''src="https://img.icons8.com/fluency/23/000000/filled-like.png"/></a>
                <span>0</span>
                </div>
                        <div className=' cart-related-icon'>
                        <a href="/home"><img src="https://img.icons8.com/external-itim2101-lineal-color-itim2101/23/000000/external-cart-marketplace-itim2101-lineal-color-itim2101.png" alt=''/></a>
                        <span>1</span>
                         </div>            

            </div>
            
            
        </div>
    </div>
</div>
        </div>
    );
};

export default SecondHeader;