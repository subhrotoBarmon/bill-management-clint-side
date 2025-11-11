import React from 'react';
import Banner from './Banner';
import BillCategory from './BillCategory';
import RecentBills from './RecentBills';

const HomePage = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <BillCategory></BillCategory>
            </section>
            <section>
                <RecentBills></RecentBills>
            </section>

        </div>
    );
};

export default HomePage;