import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.container}>
            <div className={s.nav_item}>
                <NavLink to={'/blogs'}>Blogs</NavLink>
            </div>
            <div className={s.nav_item}>
                <NavLink to={'/posts'}>Posts</NavLink>
            </div>
        </div>
    );
};

