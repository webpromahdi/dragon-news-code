import React from 'react';
import TopHeader from '../Components/Header/TopHeader';
import Navbar from '../Components/Header/Navbar';
import LeftSideBar from '../Components/HomeMainArea/LeftSideBar';
import RightSideBar from '../Components/HomeMainArea/RightSideBar';

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
                    <LeftSideBar></LeftSideBar>
                </aside>
                <section className='col-span-6'>Content area side bar</section>
                <aside className='col-span-3'>
                    <RightSideBar></RightSideBar>
                </aside>
            </main>
            
        </div>
    );
};

export default Home;