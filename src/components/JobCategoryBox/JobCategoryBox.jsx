import React from 'react';
import PropTypes from 'prop-types';
import icon01 from '../../assets/icons/accounts.png'
import icon02 from '../../assets/icons/creative.png'
import icon03 from '../../assets/icons/chip.png'
import icon04 from '../../assets/icons/marketing.png'

const JobCategoryBox = props => {
    return (
        <div className='flex justify-between gap-5 my-16'>
            <div className='bg-black bg-opacity-10 py-6 pr-20 pl-5 grid gap-3 rounded-md'>
                <img src={icon01} alt="" />
                <h4 className='font-bold'>Account & Finance</h4>
                <p className='text-zinc-500 font-medium'>300 Jobs Available</p>
            </div>
            <div className='bg-black bg-opacity-10 py-6 pr-20 pl-5 grid gap-3 rounded-md'>
                <img src={icon02} alt="" />
                <h4 className='font-bold'>Creative Design</h4>
                <p className='text-zinc-500 font-medium'>100+ Jobs Available</p>
            </div>
            <div className='bg-black bg-opacity-10 py-6 pr-20 pl-5 grid gap-3 rounded-md'>
                <img src={icon03} alt="" />
                <h4 className='font-bold'>Marketing & Sales</h4>
                <p className='text-zinc-500 font-medium'>150 Jobs Available</p>
            </div>
            <div className='bg-black bg-opacity-10 py-6 pr-20 pl-5 grid gap-3 rounded-md'>
                <img src={icon04} alt="" />
                <h4 className='font-bold'>Engineering Job</h4>
                <p className='text-zinc-500 font-medium'>224 Jobs Available</p>
            </div>
        </div>
    );
};

JobCategoryBox.propTypes = {

};

export default JobCategoryBox;