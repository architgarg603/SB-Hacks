import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import style from './Homepage.module.scss'
function Homepage() {
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
    const history = useNavigate();
    return <div className={style.wrapper}>
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
            <div className={style.h1}>
                <div></div>
            </div>
            <div className={style.h2}>
                <div className={style.l1}>
                    <Link to="/wallet">
                        <div className={style.u1}>
                            <div>
                                <div>Go to Page</div>
                            </div>
                        </div>
                    </Link>
                    <Link to="/food">

                        <div className={style.u2}>
                            <div>
                                <div>Go to Page</div>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className={style.l2}>
                    <Link to="/wallet">

                        <div className={style.u1}>
                            <div></div>
                        </div>
                    </Link>
                    <Link to="/food">

                        <div className={style.u2}>
                            <div></div>
                        </div>
                    </Link>
                </div>

            </div>
            <div className={style.h3}>
                <div className={style.l1} onClick={() => history("/habbit")}>
                </div>

                <div className={style.l2}>

                    <div onClick={() => history("/habbit")}>

                    </div>

                </div>
            </div>
            <div className={style.h4}>
                <div className={style.l1} onClick={() => history("/notes")}>
                    <div>
                        <div>NOTESHUB</div>
                    </div>
                </div>
                <div className={style.l2} onClick={() => history("/notes")}>
                    <div>
                        <div>Go to Page</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Homepage;
