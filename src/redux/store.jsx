import { configureStore } from "@reduxjs/toolkit";
import animeReducer from "./slices/animeDataSlice";




export const store = configureStore({
    reducer:{
        animeData : animeReducer,
        // user : userReducer,
    }
})