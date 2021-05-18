import React from 'react';
import s from './Nav.module.css';
const Nav = () => {
    return (
        <nav className={s.side_bar}>
        <ul className={s.list_item}>
          <li>
            <a href ="Content">Profile</a>
          </li>
          <li>
            <a href ="Messages">Messages</a>
          </li>
          <li>
            <a href ="News">News</a>
          </li>
          <li>
            <a href ="Music">Music</a>
          </li>
          <li>
            <a href ="Set">Settings</a>
          </li>
        </ul>
      </nav>
    )
}
export default Nav;