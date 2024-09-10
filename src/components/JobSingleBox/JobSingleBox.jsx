import React from 'react';
import PropTypes from 'prop-types';

const JobSingleBox = ({jobProps}) => {
    const {logo, category_name, availability} = jobProps
    return (
        <div>
            <div className='bg-black bg-opacity-10 py-6 pr-20 pl-10 grid gap-3 rounded-md'>
                <img className='bg-stone-300 rounded-md p-3' src={logo} alt="" />
                <h4 className='font-bold text-2xl'>{category_name}</h4>
                <p className='text-zinc-500 font-medium'>{availability}</p>
            </div>
        </div>
    );
};

JobSingleBox.propTypes = {

};

export default JobSingleBox;