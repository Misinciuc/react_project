import React from 'react';
import logo from './logo1.png';
import s from './Header.module.css';

const Header_logo = () => {
    return (
    <div className={s.main_logo}>
        <img src={logo} className={s.logo_nav}></img>
    </div>
    )
}
export default Header_logo;