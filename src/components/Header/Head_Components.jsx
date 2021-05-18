import React from 'react';
import logo from './logo1.png';
import s from './Header.module.css';
const Logo= () => {
    return (
    <div className={s.logo}>
        <img src={logo} className={s.logo_nav}></img>
    </div>
    )
}

const Btn= () => {
    return (
    <div className={s.btn}>
        <button>Register</button>
    </div>
    )
}

const Text = () => {
    return(
        <div className={s.text}>
            <h1>Freedom you deserve</h1> 
            <h2>Just one click away</h2>
        </div>
    )
}
export {Btn, Logo, Text};