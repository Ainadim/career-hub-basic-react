import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import JobSingleBox from '../JobSingleBox/JobSingleBox';

const JobCategoryBox = props => {

    const [job, setJob] = useState([])

    useEffect(() => {
        fetch('categories.json')
            .then(res => res.json())
            .then(data => setJob(data))
    }, [])
    return (
        <div>
            <div className='grid justify-items-center gap-8 my-10'>
                <h1 className='text-6xl font-bold'>Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>

            <div className='grid grid-cols-4 gap-6 my-16'>
                {
                    job.map((jobs, idx) => <JobSingleBox key={idx} jobProps={jobs} ></JobSingleBox>)
                }
            </div>
        </div>
    );
};

JobCategoryBox.propTypes = {

};

export default JobCategoryBox;