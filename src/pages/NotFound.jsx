import React from 'react';
import '../styles/NotFound.scss';
import Logo404 from '../assets/icons/page-not-found.png';

const NotFound = () => {
    return(
        <div className='notFound'>
            <img src={Logo404} alt="page not found" />
            <p>Error 404</p>
        </div>
    );
};

export default NotFound;