// import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Page/Shared/Navbar';
import Footer from '../Page/Shared/Footer';

const Root = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;