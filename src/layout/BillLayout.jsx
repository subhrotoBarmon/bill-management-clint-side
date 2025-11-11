import React, { use } from 'react';
import BillCategory from '../components/BillCategory';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../Provider/AuthProvider';
import Loading from '../pages/Loading';

const BillLayout = () => {
    let {loading}=use(AuthContext);
    if(loading){
        return <Loading></Loading>
    }
    return (
        <>
          <header>
            <Navbar></Navbar>
            <BillCategory></BillCategory>
          </header>  
          <main className='w-11/12 mx-auto'>
            <Outlet></Outlet>
          </main>
          <footer>

          </footer>
        </>
    );
};

export default BillLayout;