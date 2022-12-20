import React from 'react';

import s from './Login.module.css'

import {useFormik} from "formik";

import {NavLink} from "react-router-dom";

import InputLabel from '@mui/material/InputLabel';
import Input from '@mui/material/Input';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

type FormikErrorType = {
    email?: string
    password?: string
    rememberMe?: boolean
}

export const Login = () => {

    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

    const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
    };

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false
        },
        validate: values => {
            const errors: FormikErrorType = {}
            if (!values.email) {
                errors.email = 'required'
            }
            if (values.password.length < 8) {
                errors.password = 'must be more than 7 symbols'
            }
            return errors
        },
        onSubmit: values => {           // handleSubmit
            // dispatch(loginTC(values))
            formik.resetForm();
        },
    });

    return (
        <div className={s.container}>
            <div className={s.login_wrapper}>

                <h2 className={s.main_title}>Sign In</h2>

                <form onSubmit={formik.handleSubmit}>

                    <FormControl className={s.input} variant="standard">
                        <InputLabel
                            className={s.input_label}
                            htmlFor="standard-adornment-email-username">
                            Email or Username
                        </InputLabel>
                        <Input
                            {...formik.getFieldProps('email')}
                            id="standard-adornment-email-username"
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
    );
};

