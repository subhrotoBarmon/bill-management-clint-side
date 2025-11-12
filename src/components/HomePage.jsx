import React from 'react';
import Banner from './Banner';
import BillCategory from './BillCategory';
import RecentBills from './RecentBills';
import PaymentMethod from './PaymentMethod';
import PaybillReviews from './PaybillReviews';

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
            <section>
                <PaymentMethod></PaymentMethod>
            </section>
            <section>
                <PaybillReviews></PaybillReviews>
            </section>

        </div>
    );
};

export default HomePage;