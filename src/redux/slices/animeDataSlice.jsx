import { createSlice } from "@reduxjs/toolkit";

export const animeDataSlice = createSlice({
  name: "anime",
  initialState: {
    popularAnime: [],
    airingAnime: [],
    upcomingAnime: [],
    animeWholeData: [],
    // searchAnime: [],
    selectedAnimeCard: null,
  },
  reducers: {
    setPopularAnime: (state, action) => {
      state.popularAnime = action.payload;
    },
    setanimeWholeData: (state, action) => {
      state.animeWholeData = action.payload;
    },
    setAiringAnime: (state, action) => {
      state.airingAnime = action.payload;
    },
    setUpcomingAnime: (state, action) => {
      state.upcomingAnime = action.payload;
    },
    setSelectedAnimeCard: (state, action) => {
      state.selectedAnimeCard = action.payload;
    },
    // setSearchAnime: (state, action) => {
    //     state.searchAnime = action.payload;  // Set the search results
    //   },
  },
});

export const {
  setPopularAnime,
  setAiringAnime,
  setUpcomingAnime,
  setSelectedAnimeCard,
  setanimeWholeData,
} = animeDataSlice.actions;

export default animeDataSlice.reducer;
