import React from 'react';
import { Link } from 'react-router-dom';
import style from './Notes.module.scss'
function Notes() {
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
