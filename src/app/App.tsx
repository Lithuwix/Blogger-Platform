import React, {useEffect} from 'react';
import s from './App.module.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import {Header} from "../features/Header/Header";
import {Navigation} from '../features/Navigation/Navigation';
import {Blogs} from "../common/components/Blogs/Blogs";
import {Posts} from "../common/components/Posts/Posts";
import {Error404} from "../features/Error404/Error404";
import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";
import {initializeAppTC} from "../reducers/app-reducer";

import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from "@mui/material/CircularProgress";

export const App = () => {

    const dispatch = useAppDispatch()
    const appInitialized = useAppSelector((state) => state.app.isInitialized)
    const appStatus = useAppSelector((state) => state.app.appStatus)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!appInitialized) {
        return (
            <div className={s.progress_bar_container}>
                <CircularProgress className={s.progress_bar} color="secondary"/>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            { appStatus === 'loading' && <LinearProgress color="inherit"/> }
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
    )
}
