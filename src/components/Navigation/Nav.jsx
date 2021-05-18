import React from 'react';
import s from './Nav.module.css';
const Nav = () => {
    return (
        <nav className={s.side_bar}>
        <ul className={s.list_item}>
          <li>
            <a href ="profile">Profile</a>
          </li>
          <li>
            <a href ="messages">Messages</a>
          </li>
          <li>
            <a href ="#">News</a>
          </li>
          <li>
            <a href ="#">Music</a>
          </li>
          <li>
            <a href ="#">Settings</a>
          </li>
        </ul>
      </nav>
    )
}
export default Nav;