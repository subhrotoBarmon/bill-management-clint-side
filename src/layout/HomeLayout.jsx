import React, { use } from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';
import Footer from '../components/Footer';

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
        <main className='pb-5'>
            <Outlet></Outlet>
        </main>
            <footer>
         <Footer></Footer>
            </footer>
        </>
    );
};

export default HomeLayout;