import React from "react";
import { useSelector, dispatch } from "react-redux"; //selecionar estados de redux que estan volando
import {
  Card,
  Button,
 // ListGroup,
 // Figure,
 // Image,
 // Caption,
} from "react-bootstrap";

import styles from "../styles/footer.module.css";


const MovieView = () => {

  const movie = useSelector((state) => state?.movie[1] ? state.movie[1] : null);

  //const successSearch = movies[1]?.Search ? movies[1].Search : null

  return (

    <div >

        {movie?<div> <Card style={{ width: "18rem" }}>
        <Card.Img 
        variant="top"
        src={movie.Poster} 
        width='200px'
         height='auto' />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            { movie.Plot }
            { movie.Directors }
            { movie.Actors }
            { movie.Year }
            { movie.Genre }
          </Card.Text>
          <Button className={styles.button}>Favoritos</Button>
        </Card.Body>
       </Card> </div> : null}

       <div />
      


    </div>
  );
};

export default MovieView;
