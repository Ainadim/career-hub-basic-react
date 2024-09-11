import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const JobDetails = props => {
    const jobs = useLoaderData()
    const {id} = useParams()
    const idNum = parseInt(id)
    const job = jobs.find(job => job.id === idNum)
    console.log(job);
    return (
        <div>
            <h2>Job Details</h2>
            
        </div>
    );
};

JobDetails.propTypes = {
    
};

export default JobDetails;