import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import {
  setAiringAnime,
  setPopularAnime,
  setUpcomingAnime,
  setanimeWholeData,
} from "../redux/slices/animeDataSlice";

const useFetchApi = () => {
  const dispatch = useDispatch();

  async function fetchAnime(endpoint, action) {
    try {
      const response = await fetch(`https://api.jikan.moe/v4/${endpoint}`);
      //   https://api.jikan.moe/v4/seasons/now?sfw
      if (!response.ok) {
        throw new Error("data is not fetched properly");
      } else {
        const data = await response.json();
        // console.log(data);
        dispatch(action(data));
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  useEffect(() => {
    fetchAnime("anime", setanimeWholeData); // WHOLE
    fetchAnime("top/anime", setPopularAnime); // POPULAR
    fetchAnime("seasons/now", setAiringAnime); // AIRING
    fetchAnime("seasons/upcoming", setUpcomingAnime); // UPCOMING
  }, []);

  return null;
};

export default useFetchApi;
