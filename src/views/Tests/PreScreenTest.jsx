import React, { useEffect, useState, useRef } from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Container, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FormControl, FormLabel, Card, Typography, Divider, Box, Button, Chip } from '@mui/joy';
import { setPreTestQuestion, updateSelectedAnswers } from '../../config/apiConfig';
import './test.css'

const imgUrl = import.meta.env.VITE_API_URL;


const PreScreenTest = () => {

  const [time, setTime] = useState(45 * 60);
  const [currentQueNo, setCurrentQueNo] = useState(1);
  const [selectedOption, setSelectedOption] = useState(null);
  const [question, setQuestion] = useState({});
  const [userInfo, setUserInfo] = useState({});
  const [queArray, setQueArray] = useState([]);
  const elementRef = useRef(null);

  useEffect(() => {
    fetchQuestion()
  }, [])

  useEffect(() => {
    setQuestion(queArray[currentQueNo - 1])
  }, [currentQueNo, queArray])

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {

        if (prevTime > 0 && prevTime !== 1) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          // You can add additional logic here when the timer reaches 0
          console.log(90);
        }
      });
    }, 1000);

    return () => clearInterval(timerId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []); // Empty dependency array to run the effect only once

  const fetchQuestion = async () => {
    debugger
    try {
      const response = await setPreTestQuestion()
      setQueArray(response.user.assignedQuestions)
      setUserInfo(response.user._id)
      setTime(response.user.remainingTime)
    } catch (error) {
      console.log(`Cant fetch questions:` + error)
    }
  }

  const SendAnswers = async (newSelectedAnswer) => {
    debugger
    try {
      const response = await updateSelectedAnswers(userInfo, newSelectedAnswer)
    } catch (error) {
      console.log(`Cant send answers:` + error)

    }
  }

  const updateSelectedAnswersState = (selectedIndex) => {
    debugger
    const newSelectedAnswer = {
      questionId: question._id,
      selectedAnswer: selectedIndex,
      remainingTime: time
    };
    setQuestion({
      ...question,
      selectedAnswer: 4
    })

    setQueArray((prevQueArray) => {
      const updatedQueArray = [...prevQueArray];
      const questionIndex = updatedQueArray.findIndex(
        (que) => que._id === question._id
      );

      if (questionIndex !== -1) {
        // Update the selectedAnswer property in the queArray
        updatedQueArray[questionIndex] = {
          ...updatedQueArray[questionIndex],
          selectedAnswer: selectedIndex,
        };
      }

      return updatedQueArray;
    });

    SendAnswers(newSelectedAnswer)
  };

  const handleSelectAnswer = (e) => {
    debugger
    if (e?.target) {
      const selectedIndex = Number.parseInt(e.target.value, 10);
      updateSelectedAnswersState(selectedIndex);
    }
  };

  const handleChange = (event, value) => {
    setCurrentQueNo(value);
  };

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleNext = () => {
    const increment = currentQueNo + 1
    setCurrentQueNo(increment)
    scrollToElement()
  }
  const handlePrevious = () => {
    const decrement = currentQueNo - 1
    setCurrentQueNo(decrement)
    scrollToElement()
  }

  const formatTime = (seconds) => {
    if (seconds !== undefined) {

      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `Remaining Time ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }
    return `Times Up`
  };

  function scrollToElement() {
    if (elementRef.current) {
      elementRef.current.scrollIntoView({
        behavior: 'smooth', // 'auto' or 'smooth'
        block: 'start',     // 'start', 'center', 'end', or 'nearest'
        inline: 'start',    // 'start', 'center', 'end', or 'nearest'
      });
    }
  }

  return (
    <Container maxWidth="">
      <Card
        color="primary"
        variant="soft"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
          <Chip>Total Number of Question 100</Chip>
          <Chip>{formatTime(time)}</Chip>
        </Box>
        <Card color="neutral"
          invertedColors
          variant="soft"
          sx={{ maxWidth: '1010px' }}>
          <Pagination count={100} page={currentQueNo} onChange={handleChange} boundaryCount={100} hideNextButton={true} hidePrevButton={true} />
        </Card>

        {question &&
          <>
            <FormControl component="fieldset" style={{ alignSelf: 'flexStart', width: '100%' }} ref={elementRef}>
              <FormLabel component="legend" title={question.uniqueCode}>Q{currentQueNo}. {question.question}</FormLabel>
              {question.imgPath &&
                <img src={imgUrl + question.imgPath} className='testImage' />
              }
              <RadioGroup value={selectedOption} onChange={e => handleSelectAnswer(e)}>
                {question?.options?.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                    checked={question.selectedAnswer ? question.selectedAnswer == index : false}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'center', mt: 2 }}>
              <Button variant="soft" color="primary" onClick={handlePrevious}>
                Previous
              </Button>

              <Button variant="soft" color="primary" onClick={handleNext}>
                Next
              </Button>
            </Box>
          </>
        }
      </Card>
    </Container>
  )
}

export default PreScreenTest


