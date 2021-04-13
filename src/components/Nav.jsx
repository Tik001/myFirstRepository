import React from 'react';

const Nav = () => {
    return (
        <nav className='nav'>
            <div>
                <a href='/profile'>Profile</a>
            </div>
            <div>
                <a href='/dialogs'>Messages</a>
            </div>
            <div>News</div>
            <div>Music</div>
            <br />
            <div>Settings</div>
      </nav>
    )
}
export default Nav;  
