import React from 'react';
import c from './post.module.css'
const Post = ( props ) => {
    return (
        <div>
            <div className={c.item}>
                <img className={c.nkar} src='https://images-na.ssl-images-amazon.com/images/I/71o9gZERHoL.jpg' alt='' />
                {props.message}
            </div>
            <div>
                <span>Like {props.like}</span>
            </div>
        </div>
    )
}
export default Post;