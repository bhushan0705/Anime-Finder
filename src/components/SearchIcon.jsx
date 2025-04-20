import React, { useState } from "react";
import searchIconImg from "../assets/searchicon-7649526b.png";
import { useLocation, useNavigate } from "react-router-dom";

const SearchIcon = () => {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");

  const location = useLocation();
  const isHome = location.pathname === "/";

  // const animeList = useSelector((state) => state.animeData);
  // const combineAnimeList = [
  //   ...(animeList.popularAnime?.data || []),
  //   ...(animeList.airingAnime?.data || []),
  //   ...(animeList.upcomingAnime?.data || []),
  // ];

  const handleSearch = (e) => {
    const value = e.target.value;
    setQuery(value);
  };

  const handleSearchSubmit = () => {
    if (query.trim() !== "") {
      navigate(`/searchresults?query=${encodeURIComponent(query.trim())}`);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSearchSubmit();
    }
  };

  return (
    <div className="relative flex justify-center items-center">
      {isHome ? (
        <input
          onChange={handleSearch}
          onKeyDown={handleKeyPress}
          type="text"
          value={query}
          placeholder="Search for animes..."
          className={`border-2 border-amber-500 lg:pr-[50px] lg:w-[600px] h-[60px] lg:h-[80px] w-full rounded-xl lg:p-[20px] p-[10px]`}
        />
      ) : (
        <input
          onChange={handleSearch}
          onKeyDown={handleKeyPress}
          type="text"
          value={query}
          placeholder="Search for animes..."
          className={`border-2 border-amber-500 lg:pr-[50px] lg:w-[300px] w-[300px] rounded-xl lg:p-[20px] p-[10px]`}
        />
      )}
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2"
        onClick={handleSearchSubmit}
      >
        <img
          src={searchIconImg}
          alt="search icon"
          className="h-[30px] cursor-pointer"
        />
      </button>
    </div>
  );
};

export default SearchIcon;
