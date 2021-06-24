import React from "react";
import { Link } from "react-router-dom";
import style from "../styles/navbar.module.css";
import { FaImdb, FaUser } from "react-icons/fa";
import {
  Navbar,
  //Nav,
  //NavDropdown,
  //Form,
  //FormControl,
  Button,
  //Badge,
} from "react-bootstrap";
import Search from "../containers/Search";
import LogOutButton from "../components/LogOut";
import { sessionUser } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import SessionUser from "./SessionUser";

const Navbar2 = () => {
  const dispatch = useDispatch();

  const Christian3p = useSelector((state) =>
    state.user ? state?.user[1]?.name : null
  );

  useEffect(() => {
    dispatch(sessionUser);
  }, []);

  return (
    <div>
      <Navbar className={style.background}>
        <Link to="/">
          <Navbar.Brand href="#home">
            <FaImdb className={style.icon} />
          </Navbar.Brand>
        </Link>
        <Search />

        
      


        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <div color="white"   > {Christian3p ? Christian3p : null}</div>
        </Navbar.Collapse>

        <Link to="/users">
        <Button>
          <FaUser  />
        </Button>
          </Link>


        <Link to="/login">
          <Button className={style.button} className={style.button}>
            Login
          </Button>
        </Link>

        <Link to="/register">
          <Button className={style.button}>Register</Button>
        </Link>

        {Christian3p ? <LogOutButton /> : null}
      </Navbar>
    </div>
  );
};

export default Navbar2;
