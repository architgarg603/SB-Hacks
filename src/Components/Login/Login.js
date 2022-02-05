import React from 'react';
import style from './Login.module.scss'
import img from '../../Assets/login.png'
import { Link } from 'react-router-dom';
function Login() {
    return <div className={style.wrapper}>
        <div className={style.left}>
            <img src={img} />
        </div>
        <div className={style.right}>
            <div>
                <div className={style.subHead}>Welcome back</div>
                <div className={style.head}>Login to your account</div>
                <div className={style.subHead}>Email</div>
                <input type="text" placeholder='Enter Email' />
                <div className={style.subHead}>Password</div>
                <input type="password" placeholder='Enter Password' />
                <div className={style.btn}>Login Now</div>
            </div>
            <div className={style.signup}>Dont have account?
                <Link to="/signup"> <span>Signup</span></Link>
            </div>
        </div>
    </div>;
}

export default Login;
