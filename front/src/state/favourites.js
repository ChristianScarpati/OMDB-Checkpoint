import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from "axios";


        // GET FAV

export const GetFav = createAsyncThunk("GET_FAV", (movie) => {

    axios({
        method: "GET",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula agregada"))
}) 

    //ADD FAV

export const AddFav = createAsyncThunk("FAVORITE_ADD", (movie) => {

    return axios({
        method: "POST",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula agregada!"))
})

    //DELETE FAV

export const DelFav = createAsyncThunk("DELETE_ADD", (movie) => {

    return axios({
        method: "DELETE",
        withCredentials: true,
        data: movie,
        url: "http://localhost:3000/favourites"
    })
    .then((res) => alert(res, "Pelicula eliminada"))
})

const ReducerFav = createReducer([], {

    [DelFav.fulfilled]: (state, action) => action.payload,
    [AddFav.fulfilled]: (state, action) => action.payload,
    [GetFav.fulfilled]: (state, action) => action.payload,
})

export default ReducerFav