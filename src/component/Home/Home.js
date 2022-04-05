import React from 'react';
import { Link } from 'react-router-dom';

import bg from '../../images/DJI-Phantom-3-drone-1188x792-1-removebg-preview.png'


import './Home.css'
const Home = () => {
    return (
        <div className='container'>
            
            <div className='d-flex mt-5 justify-content-around row'>
                <div className='col-md-6 col-sm-12'>
                 <h1 className='text-start mt-5'>Rokon Camera Drone <span className='text-color'>Accessories</span> </h1>
                 <p className='w-75'>Rokon is a Single eCommerce drone Product.It’s a great place to start if you want to make a website for your drone store, electronics store, watches store, headphone store, earphone store, or jewelry store.</p>
                 <div className='align-items-start'>
                     <button className='btn btn-primary w-25'>Read More</button>
                 </div>
                </div>
                <div className='done-style col-md-6 col-sm-12  '>
                 <img className=' bg-image img-fluid ' src={bg}alt="" /> 
                </div>
            </div>
        
        {/* //Reviews part  */}



      <div className='mt-5 '>
            <h1>Customer <span className='text-color'>Reviews(3)</span> </h1>


        

            {/* <button className='btn btn-primary'>See All Reviews </button> */}

            <Link to="/reviews" className='btn btn-primary'>See all reviews</Link>
      </div>
         
   
        </div>
    );
};

export default Home;