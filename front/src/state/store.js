import { configureStore } from "@reduxjs/toolkit"; //config automatica de redux
import { logger } from "redux-logger";
import moviesReducer from './movies'


const store = configureStore({
    
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  reducer: {
      movies: moviesReducer //accedemos al objeto movies
  },
});


export default store;
