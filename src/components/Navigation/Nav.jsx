import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './Nav.module.css';

const Nav = () => {
    return (
        <nav className={style.side_bar}>
        <ul className={style.list_item}>
          <li>
            <NavLink to ="Content" activeClassName={style.activeNav}>Profile</NavLink>
          </li>
          <li>
            <NavLink to ="Messages" activeClassName={style.activeNav}>Messages</NavLink>
          </li>
          <li>
            <NavLink to ="News" activeClassName={style.activeNav}>News</NavLink>
          </li>
          <li>
            <NavLink to ="Music" activeClassName={style.activeNav}>Music</NavLink>
          </li>
          <li>
            <NavLink to ="Set" activeClassName={style.activeNav}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    )
}
export default Nav;