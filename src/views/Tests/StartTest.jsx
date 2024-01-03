import React, { useState, useEffect } from "react";
import { CardContent, Typography, Container, Button, Box } from "@mui/material";
import { Card } from "@mui/joy";

export default function StartTest() {
  return (
    <>
      <Card
        color="primary"
        size="md"
        variant="soft"
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Test
          </Typography>
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
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/resume"
              >
                Next &gt; &gt;
              </Button>
            </Box>
          </Card>
        </Container>
      </Card>
    </>
  );
}
