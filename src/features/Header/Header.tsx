import React from 'react';

import s from './Header.module.css';

import {useAppSelector} from "../../common/hooks/hooks";

import LinearProgress from "@mui/material/LinearProgress";

export const Header = () => {

    const appStatus = useAppSelector((state) => state.app.appStatus)
    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userName = useAppSelector(state => state.auth.userRegisterInfo)

    // console.log(userName)

    return (
        <>
            <div className={s.container}>
                <div className={s.main_title}>Blogger Platform</div>
                { isLoggedIn &&
                    <div className={s.userNameLogoutWrapper}>
                        <div className={s.userName}>{}</div>
                        <div className={s.logoutBtn}>logout</div>
                        {<LinearProgress color="inherit"/>}
                        {appStatus === 'loading' && <LinearProgress color="inherit"/>}
                    </div>
                }
            </div>
            <div className={s.linear_progress}>
                {appStatus === 'loading' && <LinearProgress color="inherit"/>}
            </div>
        </>
    );
};

