import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Pagination from '@mui/material/Pagination';
import { Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Button, Box, Card, Container, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import './test.css'
import imagePath from '../../assets/Capture1.png'
const Home = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const sampleQuestion = 'What is the capital of France?and why did htey attack India? What was the reaso n behind it please explain in details';
  const sampleOptions = ['Berlin', 'London', 'Paris', 'Madrid'];

  return (
    <Container sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Stack spacing={2}>
        <Card variant="outlined" sx={{ maxWidth: '990px' }}>
          <Pagination count={100} page={page} onChange={handleChange} boundaryCount={100} hideNextButton={true} hidePrevButton={true} />
        </Card>
      </Stack>
      <Box sx={{ display: 'flex', flexDirection: 'column', py: 4 }}>
        <Box sx={{ mx: 'auto' }}>
          <FormControl component="fieldset">
            <FormLabel component="legend" title='QUestionIndex'>Q{page}. {sampleQuestion}</FormLabel>
            <img src={imagePath} loading="lazy" className='testImage' />
            {/* <img src={`../../assets/Capture1.PNG`} loading="lazy" /> */}
            <RadioGroup value={selectedOption} onChange={handleOptionChange}>
              {sampleOptions.map((option, index) => (
                <FormControlLabel
                  key={index}
                  value={option}
                  control={<Radio />}
                  label={option}
                />
              ))}
            </RadioGroup>
          </FormControl>
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'space-around', justifyItems: 'center' }}>
          <Button variant="contained" color="primary" >
            Previous
          </Button>

          <Button variant="contained" color="primary" >
            Next
          </Button>
        </Box>
      </Box >
    </Container>
  )
}

export default Home


