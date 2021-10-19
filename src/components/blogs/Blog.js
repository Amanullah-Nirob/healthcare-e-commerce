import React from 'react';

const Blog = (props) => {
    const {img,name}=props.item
    return (
        <div className='mt-5 col-lg-4 col-md-6 col-12'>
          <img width='100%' src={img} alt="" />
          <h5 className='mt-3 text-center'>{name}</h5>
        </div>
    );
};

export default Blog;