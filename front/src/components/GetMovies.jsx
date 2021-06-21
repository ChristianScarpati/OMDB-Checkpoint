import { getMoviesRequest } from "../state/movies";
import { useDispatch, useSelector } from "react-redux";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../state/movie";

// DISPATCH =  envia pedidos y envisos al axios/

const GetMovies = () => {
  const movies = useSelector((state) => state.movies); //cargamos el estado con esto
  const dispatch = useDispatch(); //para traer o mandar datos con axios
  const successSearch = movies[1]?.Search ? movies[1].Search : null   //Si movies existe entonces accede a movies.search. SI existe, que traiga las peliculas, sino null
  

  console.log(successSearch, "Busqueda Exitosa")
  const handleClick = (id) => {
    console.log(id, "soy id")
    dispatch(getMoviesRequest(id))
    dispatch(getMovie(id))    //solo 1 movie
  }

  return (
    
    <div>
        {successSearch ?(
           successSearch.slice(1).map((p) => {
              return (
                <div key={p.imdbID} >
                  <Link
                    onClick={() => handleClick(p.imdbID)}
                    to={`/movie/:${p.imdbID}`}
                  >
                    <h3> {p.Title} </h3>
                    <img src={p.Poster} width="110" height="130" />
                  </Link>
                </div>
              )
            })
          ): null }
      </div>
  )
};

export default GetMovies;
