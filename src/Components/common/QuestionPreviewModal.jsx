import { DialogContent, DialogTitle, Modal, ModalClose, ModalDialog, Card, Typography, CardContent, CardActions, Button, Divider, Box } from '@mui/joy';
import React from 'react';

const QuestionPreviewModal = ({ open, handleClose, question }) => {

    return (
        <Modal open={!!open}>
            <ModalDialog size={'md'}>
                <ModalClose onClick={handleClose}/>
                <DialogTitle>Question #{question.uniqueCode} ({question.category})</DialogTitle>
                <Card>
                    <CardContent>
                        {/* <Typography variant="h6">{question.question}</Typography>
                        <Typography variant="body2" color="textSecondary">{`Options: ${question.options.join(', ')}`}</Typography> */}
                        <Typography variant="body1">{question.question}</Typography>

                        <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                            Options:
                        </Typography>
                        <ul>
                            {question.options.map((option, index) => (
                                <li key={index}>{option}</li>
                            ))}
                        </ul>
                        <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                            Correct Answer: <span style={{color:"green"}}>{question.correctOpt}</span>
                        </Typography>
                    </CardContent>
                    {/* <Divider />
                    <CardActions>
                        <Box>
                            <Button size="md">Edit</Button>
                        </Box>
                    </CardActions> */}
                </Card>
            </ModalDialog>
        </Modal>
    );
};

export default QuestionPreviewModal;
