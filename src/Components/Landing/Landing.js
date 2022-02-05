import React from 'react';
import style from './Landing.module.scss'
import icon from '../../Assets/icon.png'
function Landing() {
  return <div className={[style.wrapper, 'data'].join(" ")}>
    <div className={style.h1}></div>
    <div className={style.h2}></div>
    <div className={style.h3}></div>
    <div className={style.h4}></div>
  </div>;
}

export default Landing;
