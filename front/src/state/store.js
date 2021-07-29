//guardamos la data global.
import { configureStore } from "@reduxjs/toolkit"; //config automatica de redux //simplifica la creación de tiendas
import { logger } from "redux-logger";          

import moviesReducer from "./movies";
import movieReducer from "./movie";
import userReducer from "./user";
import reducerFav from "./favourites";


const store = configureStore({
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),

  reducer: {

    movies: moviesReducer, //accedemos al objeto movies
    movie: movieReducer,
    user: userReducer,
    favourites: reducerFav,
    
  },
});

export default store;




/*                                STORE

Almacenar el estado global de la aplicación
Dar acceso al estado mediante store.getState()
Permitir que el estado se actualice mediante store.dispatch()
Registrar listeners mediante store.subscribe(listener)

 */

/*                                 REDUCERS
Los REDUCERS son funciones puras que reciben el estado actual de la aplicación y la acción a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual
 */