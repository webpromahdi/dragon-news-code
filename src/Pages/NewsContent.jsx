import { Link, useLoaderData } from "react-router-dom";
import TopHeader from "../Components/Header/TopHeader";
import RightSideBar from "../Components/HomeMainArea/RightSideBar";
import { FaCalendarAlt, FaEye } from "react-icons/fa";
import moment from "moment";

const NewsContent = () => {

    const data = useLoaderData();
    const news = data.data[0];
    console.log(news);

    return (
        <div>
            <header>
                <TopHeader></TopHeader>
            </header>
            <main className="grid grid-cols-12 container gap-x-4">
                <div className="col-span-9">
                    <h2 className="font-semibold">Dragon News</h2>
                    <div className="p-6 mt-4 rounded-md border border-gray-200">
                      <img
                        src={news.image_url}
                        alt="Blog Thumbnail"
                        width={1000}
                        height={500}
                        className="rounded-xl mb-6 w-full object-cover"
                      />

                      <h1 className="text-2xl md:text-3xl font-bold mb-2 text-gray-900">
                        {news?.title}
                      </h1>

                      <div className="flex flex-wrap items-center text-gray-500 text-sm mb-4 gap-4">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="w-4 h-4" />
                          <span>{moment(news?.author?.published_date).format("MMMM D, YYYY")}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaEye className="w-4 h-4" />
                          <span>{news?.total_view} views</span>
                        </div>
                        <div className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                          {news?.rating?.badge} ({news?.rating?.number} ★)
                        </div>
                      </div>

                      <div className="space-y-4">
                        <p>
                          {news.details}
                        </p>
                        <div className="flex items-center gap-4 mt-6">
                          <img
                            src={news.author.img}
                            alt="Author"
                            width={40}
                            height={40}
                            className="rounded-full"
                          />
                          <span className="text-sm font-medium text-gray-700">{news?.author?.name}</span>
                        </div>
                        
                        <Link to={`/category/${news?.category_id}`}>
                            <button className="mt-6 text-pink-700 border border-pink-700 hover:bg-pink-100 px-4 py-2 rounded-md">
                            ← All news in this category
                           </button>
                        </Link>
                      </div>
                    </div>
                </div>
                <div className="col-span-3">
                    <RightSideBar></RightSideBar>
                </div>
            </main>
        </div>
    );
};

export default NewsContent;