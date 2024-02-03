import React from 'react'
import { Box, Card, Container, Typography, List, ListItem, Button } from '@mui/joy';
import { Link } from "react-router-dom";

const ATDInstructions = () => {
  return (<>
    <Container maxWidth="" sx={{ height: 'calc(100vh-220px)', display: 'flex', width: 'auto' }}>
      <Card
        color="neutral"
        invertedColors={false}
        orientation="horizontal"
        size="lg"
        variant="soft"
        sx={{ py: 5, marginBlock: 'auto', maxWidth: '1200px', flexDirection: "column" }}
      >
        <Typography level="h1" sx={{ mb: 2, textAlign: "center" }}>
          🌐 Welcome to the ATD Test - Attention To Detail! ⏱️
        </Typography>
        <Typography level="h4" sx={{ mb: 2, textAlign: "center" }}>
          This test comprises 10 Multiple Choice Questions (MCQs), and you have a total of 10 minutes to showcase your skills. The format is similar to the previous test, so follow the instructions carefully.
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
              sx={{ mb: 4, textAlign: "center", textDecoration: 'underline' }}
            >
              Instructions
            </Typography>
            <List marker='circle' sx={{ fontSize: 'larger', fontWeight: 600 }}>
              <ListItem>Read each question thoroughly and choose the most fitting answer.</ListItem>
              <ListItem>Navigate between questions using 'Next' and 'Previous' if needed.</ListItem>
              <ListItem>Time is of the essence! Keep an eye on the timer; the test will auto-submit at 0:00.</ListItem>
              <ListItem>Click 'Start' to commence the ATD Test.</ListItem>
            </List>
          </Box>
        </Card>
        <Box sx={{ alignSelf: "center" }}>

          <Link to={'/ATDTest'}>
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

export default ATDInstructions
