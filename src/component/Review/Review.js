import React from 'react';
import useReview from '../../hooks/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css'

const Review = () => {
    const [reviews, setReviews] = useReview();
    //  console.log(object);
    //   console.log(props.review);
      
    return (
        <div className='container mt-5 mb-5'>
        <h1>Customer <span className='text-color'>Reviews(3)</span> </h1>
        <div className='customer-review '>
        {
            reviews.map(review => <CustomerReview key ={review.id} review = {review}
            ></CustomerReview>)
        }

       
        </div>
       
        </div>
    );
};

export default Review;