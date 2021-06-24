import {createAsyncThunk, createReducer} from '@reduxjs/toolkit';
import axios from 'axios';

//action
export const getMovie = createAsyncThunk('GETMOVIE', (id) => {

   
    return axios.get(`https://www.omdbapi.com/?apikey=20dac387&i=${id}`)
    .then(pelicula => pelicula.data)
})

//reducer
const getMovieReducer = createReducer([], {

    [getMovie.fulfilled]: (state, action) => [state, action.payload]

}) 

export default getMovieReducer