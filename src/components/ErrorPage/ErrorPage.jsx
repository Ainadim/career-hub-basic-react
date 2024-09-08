import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../../Footer/Footer';

const ErrorPage = props => {
    return (
        <div>
            <Header></Header>
            <h2>Error! Page not Found</h2>
            <Link to='/' className='btn-warning btn'>Go Home</Link>
            <Footer></Footer>
        </div>
    );
};

ErrorPage.propTypes = {
    
};

export default ErrorPage;