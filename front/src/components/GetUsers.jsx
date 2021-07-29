import React, {useEffect } from "react";
import { getUsers } from "../state/user";
import { useDispatch, useSelector } from "react-redux";
import style from '../styles/getUsers.module.css'


const GetUsers = () => {
  
  const users = useSelector((state) => state?.user[0]) //tabla bd

  console.log(users, "users")

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  console.log(users, "soy user")
  
  return (

  <div >
    {users ? users.map((p) => {

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

  