import React from 'react';
import { Link } from 'react-router-dom';
import bg from '../../images/404 image.png'
const NotFound = () => {
    return (
        <div>
           {/* <h1>404</h1> 
           <h3>Oops! Page Not Found</h3> */}
           <img className='w-100' src={bg} alt="" />
           <h4 className='mt-5 mb-3 '>Try Search or go to Home page</h4>
            <Link to='/home' className='btn btn-primary'>Rokon Home Page</Link>
        </div>
    );
};

export default NotFound;