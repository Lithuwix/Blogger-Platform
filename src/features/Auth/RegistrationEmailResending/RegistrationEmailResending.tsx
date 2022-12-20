import React from 'react';

import s from './RegistrationEmailResending.module.css'

import {SendEmailInfoModal} from "../../Modals/SendEmailInfoModal/SendEmailInfoModal";

import Button from "@mui/material/Button";

export const RegistrationEmailResending = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    return (
        <div className={s.wrapper}>

            <SendEmailInfoModal openModal={openModal} handleClose={handleClose}/>

            <h1 className={s.title}>
                Email verification link expired
            </h1>
            <h2 className={s.sub_title}>
                Looks like the verification link has<br/> expired.Not to worry, we can send the<br/> link again
            </h2>
            <Button
                onClick={handleOpen}
                className={s.btn}
                variant={'text'}
            >
                Resend verification link
            </Button>
            <div className={s.pic}/>
        </div>
    );
};

