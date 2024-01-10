import React, { useEffect, useState, useRef } from 'react'
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';
import { Container, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FormControl, FormLabel, Card, Typography, Divider, Box, Button, Chip } from '@mui/joy';
import Alert from '@mui/joy/Alert';
import { useNavigate } from 'react-router-dom';
import { setATDTestQuestion, updateSelectedATDAnswers, calculateATDScore } from '../../config/apiConfig';
import './test.css'
import { toastError, toastSuccess } from '../../Utils/Toasts';
import { getUserSession, setUserSession } from '../../Utils/utils';
import SubmitConfModal from '../../Components/common/SubmitConfModal';
import PaginationComponent from '../../Components/MUI/PaginationComponent';
import { setNavigateToLogin } from '../../config/axiosConfig';

const imgUrl = import.meta.env.VITE_API_URL;

const AtdTest = () => {

    const navigate = useNavigate();
    const [time, setTime] = useState(10 * 60);
    const [currentQueNo, setCurrentQueNo] = useState(1);
    const [question, setQuestion] = useState(null);
    const [userInfo, setUserInfo] = useState(null);
    const [queArray, setQueArray] = useState([]);
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const elementRef = useRef(null);

    useEffect(() => {
        setNavigateToLogin(() => {
            toastError('Unauthorized access. Redirecting to login page.')
            navigate('/');

        });
    }, [navigate]);

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
            debugger
            const response = await setATDTestQuestion()
            if (response.user) {
                setQueArray(response.user.assignedQuestions)
                setUserInfo(response.user._id)
                setUserSession(response.user._id)
                setTime(response.user.remainingTime)
            } else {
                setError(response?.message)
                toastError(response?.message)
                navigate('/TypingTest');
            }
            if (response.message) {
                setMessage(response.message)
            }
        } catch (error) {
            debugger
            toastError(error.message)
            console.log(`Cant fetch questions:` + error)
        }
    }

    const SendAnswers = async (newSelectedAnswer) => {
        try {
            // if (userInfo && userInfo !== null) {
            const response = await updateSelectedATDAnswers(newSelectedAnswer)
            // } else if (getUserSession()) {
            //     const response = await updateSelectedATDAnswers(getUserSession(), newSelectedAnswer)
            // }
        } catch (error) {
            console.log(`Cant send answers:` + error)

        }
    }

    const SubmitAnswers = async () => {
        try {
            // if (userInfo && userInfo !== null) {
            const response = await calculateATDScore()
            debugger
            if (response.success == true) {
                toastSuccess(response.message)
                navigate('/TypingTest');
            }
            // } else if (getUserSession()) {
            //     const response = await calculateATDScore(getUserSession())
            // }

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
    //     if (elementRef.current) {
    //         elementRef.current.scrollIntoView({
    //             behavior: 'smooth', // 'auto' or 'smooth'
    //             block: 'start',     // 'start', 'center', 'end', or 'nearest'
    //             inline: 'start',    // 'start', 'center', 'end', or 'nearest'
    //         });
    //     }
    // }
    return (
        <>
            <Container maxWidth="">
                <Card
                    color="primary"
                    variant="soft"
                    sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    {question &&
                        <>
                            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: "100%" }}>
                                <Chip>Total Number of Question 10</Chip>
                                {message && <Chip className='blinking-chip'>{message}</Chip>}
                                <Chip className='blinking-chip'>{formatTime(time)}</Chip>
                            </Box>
                            <Card color="neutral"
                                invertedColors
                                variant="soft"
                                sx={{ maxWidth: '1010px' }}>
                                {/* <Pagination count={100} page={currentQueNo} onChange={handleChange} boundaryCount={100} hideNextButton={true} hidePrevButton={true} /> */}
                                <PaginationComponent data={queArray} currentQueNo={currentQueNo} handleChange={handleChange} />
                            </Card>

                            <FormControl component="fieldset" style={{ alignSelf: 'flexStart', width: '100%' }} ref={elementRef}>
                                <FormLabel component="legend" title={question.uniqueCode}>Q{currentQueNo}. {question.question}</FormLabel>
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
                                {(currentQueNo > 1 && queArray.length !== currentQueNo) && <Button variant="soft" color="primary" onClick={handlePrevious}>
                                    Previous
                                </Button>}

                                {queArray.length == currentQueNo &&
                                    <SubmitConfModal onSubmit={SubmitAnswers} />
                                    // <Button Button variant="soft" color="primary" onClick={SubmitAnswers}>
                                    //     Submit
                                    // </Button>
                                }

                                {queArray.length !== currentQueNo &&
                                    <Button variant="soft" color="primary" onClick={handleNext} >
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
                    {

                    }
                </Card >
            </Container >
        </>
    )
}

export default AtdTest