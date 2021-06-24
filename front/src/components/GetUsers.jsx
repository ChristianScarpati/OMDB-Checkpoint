import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUsers } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import style from '../styles/getUsers.module.css'


const GetUsers = () => {
  
  const users = useSelector((state) => state.user[1]) //tabla bd


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users, "soy user")
  
  return (


  <div >
    {users?users.map((p) => {

    return (

    <div className={style.tabla}>
      <div class="row" className={style.color}>

        <div class="col-sm-4" > Nombre: {p.name} </div>
            
        <div class="col-sm-4" > #: {p.id} </div>

        <div class="col-sm-4" > E-mail: {p.email} </div>

      </div>
    </div>

)}) : null }


  </div>
  )
};

export default GetUsers;

  {/*   <Table striped bordered hover >
  <thead>
    <tr>
      <th className={style.color}>Nombre</th>
      <th className={style.color}>{p.name}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td className={style.color}> ID: {p.id}</td>
      <td className={style.color}> E-mail: {p.email}</td>
  
    </tr>
  </tbody>
</Table> */}