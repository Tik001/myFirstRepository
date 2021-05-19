import React from 'react';
import n from './Nav.module.css'
import { NavLink } from 'react-router-dom'
const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <NavLink to='/profile' activeClassName={n.activeLink}>Profile</NavLink>
            </div>
            <div className={n.item}>
                <NavLink to='/dialogs' activeClassName={n.activeLink}>Messages</NavLink>
            </div>
            <div className={n.item}>News</div>
            <div className={n.item}>Music</div>
            <div className={n.item}>Settings</div>
        </nav>
    )
}
export default Nav;
