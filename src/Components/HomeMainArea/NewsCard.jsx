// components/NewsCard.jsx

import { FaEye, FaStar } from "react-icons/fa";
import { FiShare2 } from "react-icons/fi";
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
  const {
    title,
    thumbnail_url,
    details,
    author,
    total_view,
    rating,
  } = singleNews;

  return (
    <div className="rounded-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow">
      <div className="flex items-center gap-3 p-4 bg-[#F3F3F3]">
        <img
          src={author.img}
          alt="Author"
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-sm">{author.name}</p>
          <p className="text-xs text-gray-500">
            {new Date(author.published_date).toLocaleDateString()}
          </p>
        </div>
        <div className="ml-auto text-gray-500 hover:text-black cursor-pointer">
          <FiShare2 size={18} />
        </div>
      </div>
      <div className="p-4 space-y-2">
       <h2 className="text-lg font-bold text-[#403F3F]">{title}</h2>
        <img
          src={thumbnail_url}
          alt="News Thumbnail"
          className="w-full h-[262px] object-cover rounded-md mb-4"
        />
        <p className="text-sm text-[#706F6F] leading-6">
          {details.slice(0, 250)}...
          <br />
          <Link to={`/news/${singleNews._id}`} className="text-[#FF8C47] font-medium cursor-pointer">
            Read More
          </Link>
        </p>
        <div className="border border-gray-2"></div>
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-1 text-[#FF8C47]">
            <FaStar />
            <span className="text-sm font-semibold">{rating.number}</span>
          </div>
          <div className="flex items-center gap-1 text-gray-500">
            <FaEye />
            <span className="text-sm">{total_view}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
