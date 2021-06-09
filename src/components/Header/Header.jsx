import React from "react";
import style from "./Header.module.css";
import { Logo, Btn, Text } from "./Head_Components";

const Header = () => {
    return (
        <div className={style.block}>
            <Logo />
            <Text />
            <Btn />
        </div>
    );
};

export default Header;
