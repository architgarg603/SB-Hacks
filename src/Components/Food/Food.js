import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Food.module.scss';

function Food() {

    const [task, setTask] = useState([])
    const [name, setName] = useState("")
    const [Date, setDate] = useState("")
    const [cat, setcat] = useState("Fridge")
    const [popup, setPopup] = useState(false);


    return <div className={style.wrapper}>
        {popup ?
            <div className={style.popup}>
                <div className={style.PWrapper}>
                    <div className={style.head}>Add your Item</div>
                    <div className={style.subHead}>Track your Food</div>

                    <div className={style.name}>Name This Task</div>
                    <input type="text" placeholder='Task Name' onChange={(e) => setName(e.target.value)} />
                    <div className={style.name}>Add Expiry Date</div>
                    <input type="text" placeholder='Description' onChange={(e) => setDate(e.target.value)} />
                    <div className={style.name}>Set Category</div>
                    <div className={style.options} >
                        <div className={cat == 'Fridge' ? style.active : ''} onClick={() => setcat('Fridge')} > Fridge </div>
                        <div className={cat == 'Pantry' ? style.active : ''} onClick={() => setcat('Pantry')}> Pantry</div>
                        <div className={cat == 'Drawer' ? style.active : ''} onClick={() => setcat('Drawer')}> Snack Drawer </div>
                    </div>

                    <div className={style.btn} onClick={() => {
                        setTask([...task, [name, Date, cat]]);
                        setName("")
                        setDate("")
                        setcat('Fridge')
                        setPopup(false);
                    }} >Add Task</div>
                </div>
            </div>
            : null}


        <div className={style.left}>
            <ul>
                <Link to="/home">
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
            <div className={style.fridge}>
                <div className={style.head} >Fridge</div>
                <div className={style.subHead} >Expired</div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>Cheese</div>
                    <div className={style.para}>Expired</div>
                </div>
                <div className={style.subHead} >Expiring Soon</div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>Salmon</div>
                    <div className={style.para}>Expiring on 10/02/2022</div>
                </div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>Butter</div>
                    <div className={style.para}>Expiring on 15/02/2022</div>
                </div>
                {task.map((data) => {
                    if (data[2] != 'Fridge') return "";
                    return (
                        <div className={style.t1}>
                            <div className={style.subHeadd}>{data[0]}</div>
                            <div className={style.para}>Expiring on {data[1]}</div>
                        </div>
                    )
                })}
            </div>
            <div className={style.pantry}>
                <div className={style.head} >Pantry</div>
                <div className={style.subHead} >Expired</div>
                <div style={{ minHeight: "70px", margin: "10px 0" }}></div>
                <div className={style.subHead} >Expiring Soon</div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>Bread</div>
                    <div className={style.para}>Expiring on 8/02/2022</div>
                </div>
                {task.map((data) => {
                    if (data[2] != 'Pantry') return "";
                    return (
                        <div className={style.t1}>
                            <div className={style.subHeadd}>{data[0]}</div>
                            <div className={style.para}>Expiring on {data[1]}</div>
                        </div>
                    )
                })}
            </div>
            <div className={style.drawer}>
                <div className={style.btn} onClick={() => setPopup(true)} >Add</div>
                <div className={style.head} >Snack Drawer</div>
                <div className={style.subHead} >Expired</div>
                <div style={{ minHeight: "70px", margin: "10px 0" }}></div>
                <div className={style.subHead} >Expiring Soon</div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>Pringles</div>
                    <div className={style.para}>Expiring on 10/02/2022</div>
                </div>
                <div className={style.t1}>
                    <div className={style.subHeadd}>KitKat</div>
                    <div className={style.para}>Expiring on 22/10/2022</div>
                </div>
                {task.map((data) => {
                    if (data[2] != 'Drawer') return "";
                    return (
                        <div className={style.t1}>
                            <div className={style.subHeadd}>{data[0]}</div>
                            <div className={style.para}>Expiring on {data[1]}</div>
                        </div>
                    )
                })}
            </div>

        </div>
    </div>;
}

export default Food;
