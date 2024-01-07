// Register.js
import React, { useState } from "react";
import { register } from "../../config/authServices.js";
import { Box, Grid } from "@mui/material";
import { Input, FormLabel, FormControl, Button } from "@mui/joy";
import image from "../../assets/register-image.svg";
import certificateImg from "../../assets/GreatPlace.png";

const Register = () => {
  const [mailId, setMailId] = useState("");
  const [employeeId, setEmployeeId] = useState("");

  const handleRegister = async () => {
    try {
      const result = await register(setEmployeeId, mailId);
      console.log("Register successful:", result);
    } catch (error) {
      console.error("Register failed:", error.message);
    }
  };

  return (
    <>
      <Grid container spacing={2} alignItems="center">
        <Grid
          item
          xs={0}
          md={8}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            justifyItems: "center",
            borderRight: "1px solid #64626233",
          }}
        >
          <Box>
            <img src={image} alt="" />
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              flexDirection: "column",
              mx: "2rem",
            }}
          >
            <div style={{ display: "flex" }}>
              <h2 style={{ marginInlineEnd: "auto", marginBlock: "auto" }}>
                Register
              </h2>
              <img
                style={{ width: "100px", height: "auto", display: "inline" }}
                src={certificateImg}
                alt=""
              />
            </div>
            {/* <FormControl sx={{ my: 1 }}>
              <FormLabel>Username</FormLabel>
              <Input value={username} onChange={(e) => setUsername(e.target.value)} />
            </FormControl> */}
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Employee Id</FormLabel>
              <Input
                value={employeeId}
                onChange={(e) => setEmployeeId(e.target.value)}
              />
            </FormControl>
            <FormControl sx={{ my: 1 }}>
              <FormLabel>Organization Mail</FormLabel>
              <Input
                value={mailId}
                onChange={(e) => setMailId(e.target.value)}
              />
            </FormControl>
            {/* <FormControl sx={{ my: 1 }}>
              <FormLabel>Password</FormLabel>
              <Input value={password} onChange={(e) => setPassword(e.target.value)} />
            </FormControl> */}
            <Button onClick={handleRegister} size="lg" sx={{ my: 2 }}>
              Register
            </Button>
            <Box sx={{ textAlign: 'center' }}>
              <p>
                Already have an account? <a href="/admin/login" style={{ color: 'blue' }}>login</a>
              </p>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Register;
