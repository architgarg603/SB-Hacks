import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import style from './Notes.module.scss'
function Notes() {
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
                <div className={[style.l1, "data"].join(" ")}>
                    <div className={style.head}>Notes Hub</div>
                    <input type="text" className={style.search} placeholder='Search Subject' />
                    <div className={style.subHead}>Latest Notes</div>
                    <div className={style.sub}>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                    </div>
                    <div className={style.subHead}>Most Viewed</div>
                    <div className={style.sub}>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                        <a href='https://drive.google.com/file/d/1d1m2RKTStYTlzZG5O9QJebRuqIFburGs/view?usp=sharing' target="_blank">
                            <div></div>
                        </a>
                    </div>
                </div>
                <div className={style.l2}>
                    <div></div>
                </div>

            </div>
        </div >
    )
}

export default Notes;
