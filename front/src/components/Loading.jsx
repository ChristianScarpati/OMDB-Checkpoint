import React from "react";
import style from '../styles/loading.module.css'


const Loading = () => {
  return (
    <div>
      <div className={style.ldsspinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loading