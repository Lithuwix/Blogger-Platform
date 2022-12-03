import React from 'react';
import s from './App.module.css';

import {Routes, Route, Navigate} from 'react-router-dom';

import {Header} from "../features/Header/Header";
import {Navigation} from '../features/Navigation/Navigation';
import {Blogs} from "../common/components/Blogs/Blogs";
import {Posts} from "../common/components/Posts/Posts";
import {Error404} from "../features/Error404/Error404";

export const App = () => {
    return (
        <div>
            <Header/>
            <div className={s.app_container}>
                <Navigation/>
                <Routes>
                    <Route path={'/'} element={<Navigate to={'/blogs'}/>}/>
                    <Route path={'/blogs'} element={<Blogs/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>

                    <Route path={'/error404'} element={<Error404/>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}
