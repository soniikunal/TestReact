import {
  DialogContent,
  DialogTitle,
  Modal,
  ModalClose,
  ModalDialog,
  Card,
  Typography,
  CardContent,
  CardActions,
  Button,
  Divider,
  ModalOverflow,
  Box,
} from "@mui/joy";
import React from "react";
const QuestionPreviewModal = ({ open, handleClose, question }) => {
  debugger;

  return (
    <Modal open={!!open}>
      <ModalOverflow>
        <ModalDialog size={"md"} sx={{width: '1000px'}}>
          <ModalClose onClick={handleClose} />
          <DialogTitle>Question #{question.uniqueCode} </DialogTitle>
          <Card>
            <Typography variant="body1" sx={{ fontWeight: "bold" }}>
              {question.name}
            </Typography>

            <Typography
              variant="subtitle1"
              sx={{ marginTop: 2, fontWeight: "bold" }}
            >
              Paragraph:
            </Typography>
            <Typography variant="body1">{question.paragraph}</Typography>

            <Typography
              variant="subtitle1"
              sx={{ marginTop: 2, fontWeight: "bold" }}
            >
              Questions:
            </Typography>

            <ol>
              {question.queArray.map((questionNum, index) => (
                <>
                  <li key={index}>{questionNum.question}</li>
                  <Typography
                    variant="subtitle2"
                    sx={{ marginTop: 2, fontWeight: "bold" }}
                  >
                    Options:
                  </Typography>
                  <ul>
                  {questionNum.options.map((option, optionIdx) => (
                    <li key={optionIdx}>{option}</li>
                  ))}
                  </ul>
                  <Typography
                    variant="subtitle2"
                    sx={{ marginTop: 2, fontWeight: "bold" }}
                  >
                    Correct Answer:
                    <span style={{ color: "green" }}>
                      {Number(questionNum.correctAnswer) + 1}
                    </span>
                  </Typography>
                </>
              ))}
            </ol>
            {/* <Typography variant="subtitle1" sx={{ marginTop: 2, fontWeight: 'bold' }}>
                        Correct Answer: <span style={{ color: "green" }}>{question.options[question.correctOpt]}</span>
                    </Typography> */}

            {/* </CardContent> */}
          </Card>
        </ModalDialog>
      </ModalOverflow>
    </Modal>
  );
};

export default QuestionPreviewModal;
