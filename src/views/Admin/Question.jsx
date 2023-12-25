import React, { useEffect, useState } from 'react'
import { Card, Typography, Input, Stack, Box, Button } from '@mui/joy'
import QuestionPreviewModal from '../../Components/common/QuestionPreviewModal'
import AddQuestionModal from '../../Components/common/AddQuestionModal'
import Category from '../../Components/common/Category'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LayersIcon from '@mui/icons-material/Layers';

const data = [{
    "_id": {
        "$oid": "6586b0287fcba88007ce80b5"
    },
    "question": "The given statement contains few words/phrases printed in bold. Choose the correct option which is grammatically correct and conveys equivalent meaning for the bold text in the given statement.The scientist's groundbreaking research was a Pandora's box in the field of genetics.",
    "options": [
        "The research opened up new possibilities in genetics.",
        "The research was a source of hope for genetic advancements.",
        "The research had both positive and negative consequences in the field of genetics",
        "The research was a universally accepted solution in genetics"
    ],
    "IsDescriptive": false,
    "category": "Geography",
    "uniqueCode": "5304",
    "__v": 0
},
{
    "_id": {
        "$oid": "6586b02a7fcba88007ce80b7"
    },
    "question": "What is the capital of France?",
    "options": [
        "Berlin",
        "London",
        "Paris",
        "Rome"
    ],
    "IsDescriptive": false,
    "category": "Geography",
    "uniqueCode": "3037",
    "__v": 0
}]

const Question = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState();
    const [isModalOpen, setModalOpen] = useState(true);

    useEffect(()=>{
        setQuestions(data)
    })
  

    const columns = [
        { field: 'uniqueCode', headerName: 'ID', width: 100 },
        {
            field: 'question',
            headerName: 'Question',
            width: 500,
            editable: true,
        },
        {
            field: 'category',
            headerName: 'Category',
            width: 500,
            editable: true,
        },
        {
            field: 'actions',
            type: 'actions',
            headerName: 'Actions',
            width: 100,
            cellClassName: 'actions',
            getActions: ({ id }) => {
                return [
                    <GridActionsCellItem
                        icon={<LayersIcon />}
                        label="Preview"
                        className="textPrimary"
                        onClick={handleShowClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<EditIcon />}
                        label="Edit"
                        className="textPrimary"
                        onClick={handleEditClick(id)}
                        color="inherit"
                    />,
                    <GridActionsCellItem
                        icon={<DeleteIcon />}
                        label="Delete"
                        onClick={handleDeleteClick(id)}
                        color="inherit"
                    />,
                ];
            },
        },
    ];
    const handleDeleteClick = (id) => async () => {

    };

    const handleEditClick = (id) => () => {

    };

    const handleShowClick = (question) => () => {
        const selectedQuestion = questions.filter(e=> e.uniqueCode == question)
        setSelectedQuestion(selectedQuestion[0]);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedQuestion(null);
    };

    return (
        <>
            <Card
                color="primary"
                size="md"
                variant="soft"
            >
                <Card
                    color="primary"
                    invertedColors
                    variant="solid"
                    sx={{ display: 'flex' }}
                >
                    <Stack
                        direction="row"
                        justifyContent="flex-start"
                        alignItems="center"
                        spacing={2}
                    >
                        <Typography level="title-md">Search by:</Typography>
                        <Input placeholder="QuestionID" />
                        <Input placeholder="Question" />
                        <Input placeholder="Category" />
                        <Button variant="solid" size="sm">
                            Search
                        </Button>
                        <Box style={{ marginLeft: 'auto' }}>
                            <AddQuestionModal />
                        </Box>
                        <Category />
                    </Stack>
                </Card>

                <DataGrid rows={questions}
                    columns={columns}
                    editMode="row"
                    getRowId={(row) => row.uniqueCode}
                    disableToolbar
                />

            </Card>
            {selectedQuestion && (
                <QuestionPreviewModal
                    question={selectedQuestion}
                    handleClose={handleCloseModal}
                    open={isModalOpen}
                />
            )}
        </>
    )
}

export default Question