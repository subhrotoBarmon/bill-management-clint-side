import React, { use } from 'react';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';

const MyPayBillsLayout = () => {
    let {loading}=use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
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