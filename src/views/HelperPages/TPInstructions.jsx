import React from 'react'
import { Box, Card, Container, Typography, List, ListItem, Button } from '@mui/joy';
import { Link } from "react-router-dom";

const TPInstructions = () => {
  return (<>
    <Container maxWidth="" sx={{ height: 'calc(100vh-220px)', display: 'flex', width: 'auto' }}>
      <Card
        color="neutral"
        invertedColors={false}
        orientation="horizontal"
        size="lg"
        variant="soft"
        sx={{ py: 5, marginBlock: 'auto', width: '1000px', flexDirection: "column" }}
      >
        <Typography level="h1" sx={{ mb: 2, textAlign: "center" }}>
          🕒 Get ready for the 1-minute typing challenge! 🚀
        </Typography>
        <Typography level="h4" sx={{ mb: 2, textAlign: "center" }}>
          Type the given text as accurately and quickly as possible. Correct spelling and punctuation matter, so aim for both speed and precision.
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
              <ListItem>Just start typing when you're ready.</ListItem>
              <ListItem>Type the displayed text in the text box.</ListItem>
              <ListItem>The timer will start automatically.</ListItem>
              <ListItem>After 1 minute, the test will end, and your results will be saved.</ListItem>
              <ListItem>Pay attention to accuracy and try to type as much as you can within the time limit.</ListItem>
            </List>
          </Box>
        </Card>
        <Box sx={{ alignSelf: "center" }}>

          <Link to={'/Typing-test'}>
            <Button
              size="lg"
              variant="solid"
            >
              Next &gt; &gt;
            </Button>
          </Link>
        </Box>
      </Card >
    </Container >
  </>
  )
}

export default TPInstructions