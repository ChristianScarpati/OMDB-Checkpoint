import React, { useState } from "react"; //use state retorna un valor de estado y retorna para actualizarla
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getMoviesRequest } from "../state/movies";
import {RiSearchLine} from 'react-icons/ri'
import { FormControl } from "react-bootstrap";


const Search = () => {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = (e) => {
        setInput(e.target.value)                            //el input es lo que va a escribir la persona
        dispatch(getMoviesRequest(e.target.value))          //para que mande el input al backend y haga la búsqueda
    }



  return (
    <div>
        <Link to="/search">
        <FormControl 
        type='text'
        placeholder='Buscar películas, solo teens redheads'            
        value={input}
        onChange={handleChange}
        className="mr-sm-2"
        />
        <RiSearchLine />        
      </Link>  
     
    </div>

  );
};

export default Search;
