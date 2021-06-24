import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


        // GET FAV

export const getFav = createAsyncThunk("GET_FAV", (movie) => {

    axios({
        method: "GET",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula agregada"))
}) 

    //ADD FAV

export const addFav = createAsyncThunk("FAVORITE_ADD", (movie) => {

    return axios({
        method: "POST",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula agregada!"))
})

    //DELETE FAV

export const delFav = createAsyncThunk("DELETE_ADD", (movie) => {

    return axios({
        method: "DELETE",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula eliminada"))
})

const reducerFav = createReducer([], {

    [delFav.fulfilled]: (state, action) => [state, action.payload],
    [addFav.fulfilled]: (state, action) => [state, action.payload],
    [getFav.fulfilled]: (state, action) => [state, action.payload],
})

export default reducerFav