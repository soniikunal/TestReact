import React, { useEffect, useState, useRef } from 'react'
// import Pagination from '@mui/material/Pagination';
// import PaginationItem from '@mui/material/PaginationItem';
import { Container, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FormControl, FormLabel, Card, Typography, Divider, Box, Button, Chip } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import { useNavigate } from 'react-router-dom';
import { setPreTestQuestion, updateSelectedAnswers, calculateScore } from '../../config/apiConfig';
import './test.css'
import { toastError, toastSuccess } from '../../Utils/Toasts';
import SubmitConfModal from '../../Components/common/SubmitConfModal';
import PaginationComponent from '../../Components/MUI/PaginationComponent';

const imgUrl = import.meta.env.VITE_API_URL;


const PreScreenTest = () => {

  const navigate = useNavigate();
  const [time, setTime] = useState(45 * 60);
  const [currentQueNo, setCurrentQueNo] = useState(1);
  const [question, setQuestion] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [queArray, setQueArray] = useState([]);
  const [error, setError] = useState(null);
  const [message, setMessage] = useState(null);
  const elementRef = useRef(null);

  useEffect(() => {
    fetchQuestion()
    const timeoutId = setTimeout(() => {
      setMessage(null);
    }, 20000);

    return () => clearTimeout(timeoutId);
  }, [])

  useEffect(() => {
    setQuestion(queArray[currentQueNo - 1])
  }, [currentQueNo, queArray])

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime((prevTime) => {

        if (prevTime > 1) {
          return prevTime - 1;
        } else {
          clearInterval(timerId);
          SubmitAnswers();
        }
      });
    }, 1000);

    return () => clearInterval(timerId);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchQuestion = async () => {

    try {
      const response = await setPreTestQuestion()
      if (response.user) {
        setQueArray(response.user.assignedQuestions)
        setUserInfo(response.user._id)
        setTime(response.user.remainingTime)
      } else {
        setError(response?.message)
        toastError(response?.message)
        navigate('/ATD');
      }
      if (response.message) {
        setMessage(response.message)
      }
    } catch (error) {
      console.log(`Cant fetch questions:` + error)
    }
  }

  const SendAnswers = async (newSelectedAnswer) => {
    try {
      const response = await updateSelectedAnswers(newSelectedAnswer)
      if (!response.status) {
        toastError('Some issue occurred!')
      }
    } catch (error) {
      console.log(`Cant send answers:` + error)

    }
  }

  const SubmitAnswers = async () => {
    try {
      const response = await calculateScore()
      if (response.success == true) {
        toastSuccess(response.message)
        navigate('/ATD');
      }

    } catch (error) {
      console.log(`Cant send answers:` + error)
    }
  }

  const updateSelectedAnswersState = (selectedIndex) => {
    const newSelectedAnswer = {
      questionId: question._id,
      selectedAnswer: selectedIndex,
      remainingTime: time
    };
    setQuestion({
      ...question,
      selectedAnswer: selectedIndex
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
          selectedAnswer: selectedIndex !== undefined ? selectedIndex : null,
        };
      }

      return updatedQueArray;
    });

    SendAnswers(newSelectedAnswer)
  };

  const handleSelectAnswer = (e) => {
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
  }
  const handlePrevious = () => {
    const decrement = currentQueNo - 1
    setCurrentQueNo(decrement)
  }

  const formatTime = (seconds) => {
    if (seconds !== undefined) {

      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
      return `Remaining Time ${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
    }
    return `Times Up`
  };

  // function scrollToElement() {
  //   if (elementRef.current) {
  //     elementRef.current.scrollIntoView({
  //       behavior: 'smooth', // 'auto' or 'smooth'
  //       block: 'start',     // 'start', 'center', 'end', or 'nearest'
  //       inline: 'start',    // 'start', 'center', 'end', or 'nearest'
  //     });
  //   }
  // }

  return (
    <Container maxWidth="">
      <Card
        color="primary"
        variant="soft"
        sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {question &&
          <>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
              <Chip>Total Number of Question 100</Chip>
              {message && <Chip className='blinking-chip'>{message}</Chip>}
              <Chip>{formatTime(time)}</Chip>
            </Box>
            <Card color="neutral"
              invertedColors
              variant="soft"
              sx={{ maxWidth: '1010px' }}>
              {/* <Pagination count={100} page={currentQueNo} onChange={handleChange} boundaryCount={100} hideNextButton={true} hidePrevButton={true} /> */}
              <PaginationComponent data={queArray} currentQueNo={currentQueNo} handleChange={handleChange} />
            </Card>

            <FormControl component="fieldset" style={{ alignSelf: 'flexStart', width: '100%' }} ref={elementRef}>
              {/* <FormLabel component="legend" title={question.uniqueCode}>Q{currentQueNo}. {question.question}</FormLabel> */}
              <FormLabel component="legend" title={question.uniqueCode} sx={{ alignItems: "start", display:"flex", flexWrap:"nowrap" }} >
                Q{currentQueNo}.{" "}
                <span dangerouslySetInnerHTML={{ __html: question.question }} />
              </FormLabel>
              {question.imgPath &&
                <img src={imgUrl + question.imgPath} className='testImage' />
              }
              <RadioGroup value={question.selectedAnswer !== undefined ? question.selectedAnswer : null} onChange={e => handleSelectAnswer(e)}>
                {question?.options?.map((option, index) => (
                  <FormControlLabel
                    key={index}
                    value={index}
                    control={<Radio />}
                    label={option}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', justifyItems: 'center', mt: 2 }}>
              {(currentQueNo > 1 && queArray.length !== currentQueNo) && <Button variant="solid" color="primary" onClick={handlePrevious} size="lg" sx={{mr:2}}>
                Previous
              </Button>}

              {queArray.length == currentQueNo &&
                <SubmitConfModal onSubmit={SubmitAnswers} />
              }

              {queArray.length !== currentQueNo &&
                <Button variant="solid" color="primary" onClick={handleNext} size="lg" sx={{ml:2}}>
                  Next
                </Button>

              }
            </Box>
          </>
        }
        {error &&
          <Alert variant="soft" color="danger">
            {error}
          </Alert>
        }
      </Card >
    </Container >
  )
}

export default PreScreenTest


