import React from "react";
import { useDispatch } from "react-redux";
import { logOutUser } from "../state/user";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import style from '../styles/navbar.module.css'
import styleButton from '../styles/registerButton.module.css'

const LogOut = () => {

  const history = useHistory();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logOutUser());
    history.push("/");
  };


  return (
    <div>
      <button 
      onClick={handleClick}
       /* variant="danger" */
       className={styleButton.glow_on_hover} >
        Logout
      </button>
    </div>
  );
};

export default LogOut;
