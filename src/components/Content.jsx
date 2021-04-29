import React from 'react';
import c from './Content.module.css'
const Content = () => {
    return (
        <div className={c.content}>
            <div>
                <img src='https://makyan19.files.wordpress.com/2014/11/pacificocean_pag1.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <div>
                My Posts
            <div>
                <input type='text' />
            </div>
            <div className={c.item}>
                post 1
            </div>
            <div>
                post 2
            </div>
            </div>
      </div>
    )
}
export default Content;  
