import React from 'react';
import style from './Homepage.module.scss'
function Homepage() {
    return <div className={style.wrapper}>
        <div className={style.left}>
            <ul>
                <li>Home</li>
                <li>My Wallet</li>
                <li>Habbit Tracker</li>
                <li>Food Tracker</li>
                <li>NotesHub</li>
                <li>Sign Out</li>
            </ul>
        </div>
        <div className={style.right}>
            <div className={style.h1}>
                <div></div>
            </div>
            <div className={style.h2}>
                <div className={style.l1}>
                    <div className={style.u1}>
                        <div>
                            <div>Go to Page</div>
                        </div>
                    </div>
                    <div className={style.u2}>
                        <div>
                            <div>Go to Page</div>
                        </div>
                    </div>
                </div>
                <div className={style.l2}>
                    <div className={style.u1}>
                        <div></div>
                    </div>
                    <div className={style.u2}>
                        <div></div>
                    </div>
                </div>

            </div>
            <div className={style.h3}>
                <div className={style.l1}>

                </div>
                <div className={style.l2}>
                    <div>
                       
                    </div>
                </div>
            </div>
            <div className={style.h4}>
                <div className={style.l1}>
                    <div>
                    <div>NOTESHUB</div>
                    </div>
                </div>
                <div className={style.l2}>
                    <div>
                        <div>Go to Page</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Homepage;
