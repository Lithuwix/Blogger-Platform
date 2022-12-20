import React from 'react';

import s from './RegistrationConfirmation.module.css'

import {NavLink} from "react-router-dom";

import Button from "@mui/material/Button";

export const RegistrationConfirmation = () => {
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

