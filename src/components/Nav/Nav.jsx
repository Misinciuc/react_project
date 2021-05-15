import React from 'react';
import './Nav.css';
const Nav = () => {
    return (
        <nav className="side_bar">
        <ul className="list_item">
          <li>
            <a href ="#">Profile</a>
          </li>
          <li>
            <a href ="#">Messages</a>
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