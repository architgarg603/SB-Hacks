import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Wallet.module.scss'
function Wallet() {
  const location = useLocation();
  const path = location.pathname;

  const nav = (link, name) => {
    return (
      <Link to={link}>
        <li style={{
          background: path == link ? "black" : "white",
          color: path == link ? "white" : "black",
          borderRadius: "15px"
        }} >{name}</li>
      </Link>
    )
  }
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
        <ul>
          {nav("/wallet", "My Wallet")}
          {nav("/habbit", "Habit Tracker")}
          {nav("/food", "Food Tracker")}
          {nav("/notes", "NotesHub")}
          {nav("/todo", "Todo")}
        </ul>
      </div>
      <div className={style.right}>
        <div className={[style.l1, style.data].join(" ")}>
          <div className={style.head}>My Wallet</div>
          <div className={style.img}></div>
        </div>
        <div className={style.l2}>
          <div></div>
        </div>

      </div>
    </div >
  )
}

export default Wallet;
