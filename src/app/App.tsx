import React, {useEffect} from 'react';

import s from './App.module.css';

import {Navigate, Route, Routes} from 'react-router-dom';

import {useAppDispatch, useAppSelector} from "../common/hooks/hooks";

import {initializeAppTC} from "../reducers/app-reducer";

import {Header} from "../features/Header/Header";
import {Login} from "../features/Auth/Login/Login";
import {Register} from "../features/Auth/Register/Register";
import {RegistrationConfirmation} from "../features/Auth/RegistrationConfirmation/RegistrationConfirmation";
import {RegistrationEmailResending} from "../features/Auth/RegistrationEmailResending/RegistrationEmailResending";
import {Blogs} from "../common/components/Blogs/Blogs";
import {Posts} from "../common/components/Posts/Posts";
import {Error404} from "../features/Error404/Error404";

import {MessageSnackbar} from "../features/MessageSnackbar/MessageSnackbar";

import LinearProgress from '@mui/material/LinearProgress';
import CircularProgress from "@mui/material/CircularProgress";

export const App = () => {

    const dispatch = useAppDispatch()

    const appStatus = useAppSelector((state) => state.app.appStatus)
    const appInitialized = useAppSelector((state) => state.app.isInitialized)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!appInitialized) {
        return (
            <div className={s.progress_bar_container}>
                <CircularProgress className={s.progress_bar}/>
            </div>
        )
    }

    return (
        <div>
            <Header/>
            {appStatus === 'loading' && <LinearProgress color="inherit"/>}

            <div className={s.app_container}>

                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/registration-email-resending'} element={<RegistrationEmailResending/>}/>
                    <Route path={'/registration-confirmation'} element={<RegistrationConfirmation/>}/>
                    <Route path={'/blogs'} element={<Blogs/>}/>
                    <Route path={'/posts'} element={<Posts/>}/>

                    <Route path={'/error404'} element={<Error404/>}/>
                    <Route path={'*'} element={<Navigate to={'/error404'}/>}/>
                </Routes>

            </div>

            <MessageSnackbar/>
        </div>
    )
}
