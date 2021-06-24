import React, { useState, useEffect } from "react";
import axios from "axios";
import { getUsers } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";



const GetUsers = () => {
  
  const users = useSelector((state) => state.user[1]) //tabla bd


  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  console.log(users, "soy user")
  
  return (


  <div>
    {users?users?.map((p) => {

    return (
    <div>
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>{p.name}</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{p.id}</td>
      <td>{p.email}</td>
  

    </tr>
  </tbody>
</Table>
</div>

)}) : null }


  </div>
  )
};

export default GetUsers;
