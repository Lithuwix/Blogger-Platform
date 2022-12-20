import React from 'react';

import s from "./SendEmailInfoModal.module.css"

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

type SendEmailInfoModalPropsType = {
    openModal: boolean
    handleClose: () => void
}

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    borderRadius: '2px',
    p: 4,
};

export const SendEmailInfoModal = (props: SendEmailInfoModalPropsType) => {
    return (
        <Modal
            open={props.openModal}
            onClose={props.handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography className={s.modalTitle} id="modal-modal-title" variant="h6" component="h2">
                    Email sent
                    <Button onClick={props.handleClose} className={s.close_modal_btn}><CloseOutlinedIcon/></Button>
                    <hr/>
                </Typography>
                <Typography id="modal-modal-description" sx={{mt: 2}}>
                    We have sent a link to confirm your email to **epam@epam.com**
                </Typography>
                <Button
                    onClick={props.handleClose}
                    className={s.btn_in_modal}
                    variant={'text'}
                >
                    ok
                </Button>
            </Box>
        </Modal>
    );
};

