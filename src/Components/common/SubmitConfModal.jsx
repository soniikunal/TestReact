import React, { useState } from 'react';
import { Modal, Typography, ModalClose, ModalDialog, Divider, Button, Box } from '@mui/joy';

export default function SubmitConfModal({ onSubmit }) {
    const [open, setOpen] = useState(false)

    return (
        <>
            <Button Button variant="soft" color="primary" onClick={() => setOpen(true)}>
                Submit
            </Button>
            <Modal
                aria-labelledby="modal-title"
                aria-describedby="modal-desc"
                open={!!open}
            >
                <ModalDialog
                    color="primary"
                    variant="outlined"
                    sx={{
                        maxWidth: 500,
                        borderRadius: 'md',
                        p: 3,
                        boxShadow: 'lg',
                    }}
                >
                    {/* <ModalClose onClick={()=>setOpen(false)} /> */}

                    <Typography
                        component="h2"
                        id="modal-title"
                        level="h4"
                        textColor="inherit"
                        fontWeight="lg"
                        mb={1}
                    >
                        Submit Confirmation
                    </Typography>
                    <Typography id="modal-desc"
                        textColor="inherit"
                    >
                        Are you sure you want to submit the Test.
                    </Typography>
                    <Divider />
                    <Box sx={{ textAlign: 'end' }}>
                        <Button size="md" color="primary" variant="plain" onClick={() => setOpen(false)}>Cancel</Button>
                        <Button size="md" color="primary" variant="solid" sx={{ ml: 1 }} onClick={() => {
                            onSubmit()
                            setOpen(false)
                        }}>Submit</Button>
                    </Box>
                </ModalDialog>
            </Modal>
        </>
    );
}