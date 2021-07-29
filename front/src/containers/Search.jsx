import React, { useState } from "react"; //use state retorna un valor de estado y retorna para actualizarla
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getMoviesRequest } from "../state/movies";
import { RiSearchLine } from "react-icons/ri";
import { FormControl } from "react-bootstrap";
import style from '../styles/search.module.css'


const Search = () => {

  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    setInput(e.target.value);                   //el input es lo que va a escribir la persona
    dispatch(getMoviesRequest(e.target.value)); //para que mande el input al backend y haga la búsqueda
  };

  return (
    <div   >
      <Link to="/search">
        <span className={style.lupita}>
        <FormControl
          style={{marginBottom:20}}
          type="text"
          placeholder="Buscar películas"
          value={input}
          onChange={handleChange}
          className="mr-sm-2"
        />          
        <RiSearchLine className={style.lupaCenter}/>
        </span>
      </Link>
    </div>
  );
};

export default Search;
