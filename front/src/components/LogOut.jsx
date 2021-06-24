import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../state/user";
import { Button } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import style from '../styles/navbar.module.css'

const LogOut = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
    history.push("/");
  };


  return (
    <div>
      <Button 
      onClick={handleClick}
       /* variant="danger" */
       className={style.button} >
        Logout
      </Button>
    </div>
  );
};

export default LogOut;
