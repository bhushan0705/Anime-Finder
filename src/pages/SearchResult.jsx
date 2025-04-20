import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import AnimeCard from "../components/AnimeCard";
import Navbar from "../routes/Navbar";
import BackButton from "../components/BackButton";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

const SearchResult = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const query = new URLSearchParams(location.search).get("query");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // console.log(results);

  useEffect(() => {
    const fetchAnime = async () => {
      try {
        setLoading(true);
        setError(false);
        const response = await fetch(
          `https://api.jikan.moe/v4/anime?q=${query}`
        );
        const data = await response.json();
        setResults(data.data || []);
      } catch (err) {
        console.error("Failed to fetch anime:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    if (query) {
      fetchAnime();
    }
  }, [query]);

  const handleCardClick = (id) => {
    // Navigate to the correct detail page
    navigate(`/explore/${id}`);
  };

  return (
    <div className="p-[10] min-h-screen bg-black text-white">
      <Navbar />
      <div className="flex p-6 gap-2 flex-wrap items-center ">
        <BackButton />
        <h2 className="title_Name text-amber-300 text-2xl font-semibold capitalize lg:tracking-wider">
          Search Results for: "{query}"
        </h2>
      </div>
      <ScrollToTopBtn></ScrollToTopBtn>

      {loading ? (
        <p className="text-center text-white">Loading...</p>
      ) : error ? (
        <p className="text-center text-red-500">Something went wrong.</p>
      ) : results.length === 0 ? (
        <p className="text-center text-gray-400">No results found.</p>
      ) : (
        <div className="flex flex-wrap justify-center gap-8 px-4 pb-12">
          {results.map((anime) => (
            <AnimeCard
              key={anime.mal_id}
              anime={anime}
              onClick={() => handleCardClick(anime.mal_id)} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResult;
