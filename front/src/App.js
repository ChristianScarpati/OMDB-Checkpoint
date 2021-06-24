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
import LoginView from "./components/LoginView";
import RegisterView from "./components/RegisterView";
import Favourites from "./containers/Favorites";
import GetUsers from "./components/GetUsers";


            //RUTAS DEL FRONT, RUTAS DE RENDERIZACION DE COMPOENTNE

function App() {

//me
  
  return (
    
      <div>
        <Navbar2 />


        <Route exact path='/movie/:id' component={MovieView}/>
        <Route exact path='/users' component={GetUsers}/>
        <Route exact path='/search' component={GetMovies} />
        <Route exact path='/login' component={LoginView}/>
        <Route exact path='/register' component={RegisterView}/>
        <Route exact path='/' component={Carrousel2} />
        
        <Footer2 />
      </div>
      
  );
}

export default App;
