import React from "react";

const AnimeCard = ({ anime, onClick, explore }) => {
  return (
    <div
      onClick={() => onClick(anime.mal_id, explore)}
      className="p-5 relative cursor-pointer flex items-center justify-center transform hover:scale-105 transition-transform duration-500 group"
    >
      <img
        src={anime.images.jpg.large_image_url}
        alt="anime"
        className="card_images h-[400px] w-[300px] object-cover mx-auto rounded-xl"
      />

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[70%] bg-black/70 text-white text-center rounded-xl px-3 py-2 text-sm font-medium">
        <p>{anime.title_english || anime.title}</p>

        <div
          className="absolute bottom-2 left-1/2 -translate-x-1/2 z-50 
            opacity-0 translate-y-4 
            group-hover:opacity-100 group-hover:translate-y-[-300px] 
            transition-all duration-500 ease-in-out pointer-events-none"
        >
          <p className="bg-black text-white rounded-2xl p-[5px] text-center text-xl px-3">
            🔥{anime.score ? anime.score.toFixed(1) : "5.1"}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
