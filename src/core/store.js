import { configureStore } from "@reduxjs/toolkit";
import moviesSlice from "../features/movies/moviesSlice";
import peopleSlice from "../features/people/peopleSlice";
import genresSlice from "../features/movies/genresSlice";
import creditsSlice from "../features/creditsSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    people: peopleSlice,
    genres: genresSlice,
    credits: creditsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);
