import { delFav, addFav, getFav } from "../state/favourites";
import React, {useEffect} from "react";
import {useSelector, useDispatch} from 'react-redux'
import {Link} from 'react-router-dom'
import { getSingleUser } from "../state/user";

/* /user = const getSingleUser */


const Favourites = () => {

    const user = useSelector(state => state.user)
    const favorites = useSelector(state => state.favorites)
    const loggUse = useSelector (state => state.loggUse)
    const MovieView = useSelector(state => state.MovieView) 
    const dispatch = useDispatch()

    useEffect (() => {
        dispatch(getSingleUser())
    }, [])

    const movie = {
        userFrom : movie,
        movieId: loggUse,
        movieTitle: MovieView.Title,
        movieImage: MovieView.Poster
    }

    const addClick = () => {
        dispatch(addFav(movie))
    }

    const removeClick = () => {
        dispatch(delFav(movie))
    }

    const GetUser = () => {
        dispatch(getFav())
    }
        
console.log(loggUse.username, "probando user")

    return(

        <>
            <div>
            <h1> Add to Favourites </h1>
            <button onClick={addClick} > Submit </button>
            </div>

            <h1>Favorites</h1>
            <button onClick={GetUser}> Submit  </button>

            <div>
                {loggUse.username && favorites.length>0 ? favorites.filter(c => c.userFrom===loggUse.username).map((c) => 

                    (<div key={c.movieId} >
                        <Link
                        onClick={() => addClick(c.movieId)}
                        to={`/movie/:${c.movieId}`} >
                        
                        <h3>{c.movieTitle}</h3>
                        <img src={c.movieImage} 
                        width="130" 
                        height="150" />
                        </Link>

                    </div>)
                ) : null }

            </div>

             <h1>Delete From Favourites</h1>
             <button 
             onClick={removeClick}> Submit </button>

        </>
    )

}


export default Favourites