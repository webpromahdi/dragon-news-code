import { useEffect, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";

const LeftSideBar = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() =>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res =>res.json())
        .then(data => setCategories(data.data.news_category))
    },[]);

    return (
        <div> 
            <button data-drawer-target="cta-button-sidebar" data-drawer-toggle="cta-button-sidebar" aria-controls="cta-button-sidebar" type="button" className="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600">
               <span className="sr-only">Open sidebar</span>
               <HiMenuAlt2 className='w-6 h-6' />
            </button>
            <h2 className="font-semibold">All Caterogy</h2>        
            <aside className="fixed w-64 h-screen transition-transform -translate-x-full sm:translate-x-0">
               <div className="h-full px-3 py-4 overflow-y-auto">
                  <ul className="space-y-2 font-medium">
                    {
                        categories.map((category) =>(
                       <li key={category.category_id}>
                          <a href="#" className="flex items-center p-2 text-[#9F9F9F] hover:text-gray-900 rounded-md hover:bg-gray-100 hover:font-semibold">
                           <span className="ms-3">{category.category_name}</span>
                          </a>
                        </li>
                        ))
                    }
                  </ul>
               </div>
            </aside>
        </div>
    );
};

export default LeftSideBar;