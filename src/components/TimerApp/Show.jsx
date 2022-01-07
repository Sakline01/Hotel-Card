import React from 'react';
import style from "./Show.module.css"
const Show = ({ count }) => {
  return (
    <div className={style.timer}>
      <span className={style.digits}>
        {("0" + Math.floor((count / 60) % 60)).slice(-2)}:
      </span>
      <span className={style.digits}>
        {("0" + Math.floor(count % 60)).slice(-2)}
      </span>
    </div>
  );
}

export default Show;
