import React from "react";
import popular from "../assets/trending-0399c040.png";
import airing from "../assets/airing-65128c43.png";
import upcoming from "../assets/upcoming-2608649c.png";
import { useNavigate } from "react-router-dom";

const CategoryIcons = () => {
  const categoryIcons = [
    {
      src: popular,
      alt: "PopularImg",
      title: "Check Popular Animes",
      type: "popular",
    },
    {
      src: airing,
      alt: "AiringImg",
      title: "Check Airing Animes",
      type: "airing",
    },
    {
      src: upcoming,
      alt: "UpcomingImg",
      title: "Check Upcoming Animes",
      type: "upcoming",
    },
  ];

  const navigate = useNavigate();

  const handlePageClick = (type) => {
    // console.log("click", type)
    navigate(`/${type}`);
  };

  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10 z-50 absolute lg:bottom-[-150px] bottom-[-300px] sm:bottom-[-120px] w-full px-4 py-10">
      {categoryIcons.map((icon, index) => (
        <div
          key={index}
          onClick={() => handlePageClick(icon.type)}
          className="border border-white rounded-xl flex flex-col items-center shadow-md bg-white dark:bg-gray-800 p-6 sm:p-[30px] cursor-pointer transition-transform duration-300 hover:-translate-y-2 hover:rotate-x-6 hover:opacity-90 transform perspective-1000 w-[180px] sm:w-auto"
        >
          <img
            src={icon.src}
            alt={icon.alt}
            className="h-[80px] sm:h-[100px]"
          />
          <p className="mt-2 text-sm font-medium text-gray-800 dark:text-white text-center">
            {icon.title}
          </p>
        </div>
      ))}
    </div>
  );
};

export default CategoryIcons;
