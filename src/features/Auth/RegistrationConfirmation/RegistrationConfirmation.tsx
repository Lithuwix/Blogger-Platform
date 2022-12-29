import React, {useEffect} from 'react';

import s from './RegistrationConfirmation.module.css'

import {NavLink, useLocation} from "react-router-dom";

import Button from "@mui/material/Button";
import {registrationConfirmationTC} from "../../../reducers/auth-reducer";
import {useAppDispatch} from "../../../common/hooks/hooks";

export const RegistrationConfirmation = () => {

    const dispatch = useAppDispatch()
    const location = useLocation()

    useEffect(() => {
        const code = location.search.slice(6)
        dispatch(registrationConfirmationTC({code}))
    }, [dispatch, location.search])

    return (
        <div className={s.wrapper}>
            <h1 className={s.title}>
                Congratulations!<br/>
                Your email has been confirmed
            </h1>
            <Button
                className={s.btn}
                variant={'text'}
            >
                <NavLink to={'/login'}>
                    Sign In
                </NavLink>
            </Button>
            <div className={s.pic}/>
        </div>
    );
};

