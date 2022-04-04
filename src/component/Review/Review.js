import React from 'react';
import useReview from '../../hooks/useReview';
import CustomerReview from '../CustomerReview/CustomerReview';
import './Review.css'

const Review = (props) => {
    const [reviews, setReviews] = useReview();
    //  console.log(object);
    //   console.log(props.review);
      
    return (
        <div className='container customer-review'>
        
        {
            reviews.map(review => <CustomerReview review = {review}
            ></CustomerReview>)
        }
       
        </div>
    );
};

export default Review;