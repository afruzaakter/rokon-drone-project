import React from 'react';
import './CustonerReview.css'
const CustomerReview = (props) => {
    const{name,img,rating,review} = props.review;
    return (
        <div className=' mt-5 gap-2 '>
             
               <div className='row d-flex'>
              <div className='review'>
               <div>
               <img className=' customer-img rounded-circle' src={img} alt="" />
                
                <h4>{name}</h4>
                <h4>{rating}</h4>
               </div>
                <div>
                <p className='w-75'>{review}</p>
                </div>
              </div>
               </div>

        </div>
    );
};

export default CustomerReview;