import React from 'react';
import TopHeader from '../Components/Header/TopHeader';
import Navbar from '../Components/Header/Navbar';
import LeftNavBar from '../Components/Header/HomeMainArea/LeftNavBar';

const Home = () => {
    return (
        <div>
            {/* Home Header Area */}
            <header>
                <TopHeader></TopHeader>
                <Navbar></Navbar>
            </header>
            {/* Home main area */}
            <main className='container pt-5 grid grid-cols-12 gap-x-4'>
                <aside className='left col-span-3'>
                    <LeftNavBar></LeftNavBar>
                </aside>
                <section className='col-span-6'>Content area side bar</section>
                <aside className='col-span-3'>Right side bar</aside>
            </main>
            
        </div>
    );
};

export default Home;