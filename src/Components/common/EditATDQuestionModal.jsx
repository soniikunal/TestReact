import React, { useState, useEffect } from "react";
import { Container } from "@mui/material";
import {
  Sheet,
  FormControl,
  FormLabel,
  Modal,
  ModalClose,
  AspectRatio,
  Typography,
  Input,
  FormHelperText,
  Select,
  Option,
  RadioGroup,
  Radio,
  Divider,
  Box,
  SvgIcon,
  Button,
  styled,
  ModalOverflow,
  IconButton,
} from "@mui/joy";
import { Close } from "@mui/icons-material";
import { EditATDQuestion, GetCategories } from "../../config/apiConfig.js";
import TinyMCEEditor from "./TinyMCEEditor.jsx";
import { toastError, toastSuccess } from "../../Utils/Toasts";

const imgUrl = import.meta.env.VITE_API_URL;

const EditATDQuestionModal = ({ open, onClose, question }) => {
  debugger;
  const [avatar, setAvatar] = useState(null);
  const [image, setImage] = useState(
    question.imgPath ? imgUrl + question.imgPath : null
  );
  const [correctOpt, setcorrectOpt] = useState(question.correctOpt);
  const [optionQuantity, setOptionQuantity] = useState(question.options.length);
  const [options, setOptions] = useState(question.options);
  const [que, setQuestion] = useState(question.question);
  const [queId, setQuestionId] = useState(question._id);
  const [category, setCategory] = useState(question.category);
  const [categoryOptions, setCategoryOptions] = useState([]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const VisuallyHiddenInput = styled("input")`
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    bottom: 0;
    left: 0;
    white-space: nowrap;
    width: 1px;
  `;
  const setTheAvatar = (e) => {
    const reader = new FileReader(),
      files = e.target.files;
    reader.onload = function () {
      setImage(reader.result);
    };
    setAvatar(files[0]);
    reader.readAsDataURL(files[0]);
  };
  const removeAvatar = () => {
    setAvatar(null);
    setImage(null);
  };
  const handleOptionQuantityChange = (event) => {
    debugger;
    if (event?.target) {
      const quantity = parseInt(event.target.innerHTML, 10);
      setOptionQuantity(quantity);

      // Create an array of empty strings to represent the initial state of options
      const initialOptions = Array.from({ length: quantity }, () => "");
      setOptions(initialOptions);
    }
  };
  const fetchCategories = async () => {
    try {
      const allCategories = await GetCategories();
      setCategoryOptions(allCategories);
    } catch (error) {
      console.error("FEtch failed:", error.message);
    }
  };
  const handleCorrectRadio = (e) => {
    if (e?.target) {
      setcorrectOpt(parseInt(e.target.value));
    }
  };

  const handleCategoryChange = (e) => {
    if (e?.target) {
      setCategory(e.target.innerHTML);
    }
  };

  const handleOptionChange = (index, value) => {
    debugger;
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };
  // const handleOptionChange = (index, value) => {
  //     debugger
  //     setOptions(prevOptions => {
  //         const newOptions = [...prevOptions];
  //         newOptions[index] = value;
  //         return newOptions;
  //     });
  // };

  const handleQuestionChange = (e) => {
    if (e?.target) {
      setQuestion(e.target.value);
    }
  };

  const handleEditATDQuestion = async () => {
    debugger;
    const data = {
      question: que,
      category,
      options,
      correctOpt,
      avatar,
    };

    try {
      const result = await EditATDQuestion(queId, data);
      console.log("Question Edited successfully:", result);
      onClose();
    } catch (error) {
      console.error("Failed to edit question:", error.message);
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
          <Sheet
            variant="outlined"
            sx={{
              maxWidth: 1000,
              width: 900,
              borderRadius: "md",
              p: 3,
              boxShadow: "lg",
              margin: "auto",
              flex: "none",
            }}
          >
            <ModalClose variant="plain" sx={{ m: 1 }} />
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
              mb={1}
            >
              Edit Question #{question.uniqueCode}
            </Typography>
            <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
              <FormControl sx={{ mb: 2 }}>
                <FormLabel>Question</FormLabel>
                <Input
                  placeholder="Question"
                  value={que}
                  variant="soft"
                  onChange={(e) => handleQuestionChange(e)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select
                  placeholder="Category"
                  variant="soft"
                  onChange={(e) => handleCategoryChange(e)}
                  value={category}
                >
                  {categoryOptions.map((option) => (
                    <Option key={option.name} value={option.name}>
                      {option.name}
                    </Option>
                  ))}
                </Select>
              </FormControl>
              <FormControl>
                <FormLabel>Number of Options</FormLabel>
                <Select
                  placeholder="No. of Options"
                  variant="soft"
                  value={optionQuantity}
                  onChange={(e) => handleOptionQuantityChange(e)}
                  sx={{ mb: 2 }}
                >
                  {[...Array(3).keys()].map((num) => (
                    <Option key={num + 2} value={num + 2}>
                      {num + 2}
                    </Option>
                  ))}
                </Select>
              </FormControl>
              {Array.from({ length: optionQuantity }, (_, index) => (
                <FormControl key={index}>
                  <Input
                    key={index}
                    startDecorator={`${index + 1}.`}
                    placeholder={`Option ${index + 1}`}
                    value={options[index] || ""}
                    variant="soft"
                    sx={{ my: 1 }}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                </FormControl>
              ))}
              {options.length > 0 && (
                <>
                  <FormLabel id="optionRadio">Correct Option</FormLabel>
                  <Box sx={{ display: "flex", gap: 2, my: 2 }}>
                    {options.map((option, index) => (
                      <Radio
                        value={index}
                        key={option + index}
                        label={index + 1}
                        checked={correctOpt == index}
                        onChange={handleCorrectRadio}
                        color="success"
                        sx={{ mr: 2 }}
                      />
                    ))}
                  </Box>
                </>
              )}
              <Box
                sx={{
                  display: "flex",
                  position: "relative",
                  flexDirection: "column",
                }}
              >
                <FormLabel>Image</FormLabel>
                {image && (
                  <Box
                    sx={{
                      display: "contents",
                    }}
                  >
                    <img
                      src={image}
                      style={{ maxHeight: "250px", objectFit: "contain" }}
                    />
                    <IconButton
                      aria-label="close"
                      onClick={removeAvatar}
                      sx={{ position: "absolute", top: "0", right: "0px" }}
                    >
                      <Close />
                    </IconButton>
                  </Box>
                )}
                <Button
                  component="label"
                  role={undefined}
                  tabIndex={-1}
                  variant="outlined"
                  color="neutral"
                  startDecorator={
                    <SvgIcon>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                        />
                      </svg>
                    </SvgIcon>
                  }
                >
                  Upload a file
                  {/* <VisuallyHiddenInput type="file" onChange={(e) => saveImage(e)} /> */}
                  <VisuallyHiddenInput
                    type="file"
                    onChange={(e) => setTheAvatar(e)}
                  />
                </Button>
              </Box>
              <FormControl sx={{ mt: 2 }}>
                <Button onClick={handleEditATDQuestion}>Edit Question</Button>
              </FormControl>
            </Sheet>
          </Sheet>
        </ModalOverflow>
      </Modal>
    </>
  );
};

export default EditATDQuestionModal;
