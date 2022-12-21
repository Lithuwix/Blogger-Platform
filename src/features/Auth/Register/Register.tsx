import React from 'react';

import s from './Register.module.css'

import {useFormik} from "formik";

import {NavLink} from "react-router-dom";

import {SendEmailInfoModal} from "../../Modals/SendEmailInfoModal/SendEmailInfoModal";

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';

type FormikErrorType = {
    userName?: string
    email?: string
    password?: string
}

export const Register = () => {

    const [openModal, setOpenModal] = React.useState(false);
    const handleOpen = () => setOpenModal(true);
    const handleClose = () => setOpenModal(false);

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            userName: '',
            email: '',
            password: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (values.userName.length > 10) {
                errors.userName = 'must be less than 10 symbols'
            }
            if (values.userName.length < 4) {
                errors.userName = 'must be more than 3 symbols'
            }
            if (!values.userName) {
                errors.userName = 'required'
            }
            if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
                errors.email = 'Invalid email address'
            }
            if (values.password.length > 20) {
                errors.password = 'must be less than 20 symbols'
            }
            if (values.password.length < 7) {
                errors.password = 'must be more than 6 symbols'
            }
            if (!values.email) {
                errors.email = 'email required'
            }
            return errors
        },
        onSubmit: values => {           // handleSubmit
                                        // dispatch(loginTC(values))
            handleOpen()
            formik.resetForm();
        },
    });



    return (
        <>
            <SendEmailInfoModal openModal={openModal} handleClose={handleClose}/>

            <div className={s.container}>
                <div className={s.login_wrapper}>

                    <h2 className={s.main_title}>Sign Up</h2>

                    <form onSubmit={formik.handleSubmit}>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel
                                className={s.input_label}
                                htmlFor="standard-adornment-username">
                                Username
                            </InputLabel>
                            <Input
                                {...formik.getFieldProps('userName')}
                                id="standard-adornment-username"
                                type='text'
                            />
                        </FormControl>

                        <div className={s.error_titles}>
                            {formik.touched.userName && formik.errors.userName && formik.errors.userName}
                        </div>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel
                                className={s.input_label}
                                htmlFor="standard-adornment-email">
                                Email
                            </InputLabel>
                            <Input
                                {...formik.getFieldProps('email')}
                                id="standard-adornment-email"
                                type='text'
                            />
                        </FormControl>

                        <div className={s.error_titles}>
                            {formik.touched.email && formik.errors.email && formik.errors.email}
                        </div>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel className={s.input_label}
                                        htmlFor="standard-adornment-password">Password</InputLabel>
                            <Input
                                {...formik.getFieldProps('password')}
                                id="standard-adornment-password"
                                type={showPassword ? 'text' : 'password'}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                        >
                                            {showPassword ? <VisibilityOff/> : <Visibility/>}
                                        </IconButton>
                                    </InputAdornment>
                                }
                            />
                        </FormControl>

                        <div className={s.error_titles}>
                            {formik.touched.password && formik.errors.password && formik.errors.password}
                        </div>

                        <Button
                            className={s.submit_btn}
                            variant={'text'}
                            type={"submit"}
                        >
                            Sign Up
                        </Button>

                        <div className={s.helper_text}>
                            Already a member?
                        </div>
                        <NavLink to={'/login'}>
                            <div className={s.redirect_text}>Sign In</div>
                        </NavLink>

                    </form>

                </div>
                <div className={s.login_pic}/>
            </div>
        </>
    );
};

