import React, { useEffect, useState } from 'react'
import { Card, Typography, Input, Stack, Box, Button } from '@mui/joy'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import ArticlePreviewModal from '../../Components/common/ArticlePreviewModal'
import AddArticleModal from '../../Components/common/AddArticleModal'
import EditArticleModal from '../../Components/common/EditArticleModal'
import Category from '../../Components/common/Category'
import DeleteConfModal from '../../Components/common/DeleteConfModal';
import { DelArticleQuestion, GetArticleQuestions } from '../../config/apiConfig';
import { toastError, toastSuccess } from '../../Utils/Toasts';


const ATDQuestion = () => {
    const [questions, setQuestions] = useState([]);
    const [selectedQuestion, setSelectedQuestion] = useState(null);
    const [deletedQuestion, setDeletedQuestion] = useState(null);
    const [editQuestion, setEditQuestion] = useState(null);
    const [isModalOpen, setModalOpen] = useState(true);
    const [searchIpt, setSearchIpt] = useState("")

    useEffect(() => {
        fetchQuestion()
    }, [])


    const columns = [
        { field: 'uniqueCode', headerName: 'ID', width: 100 },
        {
            field: 'name',
            headerName: 'Article Name',
            width: 200,
            editable: true,
        },
        {
            field: 'paragraph',
            headerName: 'paragraph',
            width: 800,
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

    const handleInputChange = (event) => {
        const {value} = event.target;
        setSearchIpt(value);
    }

    const fetchQuestion = async () => {
        try {
            debugger
            const allQuestions = await GetArticleQuestions(searchIpt);
            setQuestions(allQuestions)
        } catch (error) {
            console.error('FEtch failed:', error.message);
        }
    }

    const handleDeleteClick = (id) => () => {
        const selectedQue = questions.filter(e => e.uniqueCode == id)
        setDeletedQuestion(selectedQue[0])
        setModalOpen(true);
    };

    const handleEditClick = (id) => () => {
        const editedQue = questions.filter(e => e.uniqueCode == id)
        setEditQuestion(editedQue[0])
        setModalOpen(true);
    };

    const onDelete = async () => {
        try {
            const { _id } = deletedQuestion
            const deletedObj = await DelArticleQuestion(_id)
            fetchQuestion()
            toastSuccess(deletedObj.message)
            handleCloseModal()
        } catch (error) {
            toastError(error.message)
            console.error('Update failed:', error.message);
        }
    };

    const handleShowClick = (question) => () => {
        const selectedQue = questions.filter(e => e.uniqueCode == question)
        setSelectedQuestion(selectedQue[0]);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        fetchQuestion()
        setDeletedQuestion(null)
        setSelectedQuestion(null);
        setEditQuestion(null);
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
                        <Input placeholder="Question" onChange={handleInputChange} value={searchIpt}/>
                        <Button variant="solid" size="sm" onClick={fetchQuestion}>
                            Search
                        </Button>
                        <Box style={{ marginLeft: 'auto' }}>
                            <AddArticleModal />
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
                <ArticlePreviewModal
                    question={selectedQuestion}
                    handleClose={handleCloseModal}
                    open={isModalOpen}
                />
            )}
            {
                deletedQuestion && (
                    <DeleteConfModal
                        onDelete={onDelete}
                        onClose={handleCloseModal}
                        open={isModalOpen}
                        deletedQuestion={deletedQuestion}
                    />
                )
            }
            {
                editQuestion && (
                    <EditArticleModal
                        onDelete={onDelete}
                        onClose={handleCloseModal}
                        open={isModalOpen}
                        question={editQuestion}
                    />
                )
            }
        </>
    )
}

export default ATDQuestion