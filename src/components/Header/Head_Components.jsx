import React from 'react';
import logo from './logo1.png';
import style from './Header.module.css';

const Logo= () => {
    return (
    <div className={style.logo}>
        <img src={logo} className={style.logo_nav}></img>
    </div>
    )
}

const Btn= () => {
    return (
    <div className={style.btn}>
        <button>Register</button>
    </div>
    )
}

const Text = () => {
    return(
        <div className={style.text}>
            <h1>Freedom you deserve</h1> 
            <h2>Just one click away</h2>
        </div>
    )
}
export {Btn, Logo, Text};