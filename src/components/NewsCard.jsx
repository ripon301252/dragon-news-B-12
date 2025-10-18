import React from "react";
import { FaEye, FaStar } from "react-icons/fa";
import { IoBookmarksSharp } from "react-icons/io5";

const NewsCard = ({ news }) => {
  const {
    title,
    author,
    total_view,
    rating,
    thumbnail_url,
    details,
    tags,
  } = news;

  return (
    <div className="card w-full bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 border border-base-200">
      <figure>
        <img
          src={thumbnail_url}
          alt={title}
          className="w-full h-64 object-cover"
        />
      </figure>

      <div className="card-body">
        {/* Author Info */}
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <img
              src={author.img}
              alt={author.name}
              className="w-10 h-10 rounded-full border border-base-300"
            />
            <div>
              <h2 className="font-semibold text-base">{author.name}</h2>
              <p className="text-sm text-gray-500">
                {new Date(author.published_date).toLocaleDateString()}
              </p>
            </div>
          </div>

          {/* Rating */}
          <div className="flex items-center gap-1 text-yellow-500">
            <FaStar />
            <span className="font-medium">{rating.number}</span>
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold mb-2">{title}</h3>

        {/* Details */}
        <p className="text-gray-700  mb-3">
          {details.slice(0, 150)}...
          <span className="text-blue-500 cursor-pointer hover:underline ">
            Read more 
          </span>
        </p>


        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {tags.map((tag, i) => (
            <span
              key={i}
              className="badge badge-outline badge-primary text-xs font-semibold"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Views & Action */}
        <div className="card-actions justify-between items-center">
          <div className="flex items-center gap-2 text-gray-500">
            <FaEye />
            <span>{total_view.toLocaleString()} views</span>
            <span className="text-blue-500 cursor-pointer font-bold"><IoBookmarksSharp /></span>
          </div>

          <button className="btn btn-sm btn-primary">Read More</button>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
