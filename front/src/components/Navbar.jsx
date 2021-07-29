import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/navbar.module.css";
import styleButton from '../styles/navbarButtons.module.css'
import { FaImdb } from "react-icons/fa";
import {
  Navbar
} from "react-bootstrap";
import Search from "../containers/Search";
import LogOutButton from "../components/LogOut";
import { sessionUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";


const Navbar2 = () => {

  const dispatch = useDispatch();

  const Christian3p = useSelector((state) =>
    state.user ? state?.user[1]?.name : null
  );

  useEffect(() => {
    dispatch(sessionUser);
  }, [dispatch]);

  return (


    <div>
      <Navbar className={style.background}>
        <Link to="/">
          <Navbar.Brand href="#home">
          <FaImdb className={style.icon} alt="" />
          
          </Navbar.Brand>
          
        </Link>

        
        <Search />

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div color="white"   > {Christian3p ? Christian3p : null}</div>
        </Navbar.Collapse>

        <Link to="/users">
        <button className={styleButton.glow_on_hover}>
          Usuarios
        </button>
          </Link>


        <Link to="/login">
          <button className={styleButton.glow_on_hover}>
            Login   
          </button>
        </Link>

        <Link to="/register">
          <button className={styleButton.glow_on_hover}>Register</button>
        </Link>

        {Christian3p ? <LogOutButton /> : null}
      </Navbar>
    </div>
  );
};

export default Navbar2;
