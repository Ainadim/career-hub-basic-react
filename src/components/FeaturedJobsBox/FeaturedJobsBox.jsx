import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import FeaturesSingleBox from '../FeaturesSingleBox/FeaturesSingleBox';

const FeaturedJobsBox = props => {

    const [job, setJobs] = useState([])    
    const [dataLength, setDataLength] = useState(2)

    useEffect(() => {
       fetch('jobs.json')
       .then(res => res.json())
       .then (data => setJobs(data))
    }, [])
    return (
        <div>
            <div className='grid justify-items-center gap-8 my-10'>
                <h1 className='text-6xl font-bold'>Featured Jobs</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <h2>{job.length}</h2>
            </div>
            <div className='grid grid-cols-2 gap-2'>
                {
                    job.slice(0, dataLength).map ((job, idx) => <FeaturesSingleBox key={idx} jobProps ={job}></FeaturesSingleBox>)
                }
            </div>
            <div className = {`m-10 text-center ${dataLength === job.length ? "hidden" : ''}`}>
                <button onClick={() => setDataLength(job.length)} className='btn btn-primary'> More job</button>
            </div>
        </div>
    );
};

FeaturedJobsBox.propTypes = {

};

export default FeaturedJobsBox;