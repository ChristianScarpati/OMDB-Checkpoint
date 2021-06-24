import React from "react";
import { Form, Button } from "react-bootstrap";
//vista haces click y nos lleva a un form
import { useState } from "react";
import { useDispatch } from "react-redux";
import { loginUser } from "../state/user";
import { useHistory } from 'react-router-dom'
//import useLocalStorage from "../hooks/useLocalStorage";
import style from '../styles/navbar.module.css'
import styles from '../styles/form.module.css'




const LoginView = () => { 
  //useLocalStorage([])
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const history = useHistory()

  const handleClick = () => {
    dispatch(
      loginUser({
        email: email,
        password: password,
      }),
      history.push("/me")
    );
  };


  
  return (
    <div className={styles.form}>
      <Form >
        <Form.Group controlId="formBasicEmail" > 
          <Form.Label color="white">Email address</Form.Label>
          <Form.Control
           className={styles.inputs}
            type="email"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label color="white">Password</Form.Label>
          <Form.Control
            className={styles.inputs}
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group>
        <Button 
        className={styles.button}
        onClick={handleClick}>
          login
        </Button>
      </Form>
    </div>
  );
};

export default LoginView;
