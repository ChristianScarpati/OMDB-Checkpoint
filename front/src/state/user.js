import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";
import axios from 'axios'

    // ESTAS SON RUTAS DEL BACKEND DE MI API


//ACTION redux CREAMOS USUARIOS
export const postUser = createAsyncThunk('POST_USER', (user) => {   //mandamos un user al backend que enviamos desde el FRONT

    
    return axios.post('http://localhost:3001/api/users', user)
    .then((res) => res.data)
    .catch((err) => (err))
})

//Loguear Usuario
export const loginUser = createAsyncThunk('LOGIN_USER', (user) => {   

    
    return axios.post('http://localhost:3001/api/users/login', user)
    .then((res) => res.data)
    .catch((err) => ((err, "falló login")))
})

//Desloguear Usuario
export const logOutUser = createAsyncThunk('LOGOUT_USER', () => {   

    
    return axios.post('http://localhost:3001/api/users/logout')
    .then((res) => res.data)
    .catch((err) => (err))
})

//me
export const sessionUser = createAsyncThunk('SESSION_USER', () => {   

    return axios.get('http://localhost:3001/api/users/me')
    .then((res) => res.data)
    .catch((err) => (err))
})


//TRAEMOS USUARIOS
export const getUsers = createAsyncThunk('GET_USERS', () => {

    return axios({      
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:3001/api/users'      
    })
    .then((res) => res.data)
    .catch((err) => (err))
})

export const getSingleUser = createAsyncThunk('GET_SINGLEUSER', () => {

    return axios({      
        method: 'GET',
        withCredentials: true,
        url: 'http://localhost:3001/api/user'      
    })
    .then((res) => res.data)
    .catch((err) => (err))
})


// Esto es un REDUCER  : Trae un usuario
const userReducer = createReducer([], {

    //postUser es SIN FULFILLED sino no funciona
    [loginUser.fulfilled]: (state, action) => [state, action.payload],
    [postUser]: (state, action) => [state, action.payload],
    [getUsers.fulfilled]: (state, action) => [state, action.payload], 
    [getSingleUser.fulfilled]: (state, action) => [state, action.payload],
    [logOutUser.fulfilled]: (state, action) => [state, action.payload],
    [sessionUser.fulfilled]: (state, action) => [state, action.payload],

    

})

export default userReducer