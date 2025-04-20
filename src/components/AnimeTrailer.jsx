import React from "react";

const AnimeTrailer = ({ embedUrl, showTrailer, toggleTrailer }) => {
  if (!embedUrl) return null;

  return (
    <div className="mt-10 text-center">
      <button
        onClick={toggleTrailer}
        className="bg-amber-500 hover:bg-amber-600 text-black font-semibold py-2 px-6 rounded-full transition-all duration-300"
      >
        {showTrailer ? "Hide Trailer" : "Watch Trailer"}
      </button>

      {showTrailer && (
        <div className="mt-6 relative w-full max-w-[800px] mx-auto pb-[56.25%]">
          <iframe
            className="absolute top-0 left-0 w-full h-full rounded-xl"
            src={embedUrl}
            title="Anime Trailer"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      )}
    </div>
  );
};

export default AnimeTrailer;
