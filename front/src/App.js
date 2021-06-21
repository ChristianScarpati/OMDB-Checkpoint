//Toda la lógica 
import React from "react";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from "./components/Navbar";
import Carrousel2 from "./components/Carrousel2";
import Footer2 from "./components/Footer2";
import GetMovies from "./components/GetMovies";
import MovieView from "./components/MovieView";
import {Route} from 'react-router-dom'
import moviesReducer from "./state/movies";
import Search from "./containers/Search";



function App() {
  return (
    
    <div>
        
        <Navbar2 />
        <Route exact path='/movie/:id' component={MovieView}/>
        <GetMovies />
        <Route exact path='/' component={Carrousel2}/>
        <Route exact path='/search' component={GetMovies}/>
        <Footer2 />

      </div>
      

  );
}

export default App;
