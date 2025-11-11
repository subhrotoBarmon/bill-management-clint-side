import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';

const HomeLayout = () => {
    let {loading}=use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <>
        <header>
            <Navbar></Navbar>
        </header>
        <main>
            <Outlet></Outlet>
        </main>
            <footer>

            </footer>
        </>
    );
};

export default HomeLayout;