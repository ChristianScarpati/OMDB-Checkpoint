import { configureStore } from "@reduxjs/toolkit"; //config automatica de redux
import { logger } from "redux-logger";
import moviesReducer from './movies'
import movieReducer from './movie'

const store = configureStore({
    
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  reducer: {
      movies: moviesReducer, //accedemos al objeto movies
      movie: movieReducer
  },
});


export default store;
