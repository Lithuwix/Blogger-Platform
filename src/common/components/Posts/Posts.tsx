import React from 'react';
import s from './Posts.module.css'

export const Posts = () => {
    return (
        <div className={s.container}>
            <h2 className={s.title}>Posts</h2>
            <hr className={s.line}/>
        </div>
    );
};

