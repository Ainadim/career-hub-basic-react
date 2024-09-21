import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';
import bgImage01 from '../../assets/images/bg1.png'
import bgImage02 from '../../assets/images/bg2.png'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const JobDetails = props => {
    const jobs = useLoaderData()
    const { id } = useParams()
    const idNum = parseInt(id)
    const job = jobs.find(job => job.id === idNum)

    const handleSubmitButtone = () => {
        toast("Applied Success")
    }
    return (
        <div>
            <div className='bg-base-200 h-72 p-5 relative grid content-center'>
                <img className='absolute bottom-0 left-0' src={bgImage01} alt="" />
                <h2 className='font-bold text-4xl text-center'>Job Details</h2>
                <img className='absolute -top-[68px] right-0' src={bgImage02} alt="" />
            </div>
            <div className='w-4/5 m-auto py-10 flex items-center'>
                <div className='w-4/6 mr-5 space-y-10'>
                    <p> <span className='font-bold'>Job Description:</span> {job.job_description}</p>
                    <p> <span className='font-bold'>Job Responsibility:</span> {job.job_responsibility}</p>
                    <p> <span className='font-bold'>Educational Requirements:</span> {job.educational_requirements}</p>
                    <p> <span className='font-bold'>Experiences:</span> {job.experiences}</p>
                </div>
                <div className='w-2/6 space-y-5'>
                    <div className='bg-sky-200 rounded-md'>
                        <div className='p-10 space-y-10'>
                            <div className=''>
                                <h2 className='font-bold text-1xl'>Job Details</h2>
                                <div className='h-[1px] bg-fuchsia-700 w-auto my-3'></div>
                                <p> <span className='font-bold'>Salary:</span> {job.salary}</p>
                                <p> <span className='font-bold'>Job Title:</span> {job.job_title}</p>
                            </div>
                            <div>
                                <h2 className='font-bold text-1xl'>Contact Information</h2>
                                <div className='h-[1px] bg-fuchsia-700 w-auto my-3'></div>
                                <p> <span className='font-bold'>Phone:</span> {job.contact_information.phone}</p>
                                <p> <span className='font-bold'>Email:</span> {job.contact_information.email}</p>
                                <p> <span className='font-bold'>Address:</span> {job.contact_information.address}</p>
                            </div>
                        </div>
                    </div>
                    <button onClick={handleSubmitButtone} className='btn btn-primary min-w-full'>Apply now</button>
                </div>
            </div>
            <ToastContainer position="top-center"
                autoClose={2000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
                transition:Zoom></ToastContainer>
        </div>
    );
};

JobDetails.propTypes = {

};

export default JobDetails;