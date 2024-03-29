import React, {useEffect} from 'react';

import s from './App.module.css';

import {Navigate, Route, Routes, useLocation} from 'react-router-dom';

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

import CircularProgress from "@mui/material/CircularProgress";
import {authMeTC, registrationConfirmationTC} from "../reducers/auth-reducer";
import {CurrentBlog} from "../common/components/Blogs/CurrentBlog/CurrentBlog";
import {CurrentPost} from "../common/components/Posts/CurrentPost/CurrentPost";

export const App = () => {

    const dispatch = useAppDispatch()

    const appInitialized = useAppSelector((state) => state.app.isInitialized)

    const location = useLocation()

    useEffect(() => {
        dispatch(initializeAppTC())
        dispatch(authMeTC())
    }, [dispatch])

    if (!appInitialized) {
        return (
            <div className={s.progress_bar_container}>
                <CircularProgress className={s.progress_bar}/>
            </div>
        )
    }

    if (location.pathname === '/registration-confirmation/confirm-email') {
        const code = location.search.slice(6)
        dispatch(registrationConfirmationTC({code}))
    }

    return (
        <div>
            <Header/>
            <div className={s.app_container}>

                <Routes>
                    <Route path={'/'} element={<Navigate to={'/login'}/>}/>
                    <Route path={'/login'} element={<Login/>}/>
                    <Route path={'/register'} element={<Register/>}/>
                    <Route path={'/registration-email-resending'} element={<RegistrationEmailResending/>}/>
                    <Route path={'/registration-confirmation/:code'} element={<RegistrationConfirmation/>}/>

                    <Route path={'/blogs'} element={<Blogs/>}/>
                    <Route path={'/blogs/:blogID'} element={<CurrentBlog/>}/>

                    <Route path={'/posts'} element={<Posts/>}/>
                    <Route path={'/posts/:postID'} element={<CurrentPost/>}/>

                    <Route path={'/error404'} element={<Error404/>}/>
                    {/*<Route path={'*'} element={<Navigate to={'/error404'}/>}/>*/}
                </Routes>

            </div>

            <MessageSnackbar/>
        </div>
    )
}