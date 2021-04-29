import React from 'react';
import n from './Nav.module.css'
const Nav = () => {
    return (
        <nav className={n.nav}>
            <div className={n.item}>
                <a href='/profile'>Profile</a>
            </div>
            <div className={n.item}>
                <a href='/dialogs'>Messages</a>
            </div>
            <div className={n.item}>News</div>
            <div className={n.item}>Music</div>
            <br />
            <div className={n.item}>Settings</div>
      </nav>
    )
}
export default Nav;  
