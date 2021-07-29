import React from "react";
import { useSelector } from "react-redux"; //selecionar estados de redux que estan volando
import {
  Card,
  Button,
 // ListGroup,
 // Figure,
 // Image,
 // Caption,
} from "react-bootstrap";

import styles from "../styles/footer.module.css";
import style from '../styles/getmovies.module.css'

const MovieView = () => {

  const movie = useSelector((state) => state?.movie[1] ? state.movie[1] : null);

                    
  return (

    <div  >    {/* style={{ width: "18rem", justifyContent: "center", displ }} */}
        <div className={style.movieCenter}>
        {movie?<div  > <Card  style={{ width: "18rem", height: "auto", display:"flex", alignItems: "center", justifyContent:"center", textAlign:"center"}} className={style.movieCenter} >
          
        <Card.Img  
        
        variant="top"
        src={movie.Poster} 
        width='200px'
         height='auto' 
         />
        <Card.Body className={style.movieCenter} >
          <Card.Title >{movie.title}</Card.Title>
          <Card.Text>
            { movie.Plot }
            { movie.Directors }
            { movie.Actors }
            { movie.Year }
            { movie.Genre }
          </Card.Text>
          <Button className={styles.button}  >Favoritos</Button>
        </Card.Body>
       
       </Card> </div> : null} </div>
       

       <div />
      


    </div>
  );
};

export default MovieView;
