import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./features/movies/movieSlice";
import peopleSlice from "./features/people/peopleSlice";
import genresSlice from "./features/movies/genresSlice";
import creditsSlice from "./features/creditsSlice";
import createSagaMiddleware from "redux-saga";
import saga from "./saga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    movies: movieSlice,
    people: peopleSlice,
    genres: genresSlice,
    credits: creditsSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(saga);
