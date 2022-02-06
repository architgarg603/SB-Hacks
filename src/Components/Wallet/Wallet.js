import React from 'react';
import { Link } from 'react-router-dom';
import style from './Wallet.module.scss'
function Wallet() {
  return (
    <div className={style.wrapper}>
      <div className={style.left}>
      <ul>
                <Link to="/">
                    <li>Home</li>
                </Link>
                <Link to="/wallet">
                    <li>My Wallet</li>
                </Link>
                <Link to="/habbit">
                    <li>Habbit Tracker</li>
                </Link>
                <Link to="/food">
                    <li>Food Tracker</li>
                </Link>
                <Link to="/notes">
                    <li>NotesHub</li>
                </Link>
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
