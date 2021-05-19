import React from 'react';
import c from './MyPosts.module.css'
import Post from './Post/post'
const MyPosts = () => {
    return (
        <div>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add Posts</button>
                <button>Remove</button>
            </div>
            <Post message='how are you Bro' like='45' />
            <Post message="It's my first post" like='32' />
        </div>
    )
}
export default MyPosts;