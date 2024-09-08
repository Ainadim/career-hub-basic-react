import React from 'react';
import PropTypes from 'prop-types';
import HeroBannerImage from '../../assets/images/user.png'

const HeroBanner = props => {
    return (
        <div className='bg-base-200'>
            <div className='grid grid-cols-12 pt-14'>
                <div className='grid col-start-1 col-end-6 content-center pr-36 gap-10'>
                    <h2 className='text-7xl font-bold'>One Step Closer To Your <span className='text-blue-500'>Dream Job</span> </h2>
                    <p className=''>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <div>
                    <button className='btn btn-info text-white'>Get Started</button>
                    </div>
                </div>
                <div className='col-end-13 col-span-6'>
                    <img src={HeroBannerImage} alt="" />
                </div>
            </div>
        </div>
    );
};

HeroBanner.propTypes = {
    
};

export default HeroBanner;