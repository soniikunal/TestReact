import React from 'react'
import { Box, Card, Container, Typography, List, ListItem, Button } from '@mui/joy';
import { Link } from "react-router-dom";

const PreScreeningInstruc = () => {
  return (<>
    <Container maxWidth="" sx={{ height: 'calc(100vh-220px)', display: 'flex', width: 'auto' }}>
      <Card
        color="neutral"
        invertedColors={false}
        orientation="horizontal"
        size="lg"
        variant="soft"
        sx={{ py: 5, marginBlock: 'auto', width: '1200px', flexDirection: "column" }}
      >
        <Typography level="h1" sx={{ mb: 2, textAlign: "center" }}>
          📚 Welcome to the Multiple Choice Questions (MCQ) Test! 🕒
        </Typography>
        <Typography level="h4" sx={{ mb: 2, textAlign: "center" }}>
          This test consists of 100 questions, and you have a total of 45 minutes to complete it. Make sure to read each question carefully and choose the most appropriate answer.
        </Typography>
        <Card
          color="warning"
          invertedColors={false}
          orientation="horizontal"
          size="lg"
          variant="soft"
          sx={{ marginBlock: 'auto', width: '100%' }}
        >
          <Box sx={{ width: "100%" }}>
            <Typography
              color="primary"
              noWrap
              variant=""
              level="h1"
              sx={{ mb: 4, textAlign: "center" }}
            >
              Instructions
            </Typography>
            <List marker='circle' sx={{ fontSize: 'larger', fontWeight: 600 }}>
              <ListItem>Read each question and the answer choices thoroughly.</ListItem>
              <ListItem>Select the correct answer by clicking on the corresponding option.</ListItem>
              <ListItem>You can navigate between questions using the 'Next' and 'Previous' buttons.</ListItem>
              <ListItem>Keep an eye on the timer in the right top corner—once it hits 0:00, the test will automatically submit.</ListItem>
            </List>
          </Box>
        </Card>
        <Box sx={{ alignSelf: "center" }}>

          <Link to={'/PrescreeningTest'}>
            <Button
              size="lg"
              variant="solid"
            >
              Start &gt; &gt;
            </Button>
          </Link>
        </Box>
      </Card >
    </Container >
  </>
  )
}

export default PreScreeningInstruc
