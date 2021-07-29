import React from "react";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { postUser } from "../state/user";
//vista haces click y nos lleva a un form
import style from '../styles/form.module.css'
import styleButton from '../styles/registerButton.module.css'


const RegisterView = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [email, setEmail] = useState('')

    const dispatch = useDispatch()
     
    

const handleClick = () => {

    console.log("se hizo el onSUbmit",
     {
        username: username,
        email: email,
        password: password
    })
    dispatch(postUser({ 
        name: username,
        email: email,
        password: password
    }))
     console.log("la data se despatcho")
}

  return (
    <div className={style.form}>
          <Form >
        <Form.Group controlId="formBasicText"  >
          <Form.Label color="white">Name</Form.Label>
          <Form.Control 
          type="text"
          className={style.inputs}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="nombre" 
          />
          <Form.Text className="text-muted"  >
            We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

        
          <Form.Group controlId="formBasicEmail"  >
          <Form.Label color="white">Email address</Form.Label>
          <Form.Control 
          type="email" 
          className={style.inputs}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>
        

          <Form.Group controlId="formBasicPassword">
          <Form.Label color="white">Password</Form.Label>
          <Form.Control 
          className={style.inputs}
          type="password" 
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password" />
         </Form.Group>


        <div          
>
        <button 
        className={styleButton.glow_on_hover}
         onClick={handleClick}
         
           >  
            Register
        </button>
        </div>
        </Form>
    </div>

  );
};

export default RegisterView;