import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Navbar from "../routes/Navbar";
import BackButton from "../components/BackButton";
import AnimeTrailer from "../components/AnimeTrailer";

const DetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const reduxData = useSelector((state) => state.animeData.selectedAnimeCard);

  const [data, setData] = useState(reduxData || null);
  const [showTrailer, setShowTrailer] = useState(false);
  const [loading, setLoading] = useState(!reduxData);

  // console.log(data);

  useEffect(() => {
    setData(null);
    setLoading(true);

    const fetchAnimeDetail = async () => {
      try {
        const res = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const json = await res.json();
        setData(json.data);
      } catch (error) {
        console.error("Error fetching anime details:", error);
      } finally {
        setLoading(false);
      }
    };

    if (!reduxData || reduxData.mal_id !== id) {
      fetchAnimeDetail();
    } else {
      setData(reduxData);
      setLoading(false);
    }
  }, [id, reduxData, dispatch]);

  if (loading || !data) {
    return (
      <div className="text-white text-center mt-10">
        {loading ? "Loading..." : "Anime not found."}
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="descriptionPage flex items-center gap-4 px-10 py-5">
        <BackButton />
        <p className="title_Name text-amber-300 text-2xl font-semibold capitalize tracking-wider">
          Detail Page
        </p>
      </div>

      <div className="p-6 rounded-xl shadow-lg mx-auto text-white">
        <p className="text-2xl font-semibold mb-8 text-center tracking-wider">
          {data.title_english}
        </p>

        <div className="flex flex-wrap justify-around items-start gap-10">
          {/* Image Section */}
          <div className="detailCardPic p-2 rounded-xl">
            <img
              src={data.images.jpg.large_image_url}
              alt="anime"
              className="h-[450px] mx-auto rounded-xl object-cover"
            />
          </div>

          {/* Info Section */}
          <div className="detailInfo space-y-4 text-lg p-6 rounded-xl w-[350px] lg:min-h-[465px]">
            <p>
              <span className="font-bold">Airing:</span>{" "}
              {data.airing ? "Yes" : "No"}
            </p>
            <p>
              <span className="font-bold">Duration:</span>{" "}
              {data.duration || "No"}
            </p>
            <p>
              <span className="font-bold">Episodes:</span>{" "}
              {data.episodes || "No"}
            </p>
            <p>
              <span className="font-bold">Rating:</span> {data.rating || "No"}
            </p>
            <p>
              <span className="font-bold">Season:</span> {data.season || "No"}
            </p>
            <p>
              <span className="font-bold">Score:</span> {data.score || "No"}
            </p>
            <p>
              <span className="font-bold">Source:</span> {data.source || "No"}
            </p>
            <p>
              <span className="font-bold">Type:</span> {data.type || "No"}
            </p>
            <p className="font-semibold text-amber-300">
              Genres:{" "}
              <span className="text-white">
                {data.genres.map((g) => g.name).join(", ")}
              </span>
            </p>
          </div>

          {/* Description Section */}
          <div className="detailInfo lg:w-[300px] p-6 rounded-xl lg:min-h-[465px]">
            <div className="flex items-center justify-between">
              <button className="px-6 py-2 bg-gradient-to-r from-pink-500 to-blue-400 text-white font-semibold rounded-lg mb-3">
                Description
              </button>
            </div>
            <p className="text-sm">{data.synopsis?.slice(0, 600)}...</p>
          </div>
        </div>

        {/* Trailer Section */}
        <AnimeTrailer
          embedUrl={data.trailer?.embed_url || data.trailer?.url}
          showTrailer={showTrailer}
          toggleTrailer={() => setShowTrailer((prev) => !prev)}
        />
      </div>
    </>
  );
};

export default DetailPage;
