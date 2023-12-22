import React, { useState } from 'react'
import { Container } from '@mui/material'
import { Sheet, FormControl, FormLabel, Modal, ModalClose, AspectRatio, Typography, Input, FormHelperText, Select, Option, RadioGroup, Radio, Divider, Box, SvgIcon, Button, styled, ModalOverflow, IconButton } from '@mui/joy';
import { Close } from '@mui/icons-material';
import { AddQuestion } from '../../config/apiConfig.js'
// import { DataGrid } from '@mui/x-data-grid';
// import { useDemoData } from '@mui/x-data-grid-generator';

const AddQuestionModal = () => {
    // const { data } = useDemoData({
    //     dataSet: 'Commodity',
    //     rowLength: 5,
    //     maxColumns: 6,
    //   });

    const [open, setOpen] = useState(false);
    const [avatar, setAvatar] = useState(null);
    const [correctOpt, setcorrectOpt] = useState(null);
    const [optionQuantity, setOptionQuantity] = useState(0);
    const [options, setOptions] = useState([]);
    const [question, setQuestion] = useState('');
    const [category, setCategory] = useState('');

    const VisuallyHiddenInput = styled('input')`
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
    const setTheAvatar = e => {
        const reader = new FileReader(),
            files = e.target.files
        //setPhotoName(files[0].name)
        reader.onload = function () {
            setAvatar(reader.result)
        }
        reader.readAsDataURL(files[0])
    }
    const removeAvatar = () => {
        setAvatar(null)
    }
    const handleOptionQuantityChange = (event) => {
        if (event?.target) {
            const quantity = parseInt(event.target.innerHTML, 10);
            setOptionQuantity(quantity);

            // Create an array of empty strings to represent the initial state of options
            const initialOptions = Array.from({ length: quantity }, () => '');
            setOptions(initialOptions);
        }
    };

    const handleCorrectRadio = (e) => {
        if (e?.target) {
            setcorrectOpt(parseInt(e.target.value))
        }
    }

    const handleCategoryChange = (e) => {
        if (e?.target) {
            setCategory(e.target.value)
        }
    }

    const handleOptionChange = (index, value) => {
        const newOptions = [...options];
        newOptions[index] = value;
        setOptions(newOptions);
    };

    const handleQuestionChange = (e) => {
        if (e?.target) {
            setQuestion(e.target.value)
        }
    };

    const handleAddQuestion = async () => {
        const data = {
            question,
            category,
            options,
            correctOpt,
            avatar,
        }

        try {
            const result = await AddQuestion(data);
            console.log('Login successful:', result);
        } catch (error) {
            console.error('Login failed:', error.message);
        }
    };

    return (
        <>
                {/* <DataGrid {...data} /> */}
                <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
                    Add Questions
                </Button>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={open}
                    onClose={() => setOpen(false)}
                    // sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', overflow:'auto' }}
                    sx={{
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'flex-start'
                    }}
                >
                    <ModalOverflow>
                        <Sheet
                            variant="outlined"
                            sx={{
                                maxWidth: 900,
                                width: 700,
                                borderRadius: 'md',
                                p: 3,
                                boxShadow: 'lg',
                                margin: 'auto',
                                flex: 'none'
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
                                Add Question
                            </Typography>
                            <Sheet variant="outlined" color="neutral" sx={{ p: 4 }}>
                                <FormControl sx={{ mb: 2 }}>
                                    <FormLabel>Question</FormLabel>
                                    <Input placeholder="Question" variant="soft" onChange={e => handleQuestionChange(e)} />
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Category</FormLabel>
                                    <Select
                                        placeholder="Category"
                                        variant="soft"
                                        onChange={e => handleCategoryChange(e)}
                                    >
                                        <Option value="...">...</Option>
                                    </Select>
                                </FormControl>
                                <FormControl>
                                    <FormLabel>Number of Options</FormLabel>
                                    <Select
                                        placeholder="No. of Options"
                                        variant="soft"
                                        value={optionQuantity} onChange={(e) => handleOptionQuantityChange(e)}
                                        sx={{ mb: 2 }}
                                    >
                                        {[...Array(3).keys()].map((num) => (
                                            <Option key={num + 2} value={num + 2}>
                                                {num + 2}
                                            </Option>
                                        ))}
                                    </Select>
                                    <Divider />
                                    {options.map((option, index) => (
                                        <Input placeholder={`Option ${index + 1}`} variant="soft" sx={{ my: 1 }} onChange={(e) => handleOptionChange(index, e.target.value)} />
                                    ))}
                                </FormControl>
                                <Divider />
                                {options.length > 0 && (
                                    <FormControl>
                                        <FormLabel id="optionRadio">Correct Option</FormLabel>
                                        <Box sx={{ display: 'flex', gap: 2, mb: 2 }}>
                                            {options.map((option, index) => (
                                                <Radio value={index + 1} label={index + 1} checked={correctOpt === index + 1} onChange={handleCorrectRadio} color="success" sx={{ mr: 2 }} />
                                            ))}
                                        </Box>
                                    </FormControl>)}
                                <FormControl>
                                    <FormLabel>Image</FormLabel>
                                    {avatar && (
                                        <Box sx={{
                                            display: 'contents'
                                        }}>
                                            <img src={avatar} style={{ maxHeight: '250px', objectFit: 'contain' }} />
                                            <IconButton aria-label="close" onClick={removeAvatar} sx={{ position: 'absolute', top: '0', right: '0px', }}>
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
                                        <VisuallyHiddenInput type="file" onChange={(e) => setTheAvatar(e)} />
                                    </Button>
                                </FormControl>
                                <FormControl>
                                    <Button onClick={handleAddQuestion}>Add Question</Button>
                                </FormControl>

                            </Sheet>
                        </Sheet>
                    </ModalOverflow>
                </Modal>
        </>
    )
}

export default AddQuestionModal
