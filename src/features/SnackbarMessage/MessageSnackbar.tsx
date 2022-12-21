import React from 'react';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {AlertProps} from '@mui/material/Alert';

import {useAppDispatch, useAppSelector} from "../../common/hooks/hooks";

import {setAppMessageForUserAC} from "../../reducers/auth-reducer";

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
    props,
    ref,
) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const MessageSnackbar = () => {

    const message = useAppSelector(state => state.auth.appMessageForUser)
    const dispatch = useAppDispatch()

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(setAppMessageForUserAC(null))
    };

    return (
        <Stack spacing={2} sx={{width: '100%'}}>
            <Snackbar open={!!message} autoHideDuration={6000} onClose={handleClose}>
                <Alert
                    onClose={handleClose}
                    severity={(message?.startsWith('Welcome')) ? 'success' : 'error'}
                    sx={{width: '100%'}}
                >
                    {message}
                </Alert>
            </Snackbar>
        </Stack>
    );
}