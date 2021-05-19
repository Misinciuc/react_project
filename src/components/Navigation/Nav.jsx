import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Nav.module.css';
const Nav = () => {
    return (
        <nav className={s.side_bar}>
        <ul className={s.list_item}>
          <li>
            <NavLink to ="Content" activeClassName={s.activeNav}>Profile</NavLink>
          </li>
          <li>
            <NavLink to ="Messages" activeClassName={s.activeNav}>Messages</NavLink>
          </li>
          <li>
            <NavLink to ="News" activeClassName={s.activeNav}>News</NavLink>
          </li>
          <li>
            <NavLink to ="Music" activeClassName={s.activeNav}>Music</NavLink>
          </li>
          <li>
            <NavLink to ="Set" activeClassName={s.activeNav}>Settings</NavLink>
          </li>
        </ul>
      </nav>
    )
}
export default Nav;