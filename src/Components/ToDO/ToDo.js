import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './ToDo.module.scss';

function ToDo() {

    const [task, setTask] = useState([])
    const [name, setName] = useState("")
    const [Des, setDes] = useState("")
    const [popup, setPopup] = useState(false);


    return <div className={style.wrapper}>
        {popup ?
            <div className={style.popup}>
                <div className={style.PWrapper}>
                    <div className={style.head}>Add your Task</div>
                    <div className={style.subHead}>Track your Daily progress</div>

                    <div className={style.name}>Name This Task</div>
                    <input type="text" placeholder='Task Name' onChange={(e) => setName(e.target.value)} />
                    <div className={style.name}>Add Description</div>
                    <input type="text" placeholder='Description' onChange={(e) => setDes(e.target.value)} />
                    <div className={style.btn} onClick={() => {
                        setTask([...task, [name, Des]]);
                        setName("")
                        setDes("")
                        setPopup(false);
                    }} >Add Task</div>
                </div>
            </div>
            : null}


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
                <div className={style.head}>Tasks of the Day</div>
                <div className={style.t1}>
                    <div className={style.subHead}>Leetcode Questions</div>
                    <div className={style.para}>Complete 5 Questions</div>
                </div>
                <div className={style.t2}>
                    <div className={style.subHead}>Leetcode Questions</div>
                    <div className={style.para}>Complete 5 Questions</div>
                </div>

                {task.map((data, idx) => {
                    if (idx % 2 == 0) {
                        return (
                            <div className={style.t1}>
                                <div className={style.subHead}>{data[0]}</div>
                                <div className={style.para}>{data[1]}</div>
                            </div>
                        )

                    } else {
                        return (
                            <div className={style.t2}>
                                <div className={style.subHead}>{data[0]}</div>
                                <div className={style.para}>{data[1]}</div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className={style.l2}>
                <div className={style.u1}>
                    <div>ALL</div>
                    <div>DONE</div>
                    <div>NOT DONE</div>
                </div>
                <div className={style.u2} onClick={() => setPopup(true)} >ADD TASK</div>
            </div>
        </div>
    </div>;
}

export default ToDo;
