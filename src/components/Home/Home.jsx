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
                <div>
                    <JobCategoryBox></JobCategoryBox>
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