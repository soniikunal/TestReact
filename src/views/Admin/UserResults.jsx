import React, { useState, useEffect } from 'react'
import { Card, Typography, Input, Stack, Box, Button } from '@mui/joy'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';
import LayersIcon from '@mui/icons-material/Layers';
import { GetUserScores } from '../../config/apiConfig';
import Flatpickr from 'react-flatpickr';
import ExcelJS from 'exceljs';
import 'flatpickr/dist/themes/material_green.css';
import './admin.css'
import { toastError } from '../../Utils/Toasts';
import { saveAs } from 'file-saver';
const UserResults = () => {

    const maxDate = new Date();
    const [searchIpt, setSearchIpt] = useState('');
    const [users, setUser] = useState([]);
    const [page, setPage] = useState([]);
    const [date, setDate] = useState([null, null]);

    useEffect(() => {
        fetchUserResult()
    }, [])

    const columns = [
        { field: 'userId', headerName: 'RegId', width: 100 },
        { field: 'name', headerName: 'Name', width: 100 },
        { field: 'department', headerName: 'Department', width: 100 },
        {
            field: 'Prescreening',
            headerName: 'Online Test',
            width: 200,
            editable: true,
            renderCell: formateData
        },
        {
            field: 'ATD',
            headerName: 'ATD',
            width: 200,
            editable: true,
            renderCell: formateData
        },
        {
            field: 'TypingTest',
            headerName: 'TypingTest',
            width: 200,
            editable: true,
            renderCell: formateData
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


    const exportToExcel = () => {
        try {
            // Create a new workbook
            if (users.length > 0) {
                const workbook = new ExcelJS.Workbook();
                const worksheet = workbook.addWorksheet('Sheet1');
                const headers = [
                    'userId',
                    'name',
                    'department',
                    'OnlineTest',
                    'ATD',
                    'TypingTest',
                    'Date',
                    'position',
                    'Source Of Information',
                    'Referral'
                ];
                worksheet.addRow(headers);
                const data = users;

                //Sorting descending
                data.toSorted((a, b) => {
                    const prescreeningA = parseInt(a['Prescreening'], 10);
                    const prescreeningB = parseInt(b['Prescreening'], 10);

                    // Compare 'Prescreening' values in descending order
                    return prescreeningB - prescreeningA;
                }).forEach((row) => {
                    // Extract values from the object in the correct order
                    const rowData = headers.map(header => {
                        if (header == 'Date') {
                            return row['createdAt'].split('T')[0]
                        } else if (header == 'OnlineTest') {
                            return row['Prescreening'] == null ? 'N/A' : row['Prescreening']
                        } else if (['position', 'Source Of Information', 'department', 'Referral'].includes(header)) {
                            console.log(formateDataForExcel(row, header))
                            return formateDataForExcel(row, header)
                        } else {
                            return row[header] == null ? 'N/A' : row[header]
                        }
                    });
                    // Add a new row with the extracted values
                    worksheet.addRow(rowData);

                    const prescreeningValue = parseInt(row['Prescreening'], 10);
                    // Add color to rows based on the Prescreening value
                    if (prescreeningValue < 45) {
                        worksheet.lastRow.eachCell({ includeEmpty: true }, (cell) => {
                            cell.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: 'E6B8B7' }, // Red background color
                            };
                        });
                    } else if (prescreeningValue >= 45 && prescreeningValue <= 50) {
                        worksheet.lastRow.eachCell({ includeEmpty: true }, (cell) => {
                            cell.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: 'B8CCE4' }, // Orange background color
                            };
                        });
                    }
                });
                worksheet.columns.forEach((column) => {
                    let maxLength = 0;

                    column.eachCell({ includeEmpty: true }, (cell) => {
                        const cellLength = String(cell.value).length;
                        maxLength = Math.max(maxLength, cellLength);
                    });

                    column.width = maxLength + 2; // Add extra space for readability
                });

                // Save the file and prompt the user to download
                workbook.xlsx.writeBuffer()
                    .then((buffer) => {
                        saveAs(new Blob([buffer], { type: 'application/octet-stream' }), 'Recruitment Results.xlsx');
                    })
                    .catch((error) => {
                        console.error('Error writing the file:', error);
                    });
            }
        } catch (error) {
            toastError(error)
        }
    };

    const fetchUserResult = async () => {
        try {
            setUser([])
            const allQuestions = await GetUserScores(searchIpt, date[0], date[1], page);
            if (allQuestions.message) {
                toastError(allQuestions.message)
            }
            setUser(allQuestions)
            console.log(users);
        } catch (error) {
            console.error('Fetch failed:', error.message);
        }
    }

    const handleInputChange = (event) => {
        const { value } = event.target;
        setSearchIpt(value);
    }

    const handleDateChange = (e) => {
        setDate(e)
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
    function formateData(date) {
        if (date.row[date.field] === null) {
            return "N/A"
        }
        return date.row[date.field];
    }
    function formateDataForExcel(row, field) {
        const data = row?.applicantData[0]
        if (data) {
            // ['position', 'Source Of Information', 'Referral']
            if (field == 'position' || field == 'department') {
                return data[field] == null ? 'N/A' : data[field]
            }
            if (field == 'Source Of Information') {
                return data['source'] == null ? 'N/A' : data['source']
            }
            // if (field == 'Referral') { }
        }
        else return ""
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
                        {/* <AddQuestionModal /> */}
                        <Flatpickr
                            className='flatpickr'
                            placeholder='Select date range'
                            options={{
                                mode: 'range',
                                maxDate: maxDate,
                                dateFormat: 'd M Y',
                            }}
                            value={date}
                            onChange={handleDateChange}
                        />
                        <Button variant="solid" size="sm" onClick={fetchUserResult}>
                            Search
                        </Button>
                        <Box style={{ marginLeft: 'auto' }}>
                            {users.length > 0 &&
                                <Button variant="solid" size="sm" onClick={exportToExcel}>
                                    Excel
                                </Button>}
                        </Box>
                        {/* <Category /> */}
                    </Stack>
                </Card>

                <DataGrid rows={users}
                    columns={columns}
                    editMode="row"
                    getRowId={(row) => row.userId}
                    disableToolbar
                // initialState={{
                //     pagination: { paginationModel: { pageSize: 5 } },
                //   }}
                />

            </Card>
        </>
    )
}

export default UserResults