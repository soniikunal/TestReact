// Login.js
import React, { useState } from 'react';
import { login } from '../../config/authServices.js';
import { Box, Grid, } from '@mui/material'
import { Input, FormLabel, FormControl, Button, Checkbox } from '@mui/joy'
import image from "../../assets/login-image.svg"
import certificateImg from "../../assets/GreatPlace.png"
// import Checkbox from '@mui/joy/Checkbox';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const result = await login(username, password);
      console.log('Login successful:', result);
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center" sx={{height:'calc(100% - 20px)'}}>
        <Grid item xs={0} md={8} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', justifyItems: 'center', borderRight: '1px solid #64626233' }}>
          <Box><img src={image} alt="" /></Box>
        </Grid>

        <Grid item xs={12} md={4}>
        
          <Box sx={{ gap: '0.5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', mx: '2rem' }}>
            <div style={{display: "flex"}}>
            <h2 style={{marginInlineEnd:'auto', marginBlock :'auto'}}>Welcome 👋</h2>
            <img style={{width: "100px", height: "auto", display: "inline"}} src={certificateImg} alt="" />  
            </div>
            {/* <p>Please sign-in to your account and start the adventure</p> */}
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl>
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Password</FormLabel>
              <Input sx={{ mb: 1 }} value={password} onChange={(e) => setPassword(e.target.value)} />
              {/* <a href="" >Forgot Password?</a> */}
            </FormControl>
            {/* <Checkbox color="primary" disabled={false} label="Remember Me" /> */}
            <Button onClick={handleLogin} size="lg" sx={{ my: 2 }}>Login</Button>

            <Box sx={{ textAlign: 'center' }}>
              <p>
                New on our platform? <a href="/register" style={{ color: 'blue' }}>Create an account</a>
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
      

    </>
  );
};

export default Login;
