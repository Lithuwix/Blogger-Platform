import React from 'react';
import {NavLink} from 'react-router-dom';
import s from './Navigation.module.css'

export const Navigation = () => {
    return (
        <div className={s.container}>
            <NavLink to={'/'}>link 1 </NavLink>
            <NavLink to={'/blogs'}> link 2</NavLink>
            <NavLink to={'/posts'}> link 3</NavLink>
        </div>
    );
};

