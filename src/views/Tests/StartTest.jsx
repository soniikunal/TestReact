import React, { useState, useEffect } from "react";
import { CardContent, Typography, Container, Button, Box } from "@mui/material";
import { Card } from "@mui/joy";
import { Link } from "react-router-dom";

export default function StartTest() {
  return (
    <>
    <Container maxWidth="">
      <Card
        color="primary"
        size="md"
        variant="soft"
        style={{
          height: 'calc(100vh - 180px)',
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* <Container> */}
          {/* <Typography variant="h6" gutterBottom fontSize="xl" sx={{ textAlign: "center" }}>
            Test
          </Typography> */}
          <Card className="outerCard">
            <Typography variant="h4">Instruction</Typography>
            <Card className="innerCard">
              <Typography variant="subtitle1">
                1) There are 100 Multiple Choice Questions.
              </Typography>
              <Typography variant="subtitle1">
                2) There is no negative marking.
              </Typography>
              <Typography variant="subtitle1">
                3) You can switch between questions at any point in time.
              </Typography>
              <Typography variant="subtitle1">
                4) Time allocated for test is 45 minutes.
              </Typography>
              <Typography variant="subtitle1">
                5) Answers to the questions can be edited during the allocated
                time for the test(by clicking on Next and Previous tabs).
              </Typography>
            </Card>
            <Box
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: "16px",
              }}
            >
              <Link to={'/prescreening'}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                >
                Next &gt; &gt;
              </Button>
                </Link>
            </Box>
          </Card>
      </Card>
        </Container>
    </>
  );
}
