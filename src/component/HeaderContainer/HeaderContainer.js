import React from 'react';
import Banner from '../Banner/Banner';
import Navbar from '../Navbar/Navbar';
import './HeaderCOntainer.css';

const HeaderContainer = () => {
    return (
        <div className="header-container mb-5">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default HeaderContainer;