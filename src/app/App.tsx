import React from 'react';
import s from './App.module.css';

import {Routes, Route, Navigate} from 'react-router-dom';

import {Header} from "../features/header/Header";
import {Navigation} from '../features/navigation/Navigation';
import {Blogs} from "../common/components/Blogs/Blogs";
import {Posts} from "../common/components/Posts/Posts";

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

                    <Route path={'/error404'} element={<div>error</div>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                </Routes>
            </div>
        </div>
    );
}


