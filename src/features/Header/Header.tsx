import React from 'react';

import s from './Header.module.css';

import {useAppSelector} from "../../common/hooks/hooks";

export const Header = () => {

    const isLoggedIn = useAppSelector(state => state.auth.isLoggedIn)
    const userName = useAppSelector(state => state.auth.userRegisterInfo)

    // console.log(userName)

    return (
        <div className={s.container}>
            <div className={s.main_title}>Blogger Platform</div>
            { isLoggedIn &&
                <div className={s.userNameLogoutWrapper}>
                    <div className={s.userName}>{}</div>
                    <div className={s.logoutBtn}>logout</div>
                </div>
            }
        </div>
    );
};

