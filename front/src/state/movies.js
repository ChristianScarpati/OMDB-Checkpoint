import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';

//cada vez q querramos generar un pedido de datos
// action de peliculas

export const getMoviesRequest = createAsyncThunk('MOVIES', (input) => { //input es superman ṕor ej getMovies

    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&s=${input}&plot=short%60`)
    .then(peliculas => peliculas.data)

})

//la data me llega en formato de array
const moviesReducer = createReducer([], {

    [getMoviesRequest.fulfilled]: (state, action) => [state, action.payload] //carga de datos y la mandas al store

})

export default moviesReducer