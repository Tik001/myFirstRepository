import React from 'react';
import c from './Content.module.css'
import MyPosts from './MyPosts/MyPosts';
const Content = () => {
    return (
        <div className={c.content}>
            <div>
                <img className={c.img} src='https://makyan19.files.wordpress.com/2014/11/pacificocean_pag1.jpg' />
            </div>
            <div>
                ava + description
            </div>
            <MyPosts />
        </div>

    )
}
export default Content;
