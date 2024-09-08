import React from 'react';
import PropTypes from 'prop-types';
import HeroBanner from '../HeroBanner/HeroBanner';
import JobCategoryBox from '../JobCategoryBox/JobCategoryBox';
import FeaturedJobsBox from '../FeaturedJobsBox/FeaturedJobsBox';

const Home = props => {
    return (
        <div>
            <div className=' bg-base-200'>
                <div className='w-4/5 m-auto'>
                    <HeroBanner></HeroBanner>
                </div>
            </div>
            <div className='w-4/5 m-auto'>
                <div className='grid justify-items-center gap-8 my-10'>
                    <h1 className='text-6xl font-bold'>Job Category List</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div> 
                <div>
                    <JobCategoryBox></JobCategoryBox>
                </div>
                <div className='grid justify-items-center gap-8 my-10'>
                    <h1 className='text-6xl font-bold'>Featured Jobs</h1>
                    <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                </div>
                <div>
                    <FeaturedJobsBox></FeaturedJobsBox>
                </div>
            </div>
        </div>

    );
};

Home.propTypes = {

};

export default Home;