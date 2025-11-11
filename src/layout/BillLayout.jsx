import React from 'react';
import BillCategory from '../components/BillCategory';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router';

const BillLayout = () => {
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