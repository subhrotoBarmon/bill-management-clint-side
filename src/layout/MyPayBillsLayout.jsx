import React from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const MyPayBillsLayout = () => {
    return (
        <div>
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <Outlet></Outlet>
            </section>
        </div>
    );
};

export default MyPayBillsLayout;