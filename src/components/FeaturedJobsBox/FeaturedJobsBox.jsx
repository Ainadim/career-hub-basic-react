import React from 'react';
import PropTypes from 'prop-types';
import featureImg01 from '../../assets/logo/google.png'
import featureImg02 from '../../assets/logo/netflix.png'
import featureImg03 from '../../assets/logo/tesla.png'

import icon01 from '../../assets/icons/location2.png'
import icon02 from '../../assets/icons/money.png'

const FeaturedJobsBox = props => {
    return (
        <div>
            <div className='grid grid-cols-2 gap-2'>
                <div className='border rounded-md p-10 m-5 space-y-4'>
                    <img src={featureImg01} alt="" />
                    <h4 className='text-2xl'>Technical Database Engineer</h4>
                    <p>Google LLC</p>
                    <button className='mr-5 btn btn-outline btn-info'>Remote</button>
                    <button className='btn btn-outline btn-info'>Full Time</button>
                    <div className='flex'>
                        <span className='flex mr-5'><img src={icon01} alt="" />Dhaka, Bangladesh</span>
                        <span className='flex'><img src={icon02} alt="" />Salary : 100K - 150K</span>
                    </div>
                    <button className='btn btn-info'>View Details</button>
                </div>
                <div className='border rounded-md p-10 m-5 space-y-4'>
                    <img src={featureImg02} alt="" />
                    <h4 className='text-2xl'>Senior Product Designer</h4>
                    <p>Netflix</p>
                    <button className='mr-5 btn btn-outline btn-info'>Remote</button>
                    <button className='btn btn-outline btn-info'>Full Time</button>
                    <div>
                        <span className='mr-5'> Dhaka, Bangladesh</span>
                        <span>Salary : 100K - 150K</span>
                    </div>
                    <button className='btn btn-info'>View Details</button>
                </div>
                <div className='border rounded-md p-10 m-5 space-y-4'>
                    <img src={featureImg03} alt="" />
                    <h4 className='text-2xl'>Software Engineer</h4>
                    <p>Tesla</p>
                    <button className='mr-5 btn btn-outline btn-info'>Remote</button>
                    <button className='btn btn-outline btn-info'>Full Time</button>
                    <div>
                        <span className='mr-5'>Dhaka, Bangladesh</span>
                        <span>Salary : 100K - 150K</span>
                    </div>
                    <button className='btn btn-info'>View Details</button>
                </div>
                <div className='border rounded-md p-10 m-5 space-y-4'>
                    <img src={featureImg01} alt="" />
                    <h4 className='text-2xl'>Technical Database Engineer</h4>
                    <p>Google LLC</p>
                    <button className='mr-5 btn btn-outline btn-info'>Remote</button>
                    <button className='btn btn-outline btn-info'>Full Time</button>
                    <div>
                        <span className='mr-5'>Dhaka, Bangladesh</span>
                        <span>Salary : 100K - 150K</span>
                    </div>
                    <button className='btn btn-info'>View Details</button>
                </div>
            </div>
            <div className='m-14 text-center'>
                <button className='btn btn-primary'> See More</button>
            </div>
        </div>
    );
};

FeaturedJobsBox.propTypes = {

};

export default FeaturedJobsBox;