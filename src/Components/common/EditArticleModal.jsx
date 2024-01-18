import React, { useState, useEffect } from "react";
import {
  Container,
  Sheet,
  FormControl,
  FormLabel,
  Modal,
  ModalClose,
  ModalDialog,
  ModalOverflow,
  Typography,
  Input,
  Select,
  Option,
  RadioGroup,
  Radio,
  Divider,
  Box,
  SvgIcon,
  Button,
  IconButton,
  Stack,
  Card,
  DialogTitle, // Add this import
} from "@mui/joy";
import { EditArticleQuestion } from "../../config/apiConfig.js";

const EditArticleModal = ({ open, onClose, question }) => {
  const [layout, setLayout] = useState("fullscreen");
  const [questionQuantity, setQuestionQuantity] = useState(0);
  const [questions, setQuestions] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    paragraph: "",
    queArray: [],
  });

  useEffect(() => {
    setFormData({
      name: question.name,
      paragraph: question.paragraph,
      queArray: question.queArray,
    });
    setQuestionQuantity(question.queArray.length);
    setQuestions([...question.queArray]);
  }, [question]);

  const handleQuestionQuantityChange = (event) => {
    debugger;
    if (event?.target) {
      const quantity = parseInt(event.target.innerHTML, 10);
      setQuestionQuantity(quantity);

      // Create an array of empty objects to represent the initial state of questions
      const initialQuestions = Array.from({ length: quantity }, () => ({
        question: "",
        options: Array.from({ length: 4 }, () => ""),
        correctAnswer: "",
      }));
      setQuestions(initialQuestions);
    }
  };

  const handleInputChange = (questionIndex, optionIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionIndex
          ? {
              ...question,
              options: question.options.map((option, oIndex) =>
                oIndex === optionIndex ? value : option
              ),
            }
          : question
      )
    );
  };

  const handleRadioChange = (questionIndex, optionIndex) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionIndex
          ? { ...question, correctAnswer: optionIndex }
          : question
      )
    );
  };

  const handleQuestionInputChange = (questionIndex, value) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionIndex ? { ...question, question: value } : question
      )
    );
  };

  const handleEditArticle = async () => {
    const data = { ...formData, queArray: [...questions] };
    try {
      // Assuming there is an EditArticleQuestion function in apiConfig.js
      const result = await EditArticleQuestion(question._id, data);
      console.log("Article Edited successfully:", result);
      onClose();
    } catch (error) {
      console.error("Failed to edit article:", error.message);
    }
  };

  return (
    <>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={onClose}
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ModalOverflow>
          <ModalDialog layout={layout}>
            <ModalClose variant="plain" sx={{ m: 1 }} />

            <DialogTitle> Edit Article</DialogTitle>
            <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Article Name</FormLabel>
                <Input
                  placeholder="Article Name"
                  value={formData.name}
                  variant="soft"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Article Paragraph</FormLabel>
                <Input
                  placeholder="Article Paragraph"
                  value={formData.paragraph}
                  variant="soft"
                  onChange={(e) =>
                    setFormData({ ...formData, paragraph: e.target.value })
                  }
                />
              </FormControl>
              <FormControl>
                <FormLabel>Number of Questions</FormLabel>
                <Select
                  placeholder="No. of Questions"
                  variant="soft"
                  value={questionQuantity}
                  onChange={(e) => handleQuestionQuantityChange(e)}
                  sx={{ mb: 2 }}
                >
                  {[...Array(3).keys()].map((num) => (
                    <Option key={num + 2} value={num + 2}>
                      {num + 2}
                    </Option>
                  ))}
                </Select>
                <Divider />
              </FormControl>

              <Stack
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={2}
                sx={{ mt: 3, flexWrap: "wrap", gap: "1rem" }}
              >
                {questions.map((question, questionIndex) => (
                  <Card
                    key={questionIndex}
                    color="neutral"
                    invertedColors
                    orientation="vertical"
                    size="lg"
                    variant="soft"
                    sx={{ minWidth: "650px", flexGrow: 1, flexShrink: 0 }}
                  >
                    <FormControl key={questionIndex} sx={{ mb: 2 }}>
                      <FormLabel>Question {questionIndex + 1}</FormLabel>
                      <Input
                        placeholder={`Question ${questionIndex + 1}`}
                        value={question.question}
                        variant="soft"
                        onChange={(e) =>
                          handleQuestionInputChange(
                            questionIndex,
                            e.target.value
                          )
                        }
                      />
                    </FormControl>

                    {question.options.length > 0 && (
                      <Stack spacing={1}>
                        {question.options.map((option, optionIndex) => (
                          <FormControl key={optionIndex}>
                            <Input
                              placeholder={`Option ${optionIndex + 1}`}
                              value={option}
                              variant="soft"
                              onChange={(e) =>
                                handleInputChange(
                                  questionIndex,
                                  optionIndex,
                                  e.target.value
                                )
                              }
                            />
                          </FormControl>
                        ))}
                      </Stack>
                    )}
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Correct Option</FormLabel>
                      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        {question.options.map((option, optionIndex) => (
                          <Radio
                            key={optionIndex}
                            value={optionIndex}
                            color="success"
                            sx={{ mr: 2 }}
                            checked={question.correctAnswer == optionIndex}
                            label={optionIndex + 1}
                            onChange={() =>
                              handleRadioChange(questionIndex, optionIndex)
                            }
                            // TODO: Add logic to handle correct option selection
                          />
                        ))}
                      </Box>
                    </FormControl>
                  </Card>
                ))}
              </Stack>
              <FormControl sx={{ mt: 2 }}>
                <Button onClick={handleEditArticle}>Edit Article</Button>
              </FormControl>
            </Sheet>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default EditArticleModal;
