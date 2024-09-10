import React from 'react';

import { FaLocationDot } from "react-icons/fa6";

import { HiCurrencyDollar } from "react-icons/hi2";

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const FeaturesSingleBox = ({jobProps}) => {

    const {id, logo, job_title, company_name, remote_or_onsite, location, job_type, salary} = jobProps
    return (
        <div>
            <div className='border rounded-md p-10 m-5 space-y-4'>
                <img src={logo} alt="" />
                <h4 className='text-4xl font-bold'>{job_title}</h4>
                <p className='font-bold text-gray-400'>Company: {company_name}</p>
                <button className='mr-5 btn btn-outline btn-info'>{remote_or_onsite}</button>
                <button className='btn btn-outline btn-info'>{job_type}</button>
                <div className='flex'>
                    <span className='flex items-center mr-5 gap-2'><FaLocationDot /> {location}</span>
                    <span className='flex items-center gap-2'><HiCurrencyDollar /> Salary : {salary}</span>
                </div>
                <Link to={`/job/${id}`}>
                <button className='my-5 btn bg-gradient-to-r from-indigo-600 to-pink-400'>View Details</button>
                </Link>
            </div>
        </div>
    );
};

FeaturesSingleBox.propTypes = {

};

export default FeaturesSingleBox;