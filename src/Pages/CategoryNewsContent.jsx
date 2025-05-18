import React from 'react';
import { useLoaderData } from 'react-router-dom';
import NewsCard from '../Components/HomeMainArea/NewsCard';

const CategoryNewsContent = () => {
    const {data: news} = useLoaderData();
    return (
        <div>
            <h2 className='font-semibold mb-4'>Dragon News Home</h2>
            <div className='space-y-8'>
            {
               news.map((singleNews) =>(
                 <NewsCard 
                 singleNews={singleNews}
                 key={singleNews._id}
                 ></NewsCard>
               )) 
            }
           </div>
        </div>
    );
};

export default CategoryNewsContent;