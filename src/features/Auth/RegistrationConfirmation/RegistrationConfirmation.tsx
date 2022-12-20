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
            <NavLink to={'/login'}>
                <Button
                    className={s.btn}
                    variant={'text'}
                    type={"submit"}
                >
                    Sign In
                </Button>
            </NavLink>
            <div className={s.pic}/>
        </div>
    );
};

