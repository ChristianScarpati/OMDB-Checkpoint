//Toda la lógica 
import React from "react";
import {Route} from 'react-router-dom'
import {Switch} from 'react-router'
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar2 from "./components/Navbar";
import Carrousel2 from "./components/Carrousel2";
import Footer2 from "./components/Footer2";
import GetMovies from "./components/GetMovies";
import MovieView from "./components/MovieView";
import LoginView from "./components/LoginView";
import RegisterView from "./components/RegisterView";
import GetUsers from "./components/GetUsers";


            //RUTAS DEL FRONT, RUTAS DE RENDERIZACION DE COMPOENTNE

function App() {

//me
  
  return (
    
      <div>

        <Navbar2 />

      <Switch>

        <Route exact path='/movie/:id' component={MovieView}/>
        <Route exact path='/users' component={GetUsers}/>
        <Route exact path='/search' component={GetMovies} />
        <Route exact path='/login' component={LoginView}/>
        <Route exact path='/register' component={RegisterView}/>
        <Route exact path='/' component={Carrousel2} />

        {LoginView ? (
          <>

          </>
        ) : null}

        </Switch>

        
      </div>
      
  );
}

export default App;
