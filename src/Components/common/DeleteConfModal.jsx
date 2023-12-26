import React from 'react';
import { Modal, Typography, ModalClose, ModalDialog, Divider, Button, Box } from '@mui/joy';

export default function DeleteConfModal({ open, onClose, onDelete, deletedQuestion }) {
    return (
        <>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={!!open}
            >
                <ModalDialog
                    color="danger"
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                <ModalClose onClick={onClose}/>

                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Delete Confirmation
                    </Typography>
                    <Typography id="modal-desc"
                        textColor="inherit"
                    >
                        {`Are you sure you want to delete Q ${deletedQuestion?.uniqueCode}?`}
                    </Typography>
                    <Divider />
                    <Box sx={{ textAlign: 'end' }}>
                        <Button size="md" color="danger" variant="solid" onClick={onClose}>Cancel</Button>
                        <Button size="md" color="danger" variant="plain" sx={{ ml: 1 }} onClick={onDelete}>Delete</Button>
                    </Box>
                </ModalDialog>
            </Modal>
        </>
    );
}