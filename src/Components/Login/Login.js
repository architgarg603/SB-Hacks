import React from 'react';
import style from './Login.module.scss'
import img from '../../Assets/login.png'
import { Link, useNavigate } from 'react-router-dom';
function Login() {
    const history = useNavigate();
    return <div className={style.wrapper}>
        <div className={style.left}>
            <img src={img} />
        </div>
        <div className={style.right}>
            <div>
                <div className={style.subHead}>Welcome back</div>
                <div className={style.head}>Login to your account</div>
                <div className={style.subHead} >Email</div>
                <input type="text" placeholder='Enter Email' onChange={(e) => {
                    localStorage.setItem("token", e.target.value);
                }}  />
                <div className={style.subHead}>Password</div>
                <input type="password" placeholder='Enter Password' />
                <div className={style.btn} onClick={()=>{
                    history("/home")
                }}>Login Now</div>
            </div>
            <div className={style.signup}>Dont have account?
                <Link to="/signup"> <span>Signup</span></Link>
            </div>
        </div>
    </div>;
}

export default Login;
