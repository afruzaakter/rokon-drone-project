import React from 'react';
import { Link } from 'react-router-dom';
import useReview from '../../hooks/useReview';

import bg from '../../images/DJI-Phantom-3-drone-1188x792-1-removebg-preview.png'
import CustomerReview from '../CustomerReview/CustomerReview';


import './Home.css'
const Home = () => {
    const[reviews,setReviews] = useReview()
    return (
        <div className='container'>
            
            <div className='d-flex mt-5 justify-content-around row'>
                <div className='col-md-6 col-sm-12'>
                 <h1 className='text-start mt-5'>Rokon Camera Drone <span className='text-color'>Accessories</span> </h1>
                 <p className='w-75 1h-1'>Rokon is a Single eCommerce drone Product.It’s a great place to start if you want to make a website for your drone store, electronics store, watches store, headphone store, earphone store, or jewelry store.</p>
                 <div className='align-items-start d-flex '>
                     <button className='btn btn-primary w-25 review-btn mb-4'>Read More</button>
                 </div>
                </div>
                <div className='done-style col-md-6 col-sm-12  '>
                 <img className=' bg-image img-fluid ' src={bg}alt="" /> 
                </div>
            </div>
        
        {/* //Reviews part  */}



      <div className='mt-5 '>
            <h1>Customer <span className='text-color'>Reviews(3)</span> </h1>

            <div className='mb-5'>
             { reviews.slice(0,3).map(review =><CustomerReview key={review.id} review={review}>

             </CustomerReview> )
             }
           </div>

            <Link to="/reviews" className='btn btn-primary mb-5 review-btn'>See all reviews</Link>
      </div>
         
         
   
        </div>
    );
};

export default Home;