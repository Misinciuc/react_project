import React from 'react';
import logo from './logo1.png';
import './Headerlogo.css';

const Header_logo = () => {
    return (
    <div className="main_logo">
        <img src={logo} className="logo_nav"></img>
        </div>
    )
}
export default Header_logo;