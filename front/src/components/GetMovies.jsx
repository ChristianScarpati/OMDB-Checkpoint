import { getMoviesRequest } from "../state/movies";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { Link } from "react-router-dom";
import { getMovie } from "../state/movie";
import style from "../styles/getmovies.module.css";
import { Card, Button } from "react-bootstrap";
// DISPATCH =  envia pedidos y envios al axios/

const GetMovies = () => {

  const movies = useSelector((state) => state.movies); //cargamos el estado con esto
  const dispatch = useDispatch(); //para traer o mandar datos con axios
  const successSearch = movies[1]?.Search ? movies[1].Search : null; //Si movies existe entonces accede a movies.search. SI existe, que traiga las peliculas, sino null

  const handleClick = (id) => {
    dispatch(getMoviesRequest(id));
    dispatch(getMovie(id)); //solo 1 movie
  };

  return (
    <div  className={style.centerMovies}>
      {successSearch
        ? successSearch.slice(1).map((p) => {

            return (
              <div className={style.peliculas} key={p.imdbID}>
                <Link
                  onClick={() => handleClick(p.imdbID)}
                  to={`/movie/:${p.imdbID}`}
                >
                  <Card
                    style={{ width: "15rem", height: "auto", margin: "2rem" }}
                  >
                    <Card.Img variant="top" src={p.Poster} height="auto" />
                    <Card.Body>
                      <Card.Title> {p.Title} </Card.Title>

                      <Button variant="primary">Añadir a Favoritos</Button>
                    </Card.Body>
                  </Card>
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};

export default GetMovies;
