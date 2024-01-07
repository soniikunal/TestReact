import React, { useState } from 'react';
import { examLogin } from '../../config/authServices.js';
import { Box, Grid, } from '@mui/material'
import { Input, FormLabel, FormControl, Button, Checkbox } from '@mui/joy'
import image from "../../assets/login-image.svg"
import certificateImg from "../../assets/GreatPlace.png"
import { Link } from "react-router-dom";
import { toastError, toastSuccess } from '../../Utils/Toasts.js';
// import Checkbox from '@mui/joy/Checkbox';


const ExamLogin = () => {
  const [registerId, setRegisterId] = useState('');
  const [registerIdError, setRegisterIdError] = useState('');
  const [mailId, setMailId] = useState('');
  const [mailIdError, setMailIdError] = useState('');

  const handleLogin = async () => {
    try {
      if (!registerId) {
        setRegisterIdError("Enter 6 digits Register Id")
        return
      }
      if (!isEmailValid()) {
        setMailIdError('Enter correct e-mail!')
        return
      } else {
        setMailIdError("")
      }
      const result = await examLogin(registerId, mailId);
      toastSuccess("Login Successful !")
      console.log('Login Successful:', result);
    } catch (error) {
      toastError(error.message)
      console.error('Login failed:', error.message);
    }
  };
  const handleRegister = (e) => {
    const value = e.target.value.toUpperCase();
    if (e.target) {
      if (value.length == 7 || value.length > 7) {
        e.preventDefault()
      } else if (value.length <= 6) {
        setRegisterIdError("Enter 6 digits Register Id")
        setRegisterId(value)
      }
      if (value.length == 6) {
        setRegisterIdError('')
      }
    }
  }

  const isEmailValid = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(mailId);
  };


  return (
    <>
      <Grid container spacing={2} alignItems="center" sx={{ height: 'calc(100% - 20px)' }}>
        <Grid item xs={0} md={8} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', justifyItems: 'center', borderRight: '1px solid #64626233' }}>
          <Box><img src={image} alt="" /></Box>
        </Grid>

        <Grid item xs={12} md={4}>

          <Box sx={{ gap: '0.5rem', display: 'flex', justifyContent: 'center', flexDirection: 'column', mx: '2rem' }}>
            <div style={{ display: "flex" }}>
              <h2 style={{ marginInlineEnd: 'auto', marginBlock: 'auto' }}>Welcome 👋</h2>
              <Link to={"/admin/login"}>
                <img style={{ width: "100px", height: "auto", display: "inline" }} src={certificateImg} alt="" />
              </Link>
            </div>
            {/* <p>Please sign-in to your account and start the adventure</p> */}
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Registration ID</FormLabel>
              <Input value={registerId} autocomplete="off" onChange={(e) => handleRegister(e)} error={registerIdError.length > 0} />
              {registerIdError && <small style={{ color: 'red' }}>{registerIdError}</small>}
            </FormControl>
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Email ID</FormLabel>
              <Input value={mailId} autocomplete="off" onChange={(e) => setMailId(e.target.value)} error={mailIdError.length > 0} />
              {mailIdError && <small style={{ color: 'red' }}>{mailIdError}</small>}
            </FormControl>
            <Button onClick={handleLogin} size="lg" sx={{ my: 2 }}>Login</Button>
          </Box>
        </Grid>
      </Grid>


    </>
  );
};

export default ExamLogin;
