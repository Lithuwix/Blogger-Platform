import React, {useCallback, useEffect} from 'react';

import s from './Register.module.css'

import {useFormik} from "formik";

import {registrationTC} from "../../../reducers/auth-reducer";

import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";

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
    login?: string
    password?: string
    email?: string
}

export const Register = () => {

    const dispatch = useAppDispatch()

    const isRegistrationOk = useAppSelector((state) => state.auth.registerOk)
    const userEmail = useAppSelector((state) => state.auth.userInfo.email)

    //modal
    const [openModal, setOpenModal] = React.useState(false);

    const handleOpen = useCallback( () => setOpenModal(true), [] )
    const handleClose = () => setOpenModal(false);

    //password
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            login: '',
            password: '',
            email: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (values.login.length > 10) {
                errors.login = 'must be less than 10 symbols'
            }
            if (values.login.length < 4) {
                errors.login = 'must be more than 3 symbols'
            }
            if (!values.login) {
                errors.login = 'required'
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
        onSubmit: values => {
            dispatch(registrationTC(values))
            formik.resetForm();
        },
    });

    useEffect(()=> {
        if (isRegistrationOk) {
            handleOpen()
        }
    }, [isRegistrationOk, handleOpen])

    return (
        <>
            <SendEmailInfoModal openModal={openModal} handleClose={handleClose} userEmail={userEmail}/>

            <div className={s.container}>
                <div className={s.login_wrapper}>

                    <h2 className={s.main_title}>Sign Up</h2>

                    <form onSubmit={formik.handleSubmit}>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel
                                className={s.input_label}
                                htmlFor="standard-adornment-username">
                                User name
                            </InputLabel>
                            <Input
                                {...formik.getFieldProps('login')}
                                id="standard-adornment-username"
                                type='text'
                            />
                        </FormControl>

                        <div className={s.error_titles}>
                            {formik.touched.login && formik.errors.login && formik.errors.login}
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

