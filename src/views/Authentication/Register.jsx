// Register.js
import React, { useState } from 'react';
import { register } from '../../config/authServices.js';
import { Box, Grid, } from '@mui/material'
import { Input, FormLabel, FormControl, Button } from '@mui/joy'

const Register = () => {
    const [mailId, setMailId] = useState('');
    const [employeeId, setEmployeeId] = useState('');

    const handleRegister = async () => {
        try {
            const result = await register(setEmployeeId, mailId);
            console.log('Register successful:', result);
        } catch (error) {
            console.error('Register failed:', error.message);
        }
    };

    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={0} md={8} sx={{ borderRight: '1px solid #64626233' }}>
                    <Box>xs=6 md=8</Box>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Box sx={{ display: 'flex', justifyContent: 'center', justifyItems: 'center', flexDirection: 'column' }}>
                        {/* <FormControl sx={{ my: 1 }}>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl> */}
                        <FormControl sx={{ my: 1 }}>
                            <FormLabel>Employee Id</FormLabel>
                            <Input value={employeeId} onChange={(e) => setEmployeeId(e.target.value)} />
                        </FormControl>
                        <FormControl sx={{ my: 1 }}>
                            <FormLabel>Organization Mail</FormLabel>
                            <Input value={mailId} onChange={(e) => setMailId(e.target.value)} />
                        </FormControl>
                        {/* <FormControl sx={{ my: 1 }}>
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl> */}
                        <Button onClick={handleRegister} size="lg" sx={{ my: 2 }}>Register</Button>
                    </Box>
                </Grid>
            </Grid>

        </>
    );
};

export default Register;
