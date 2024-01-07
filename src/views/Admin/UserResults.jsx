import React, { useState, useEffect } from 'react'
import { Card, Typography, Input, Stack, Box, Button } from '@mui/joy'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import { GetUserScores } from '../../config/apiConfig';

const UserResults = () => {
    const [searchIpt, setSearchIpt] = useState([]);
    const [users, setUser] = useState([]);

    useEffect(() => {
        fetchUserResult()
    }, [])

    const columns = [
        { field: 'uniqueCode', headerName: 'userId', width: 100 },
        {
            field: 'Prescreening',
            headerName: 'Prescreening',
            width: 200,
            editable: true,
        },
        {
            field: 'ATD',
            headerName: 'ATD',
            width: 200,
            editable: true,
        },
        {
            field: 'TypingTest',
            headerName: 'TypingTest',
            width: 200,
            editable: true,
        },
        {
            field: 'Submitted On',
            headerName: 'createdAt',
            width: 200,
            editable: true,
            renderCell: formateDate
        },
        // {
        //     field: 'actions',
        //     type: 'actions',
        //     headerName: 'Actions',
        //     width: 100,
        //     cellClassName: 'actions',
        //     getActions: ({ id }) => {
        //         return [
        //             <GridActionsCellItem
        //                 icon={<LayersIcon />}
        //                 label="Preview"
        //                 className="textPrimary"
        //                 // onClick={handleShowClick(id)}
        //                 color="inherit"
        //             />,
        //             <GridActionsCellItem
        //                 icon={<EditIcon />}
        //                 label="Edit"
        //                 className="textPrimary"
        //                 // onClick={handleEditClick(id)}
        //                 color="inherit"
        //             />,
        //             <GridActionsCellItem
        //                 icon={<DeleteIcon />}
        //                 label="Delete"
        //                 // onClick={handleDeleteClick(id)}
        //                 color="inherit"
        //             />,
        //         ];
        //     },
        // },
    ];

    const fetchUserResult = async () => {
        try {
            const allQuestions = await GetUserScores(searchIpt);
            setUser(allQuestions)
        } catch (error) {
            console.error('Fe tch failed:', error.message);
        }
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchIpt(value);
    }

    function formateDate(date) {
        if (!date.row.createdAt) {
            return ""
        }
        const dateObject = new Date(date.row.createdAt);
        // Format the date as 'MM/DD/YYYY hh:mm:ss A'
        const formattedDate = new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hour12: true,
            timeZone: 'UTC'  // Specify your desired timezone here
        }).format(dateObject);
        return formattedDate;

    }

    return (
        <>
            <Card
                color="primary"
                size="md"
                variant="soft"
            >
                <Typography level="h1" fontSize="xl" sx={{ mb: 0.5, textAlign: "center" }}>Test Results</Typography>


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
                        <Input placeholder="UserId" onChange={handleInputChange} value={searchIpt} />
                        <Button variant="solid" size="sm" onClick={fetchUserResult}>
                            Search
                        </Button>
                        <Box style={{ marginLeft: 'auto' }}>
                            {/* <AddQuestionModal /> */}
                        </Box>
                        {/* <Category /> */}
                    </Stack>
                </Card>

                <DataGrid rows={users}
                    columns={columns}
                    editMode="row"
                    getRowId={(row) => row.userId}
                    disableToolbar
                />

            </Card>
        </>
    )
}

export default UserResults