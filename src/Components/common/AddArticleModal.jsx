import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import {
  Sheet,
  FormControl,
  FormLabel,
  Modal,
  ModalClose,
  ModalDialog,
  Typography,
  Input,
  DialogTitle,
  Select,
  Option,
  RadioGroup,
  Radio,
  Divider,
  Box,
  SvgIcon,
  Button,
  Card,
  ModalOverflow,
  IconButton,
  Stack,
} from "@mui/joy";
import { Close } from "@mui/icons-material";
import { AddArticleQuestion } from "../../config/apiConfig.js";

const AddArticleModal = () => {
  const [open, setOpen] = useState(false);
  const [layout, setLayout] = useState(undefined);
  const [questionQuantity, setQuestionQuantity] = useState(0);
  const [questions, setQuestions] = useState([]);
  const [options, setOptions] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    paragraph: "",
    // queArray: [
    //   {
    //     question: "",
    //     options: ["", "", "", ""],
    //     correctAnswer: "",
    //   },
    // ],
  });

  const handleChange = (e, queIndex, optionIndex) => {
    if (e?.target) {
      const { name, value } = e.target;

      if (name === "options") {
        const newOptions = [...formData.queArray[queIndex].options];
        newOptions[optionIndex] = value;

        setFormData({
          ...formData,
          queArray: formData.queArray.map((que, index) =>
            index === queIndex ? { ...que, options: newOptions } : que
          ),
        });
      } else if (name === "queArray") {
        setFormData({
          ...formData,
          queArray: formData.queArray.map((que, index) =>
            index === queIndex ? { ...que, [name]: value } : que
          ),
        });
      } else {
        setFormData({
          ...formData,
          [name]: value,
        });
      }
    }
  };
  const handleAddArticle = async () => {
    const data = { ...formData, queArray: [...questions] };
    try {
      const result = await AddArticleQuestion(data);
      console.log("Article added successfully:", result);
    } catch (error) {
      console.error("Login failed:", error.message);
    }
  };

  const handleAddQuestion = () => {
    setFormData({
      ...formData,
      queArray: [
        ...formData.queArray,
        {
          question: "",
          options: ["", "", "", ""],
          correctAnswer: "",
        },
      ],
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      // Send the form data to your server using axios or your preferred method
      await axios.post("/api/articles", formData);

      // Optionally, you can reset the form after successful submission
      setFormData({
        name: "",
        category: "",
        paragraph: "",
        queArray: [
          {
            question: "",
            options: ["", "", "", ""],
            correctAnswer: "",
          },
        ],
      });

      console.log("Form submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const handleQuestionQuantityChange = (event) => {
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

  const handleInputChange = (questionIndex, optionIndex, value, type) => {
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
  const handleQuestionInputChange = (
    questionIndex,
    optionIndex,
    value,
    type
  ) => {
    setQuestions((prevQuestions) =>
      prevQuestions.map((question, qIndex) =>
        qIndex === questionIndex
          ? {
              ...question,
              [type]: value,
            }
          : question
      )
    );
  };
  
  return (
    <>
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setLayout("fullscreen")}
      >
        Add Articles
      </Button>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={!!layout}
        onClose={() => {
          setLayout(undefined);
        }}
        
        sx={{
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <ModalOverflow>
          <ModalDialog layout={layout}>
            <ModalClose variant="plain" sx={{ m: 1 }} />

            <DialogTitle> Add Article</DialogTitle>
            <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Article Name</FormLabel>
                <Input
                  placeholder="Article Name"
                  value={formData.name}
                  variant="soft"
                  onChange={handleChange}
                  name="name"
                />
              </FormControl>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Article Paragraph</FormLabel>
                <Input
                  placeholder="Article Paragraph"
                  value={formData.paragraph}
                  variant="soft"
                  onChange={handleChange}
                  name="paragraph"
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
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Question</FormLabel>
                      <Input
                        placeholder="Question"
                        variant="soft"
                        value={question.question}
                        onChange={(e) =>
                          handleQuestionInputChange(
                            questionIndex,
                            -1,
                            e.target.value,
                            "question"
                          )
                        }
                        name="question"
                      />
                    </FormControl>
                    {question.options.map((option, optionIndex) => (
                      <FormControl key={optionIndex}>
                        <FormLabel>Option {optionIndex + 1}</FormLabel>
                        <Input
                          placeholder={`Option ${optionIndex + 1}`}
                          variant="soft"
                          value={option}
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
                    <FormControl sx={{ mb: 2 }}>
                      <FormLabel>Correct Option</FormLabel>
                      <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
                        {question.options.map((option, optionIndex) => (
                          <Radio
                            key={optionIndex}
                            value={optionIndex}
                            color="success"
                            sx={{ mr: 2 }}
                            label={optionIndex + 1}
                            checked={question.correctAnswer == optionIndex}
                            onChange={(e) =>
                              handleQuestionInputChange(
                                questionIndex,
                                optionIndex,
                                Number(e.target.value),
                                "correctAnswer"
                              )
                            }
                          />
                        ))}
                      </Box>
                    </FormControl>
                  </Card>
                ))}
              </Stack>
              <Divider />
              <FormControl sx={{ mt: 3 }}>
                <Button onClick={handleAddArticle}>Add Article</Button>
              </FormControl>
            </Sheet>
          </ModalDialog>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default AddArticleModal;
