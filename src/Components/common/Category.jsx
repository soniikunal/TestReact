import React, { useState, useEffect } from 'react'
import { Container } from '@mui/material'
import { Sheet, FormControl, FormLabel, Modal, ModalClose, Typography, Input, Divider, Box, Button, ModalOverflow, } from '@mui/joy';
import { AddCategory, GetCategories, UpdateCategory, DeleteCategory } from '../../config/apiConfig.js'
import { DataGrid, GridActionsCellItem } from '@mui/x-data-grid';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/DeleteOutlined';


const Category = () => {

    const [open, setOpen] = useState(false);
    const [rows, setRows] = useState([]);
    const [editingMode, setEditingMode] = useState(false);
    const [categoryItem, setCategoryItem] = useState(null);
    const [categoryName, setCategoryName] = useState('');

    // useEffect(() => {
    //     fetchCategories()
    // }, [])

    const columns = [
        { field: '_id', headerName: 'ID', width: 180 },
        {
            field: 'name',
            headerName: 'Category Name',
            width: 270,
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

    const fetchCategories = async () => {
        try {
            const allCategories = await GetCategories();
            setRows(allCategories)
        } catch (error) {
            console.error('FEtch failed:', error.message);
        }
    }

    const UpdateCategories = async () => {
        try {
            const { _id } = categoryItem
            const allCategories = await UpdateCategory(_id, categoryName);
            fetchCategories()
        } catch (error) {
            console.error('Update failed:', error.message);
        }
    }

    const AddCategories = async () => {
        try {
            const allCategories = await AddCategory(categoryName);
            fetchCategories()
        } catch (error) {
            console.error('add failed:', error.message);
        }
    }

    const handleDeleteClick = (id) => async () => {
        try {
            await DeleteCategory(id)
            fetchCategories()
        } catch (error) {
            console.error('Delete failed:', error.message);
        }
    };

    const handleEditClick = (id) => () => {
        const selectedItem = rows.filter(e => e._id == id)
        setCategoryItem(selectedItem[0])
        setCategoryName(selectedItem[0].name)
        setEditingMode(true)
    };

    const handleSaveClick = () => {
        if (editingMode === true) {
            UpdateCategories()
            setEditingMode(false)
        } else {
            AddCategories()
        }
        setCategoryName('')
    };

    const handleAddCategoryName = (e) => {
        setCategoryName(e.target.value)
    };

    return (
        <>
            <Button variant="outlined" color="neutral" onClick={() => {
                fetchCategories()
                setOpen(true)
            }}>
                Manage Categories
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
                            Categories
                        </Typography>
                        <Divider sx={{ my: 2 }} />
                        <Sheet >
                            <Box>
                                {/* {(editingMode === false) ? <FormControl sx={{ mb: 2, flexDirection: "row", gap: "20px" }}>
                                        <FormLabel>Add Category</FormLabel>
                                        <Input placeholder="Category Name" variant="soft" onChange={e => handleAddCategoryName(e)} sx={{ flexGrow: 1 }} />
                                        <Button>Submit</Button>
                                    </FormControl> : <FormControl sx={{ mb: 2, flexDirection: "row", gap: "20px" }}>
                                        <FormLabel>Edit Category</FormLabel>
                                        <Input placeholder="Category Name"  value={categoryItem.name} variant="soft" onChange={e => handleAddCategoryName(e)} sx={{ flexGrow: 1 }} />
                                        <Button onClick={handleSaveClick}>Save</Button>
                                    </FormControl>} */}
                                <FormControl sx={{ mb: 2, flexDirection: "row", gap: "20px" }}>
                                    <FormLabel>{(editingMode === false) ? 'Add Category' : 'Edit Category'}</FormLabel>
                                    <Input placeholder="Category Name" value={categoryName} variant="soft" onKeyDown={e => e.key === 'Enter' && handleSaveClick()} onChange={e => handleAddCategoryName(e)} sx={{ flexGrow: 1 }} />
                                    <Button onClick={handleSaveClick}>{(editingMode === false) ? 'Submit' : 'Save'}</Button>
                                </FormControl>
                            </Box>


                            <DataGrid rows={rows}
                                columns={columns}
                                editMode="row"
                                getRowId={(row) => row._id}
                            />

                        </Sheet>
                    </Sheet>
                </ModalOverflow>
            </Modal>
        </>
    )
}

export default Category