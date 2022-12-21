import React from 'react';

import s from './Login.module.css'

import {useFormik} from "formik";
import {useAppDispatch, useAppSelector} from "../../../common/hooks/hooks";

import {Navigate, NavLink} from "react-router-dom";

import {loginTC} from "../../../reducers/auth-reducer";

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

// import Snackbar from '@mui/material/Snackbar';
// import MuiAlert, { AlertProps } from '@mui/material/Alert';

type FormikErrorType = {
    loginOrEmail?: string
    password?: string
}

export const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const dispatch = useAppDispatch()

    const isLoggedIn = useAppSelector(((state) => state.auth.isLoggedIn))

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            loginOrEmail: '',
            password: ''
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.loginOrEmail) {
                errors.loginOrEmail = 'required'
            }
            if (!values.password) {
                errors.password = 'required'
            }
            return errors
        },
        onSubmit: values => {
            dispatch(loginTC(values))
            formik.resetForm();
        },
    });

    // const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    //     props,
    //     ref,
    // ) {
    //     return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    // });

    // const [open, setOpen] = React.useState(false);

    // const handleClickOpenSnackbar = () => {
    //     setOpen(true);
    // };
    //
    // const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     setOpen(false);
    // };

    if (isLoggedIn) {
        return <Navigate to={'/blogs'}/>
    }

    return (
        <>
            {/*<Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>*/}
            {/*    <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>*/}
            {/*        This is a success message!*/}
            {/*    </Alert>*/}
            {/*</Snackbar>*/}
            <div className={s.container}>
                <div className={s.login_wrapper}>

                    <h2 className={s.main_title}>Sign In</h2>

                    <form onSubmit={formik.handleSubmit}>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel
                                className={s.input_label}
                                htmlFor="standard-adornment-email-username"
                            >
                                Email or Username
                            </InputLabel>
                            <Input
                                {...formik.getFieldProps('loginOrEmail')}
                                id="standard-adornment-email-username"
                                type='text'
                            />
                        </FormControl>

                        <div className={s.error_titles}>
                            {formik.touched.loginOrEmail && formik.errors.loginOrEmail && formik.errors.loginOrEmail}
                        </div>

                        <FormControl className={s.input} variant="standard">
                            <InputLabel className={s.input_label}
                                        htmlFor="standard-adornment-password">
                                Password
                            </InputLabel>
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
                            Sign In
                        </Button>

                        <div className={s.helper_text}>
                            Don't have an account?
                        </div>
                        <NavLink to={'/register'}>
                            <div className={s.redirect_text}>Sign Up</div>
                        </NavLink>

                    </form>

                </div>
                <div className={s.login_pic}/>
            </div>
        </>
    );
};

