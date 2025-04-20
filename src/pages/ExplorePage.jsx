import React from "react";
import Navbar from "../routes/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAnimeCard } from "../redux/slices/animeDataSlice";
import BackButton from "../components/BackButton";
import AnimeCard from "../components/AnimeCard";
import ScrollToTopBtn from "../components/ScrollToTopBtn";

const ExplorePage = () => {
  const { explore } = useParams();
  // console.log(explore);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const allAnimeData = useSelector((state) => state.animeData) || [];
  const animeList = allAnimeData[`${explore}Anime`] || [];

  function handleCardId(id) {
    const selectedCard = animeList.data.find(
      (element) => element.mal_id === id
    );
    dispatch(setSelectedAnimeCard(selectedCard));
    navigate(`/${explore}/${id}`);
  }

  return (
    <>
      <Navbar />
      <div className="p-[10px]">
        <div className="flex items-center gap-1 lg:gap-4 p-4">
          <BackButton />
          <h1 className="title_Name text-amber-300 text-2xl font-semibold capitalize lg:tracking-widest">
            {explore} animes
          </h1>
        </div>
        <ScrollToTopBtn></ScrollToTopBtn>

        <div className="flex flex-wrap items-center justify-center gap-10">
          {animeList.data?.map((anime, index) => (
            <AnimeCard
              key={`${anime.mal_id}-${index}`}
              anime={anime}
              onClick={handleCardId}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExplorePage;
