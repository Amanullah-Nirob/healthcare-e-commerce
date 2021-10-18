import React from 'react';

const SingleMadicin = (props) => {
    const {img,name,ptitle}=props.madicin
    return (
        <div className='col-lg-3 col-md-4 col-6 main-singlemdicin'>
            <div className='singlemdicin'>
          <div className='singlemdicin-text'>
              <h6>{name}</h6>
              <small>{ptitle}</small>
          </div>
          <div>
          <img src={img}alt="" />
          </div>
            </div>
        </div>
    );
};

export default SingleMadicin;
