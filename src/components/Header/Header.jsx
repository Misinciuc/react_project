import React from 'react';
import s from './Header.module.css';
import {Logo, Btn, Text} from './Head_Components';

const Header = () => {
    return (
    <div className={s.block}>
        <Logo/>
        <Text/>
        <Btn/>
    </div>
    )
}

export default Header;