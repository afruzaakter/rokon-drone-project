import React from 'react';

const Review = (props) => {
      console.log(props.review);
      const {name,img,rating,review} = props.review
    return (
        <div>
           <div className='card'>
           
           <img className='w-25' src={img} alt="" />
           <h3 className='text-start'>{name}</h3>
           <h4 className='text-start'>{rating}</h4>
           <h6 className='w-50 h-50'>{review}</h6>
           </div>


        </div>
    );
};

export default Review;