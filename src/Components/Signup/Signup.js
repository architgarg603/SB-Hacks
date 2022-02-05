import React from 'react';
import style from './signup.module.scss'
import img from '../../Assets/signup.png'
import { Link } from 'react-router-dom';
function Signup() {
    return <div className={style.wrapper}>
        <div className={style.left}>
            <img src={img} />
        </div>
        <div className={style.right}>
            <div>
                <div className={style.head}>Register your account</div>
                <div className={style.subHead}>Full Name</div>
                <input type="text" placeholder='Enter Name' />
                <div className={style.subHead}>Phone Number</div>
                <input type="text" placeholder='Enter Phone Number' />
                <div className={style.subHead}>Email</div>
                <input type="text" placeholder='Enter Email' />
                <div className={style.subHead}>Password</div>
                <input type="password" placeholder='Enter Password' />
                <div className={style.btn}>Sign Up</div>
            </div>
            <div className={style.signup}>Already have an account?
                <Link to="/login"> <span>Log In</span></Link>
            </div>
        </div>
    </div>;
}

export default Signup;
