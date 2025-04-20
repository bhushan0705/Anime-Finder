import React from "react";
import SearchIcon from '../components/SearchIcon'
import bgImg from '../assets/animeBg.png';
import CategoryIcons from "../components/CategoryIcons"

function Home() {
  return (
    <div className="w-full">
      <div className="relative h-screen w-full">
        <img
          src={bgImg}
          alt="bgImg"
          className="absolute w-full h-full object-cover"
        />
        <div className="relative z-10 flex flex-col items-center justify-start h-full text-white bg-black/40 ">
          <div className="flex flex-col items-center justify-center mt-10 gap-8 px-4">
            <h1 className="animeName font-bold text-5xl sm:text-6xl md:text-9xl tracking-widest text-center">Anime Find</h1>
            <p className="animeText mt-2 text-2xl sm:text-3xl tracking-wider text-center">Search, find, discover animes!</p>
          </div>
          <div className="mt-10 sm:mt-25">
            <SearchIcon />
          </div>
        </div>
      </div>

      <div className="relative">
        <CategoryIcons />
      </div>
    </div>
  );
}

export default Home;
