import React from 'react';
import bg from '../../images/drone-1_.jpg'
import bg1 from '../../images/drone-2_.jpg'
import bg2 from '../../images/dron-3.jpg'
import bg3 from '../../images/dron-4_.jpg'

const About = () => {
    return (
        <div className='container mt-5 '>
            <h1 className='mb-4'> Product Gallery</h1>
            <div className='row '>
                <div className='col-md-4 mb-3'>
                    <img src={bg} alt="" />
                </div>
                <div className='col-md-4 mb-3'>
                    <img src={bg1} alt="" />
                </div>
                <div className='col-md-4 mb-3'>
                    <img src={bg2} alt="" />
                </div>
            </div>
            <div className='row'>
                <div className='col-md-4 mb-3'>
                    <img src={bg3} alt="" />
                </div>
                <div className='col-md-4 mb-3'>
                    <img src={bg2} alt="" />
                </div>
                <div className='col-md-4 mb-3'>
                    <img src={bg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default About;