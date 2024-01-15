import React, { useState } from 'react'
import { Grid, Box, Typography, RadioGroup, Radio, FormControl, FormLabel, Button, Card, ButtonGroup, Sheet } from '@mui/joy'
import { FormControlLabel, FormHelperText, Container } from '@mui/material';
import { toastError } from '../../Utils/Toasts';


const PersonalityTest = () => {

    const questionsArr1 = [
        { id: 1, que1: "Most Quiet", que2: "Most Talkative", response: null },
        { id: 2, que1: "Slow to Decide", que2: "Fast to Decide", response: null },
        { id: 3, que1: "Going along", que2: "Taking charge", response: null },
        { id: 4, que1: "Supportive", que2: "Challenging", response: null },
        { id: 5, que1: "Compliant", que2: "Dominant", response: null },
        { id: 6, que1: "Deliberate", que2: "Fast to decide", response: null },
        { id: 7, que1: "Asking questions", que2: "Making statements", response: null },
        { id: 8, que1: "Cooperative", que2: "Competitive", response: null },
        { id: 9, que1: "Avoiding risks", que2: "Taking risks", response: null },
        { id: 10, que1: "Slow, studied", que2: "Fast-paced", response: null },
        { id: 11, que1: "Cautious", que2: "Carefree", response: null },
        { id: 12, que1: "Indulgent", que2: "Firm", response: null },
        { id: 13, que1: "Non-assertive", que2: "Assertive", response: null },
        { id: 14, que1: "Mellow", que2: "Matter of fact", response: null },
        { id: 15, que1: "Reserved", que2: "Outgoing", response: null },
    ]
    const questionsArr2 = [
        { id: 16, que1: "Most Open", que2: "Most Close", response: null },
        { id: 17, que1: "Impulsive", que2: "Deliberate", response: null },
        { id: 18, que1: "Using opinions", que2: "Using facts", response: null },
        { id: 19, que1: "Informal", que2: "Formal", response: null },
        { id: 20, que1: "Emotional", que2: "Unemotional", response: null },
        { id: 21, que1: "Easy to know", que2: "Hard to know", response: null },
        { id: 22, que1: "Warm", que2: "Cool", response: null },
        { id: 23, que1: "Excitable", que2: "Calm", response: null },
        { id: 24, que1: "Animated", que2: "Poker-faced", response: null },
        { id: 25, que1: "People-oriented", que2: "Task-oriented", response: null },
        { id: 26, que1: "Spontaneous", que2: "Cautious", response: null },
        { id: 27, que1: "Responsive", que2: "Non-responsive", response: null },
        { id: 28, que1: "Humorous", que2: "Serious", response: null },
        { id: 29, que1: "Impulsive", que2: "Methodical", response: null },
        { id: 30, que1: "Light-hearted", que2: "Intense", response: null },
    ]
    const [errorCheck, setErrorCheck] = React.useState(false);
    const [questions1, setQuestions1] = useState(questionsArr1);
    const [questions2, setQuestions2] = useState(questionsArr2);

    const handleAnswer1 = (questionId, response) => {
        // Update the response in the state
        setQuestions1(prevQuestions => (
            prevQuestions.map(question =>
                question.id === questionId ? { ...question, response } : question
            )
        ))
    }
    const handleAnswer2 = (questionId, response) => {
        // Update the response in the state
        setQuestions2(prevQuestions => (
            prevQuestions.map(question =>
                question.id === questionId ? { ...question, response } : question
            )
        ))
    }
    const calculateResult = () => {
        debugger
        const LeftScore = questions1.reduceRight((total, question) => total += Number(question.response), 0)
        const RightScore = questions2.reduceRight((total, question) => total += Number(question.response), 0)
        console.log(LeftScore);
        console.log(RightScore);
    }
    const checkAnswers = () => {
        setErrorCheck(true)
        const allQuestions = [...questions1, ...questions2]
        const allQuestionsAnswered = allQuestions.every((status) => status.response);

        if (allQuestionsAnswered) {
            // calculate result
            calculateResult()
        } else {
            toastError('All questions are required to be filled!')
        }
    };
    return (
        <>
            <Container maxWidth=''>
                <Card
                    color="primary"
                    variant="soft"
                    sx={{ display: 'flex', flexDirection: 'column', aligns: 'center' }}>
                    <Typography
                        color="primary"
                        noWrap={false}
                        level="h1"
                        variant="soft"
                        sx={{ textAlign: 'center', mt: 2 }}
                    >
                        Personality Test
                    </Typography>
                    <Typography
                        color="neutral"
                        level="h3"
                        sx={{ textAlign: 'center', mb: 3 }}
                    >
                        I perceive myself as ....
                    </Typography>
                    <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                        <Grid item xs={12} md={6}>
                            <Box>
                                {questions1.map((question, index) => (
                                    <Card sx={{ mx: 3, my: 2 }}
                                        color={(errorCheck && question.response == null) && 'danger'}
                                        variant="soft">
                                        <FormControl >
                                            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                                <FormLabel>{question.id}. {question.que1}</FormLabel>
                                                <FormLabel>{question.que2}</FormLabel>
                                            </Box>

                                            <RadioGroup
                                                aria-labelledby=""
                                                defaultValue=""
                                                size="lg"
                                                sx={{
                                                    flexDirection: 'row', gap: 2, display: "flex", justifyContent: 'space-between'
                                                }}
                                            >
                                                {['1', '2', '3', '4'].map((value) => (
                                                    <Sheet
                                                        key={value}
                                                        sx={{
                                                            p: 2,
                                                            borderRadius: 'md',
                                                            boxShadow: 'sm',
                                                            aspectRatio: '4/3',
                                                            minWidth: '50px',
                                                            minHeight: '50px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Radio
                                                            label={value}
                                                            overlay
                                                            disableIcon
                                                            value={value}
                                                            onChange={e => handleAnswer1(question.id, e.target.value)}
                                                            slotProps={{
                                                                label: ({ checked }) => ({
                                                                    sx: {
                                                                        fontWeight: 'lg',
                                                                        fontSize: 'md',
                                                                        color: checked ? 'text.primary' : 'text.secondary',
                                                                    },
                                                                }),
                                                                action: ({ checked }) => ({
                                                                    sx: (theme) => ({
                                                                        ...(checked && {
                                                                            '--variant-borderWidth': '2px',
                                                                            background: 'aliceblue',
                                                                            '&&': {
                                                                                // && to increase the specificity to win the base :hover styles
                                                                                borderColor: theme.vars.palette.primary[500],
                                                                            },
                                                                        }),
                                                                    }),
                                                                }),
                                                            }}
                                                        />
                                                    </Sheet>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </Card>

                                ))}
                            </Box>
                        </Grid>

                        <Grid item xs={12} md={6}>
                            <Box>
                                {questions2.map((question, index) => (
                                    <Card sx={{ mx: 3, my: 2 }}
                                        color={(errorCheck && question.response == null) && 'danger'}
                                        variant="soft">
                                        <FormControl >
                                            <Box sx={{ display: "flex", justifyContent: 'space-between' }}>
                                                <FormLabel>{question.id}. {question.que1}</FormLabel>
                                                <FormLabel>{question.que2}</FormLabel>
                                            </Box>

                                            <RadioGroup
                                                aria-labelledby=""
                                                defaultValue=""
                                                size="lg"
                                                sx={{
                                                    flexDirection: 'row', gap: 2, display: "flex", justifyContent: 'space-between'
                                                }}
                                            >
                                                {['4', '3', '2', '1'].map((value) => (
                                                    <Sheet
                                                        key={value}
                                                        sx={{
                                                            p: 2,
                                                            borderRadius: 'md',
                                                            boxShadow: 'sm',
                                                            aspectRatio: '4/3',
                                                            minWidth: '50px',
                                                            minHeight: '50px',
                                                            textAlign: 'center',
                                                        }}
                                                    >
                                                        <Radio
                                                            label={value}
                                                            overlay
                                                            disableIcon
                                                            value={value}
                                                            onChange={e => handleAnswer2(question.id, e.target.value)}
                                                            slotProps={{
                                                                label: ({ checked }) => ({
                                                                    sx: {
                                                                        fontWeight: 'lg',
                                                                        fontSize: 'md',
                                                                        color: checked ? 'text.primary' : 'text.secondary',
                                                                    },
                                                                }),
                                                                action: ({ checked }) => ({
                                                                    sx: (theme) => ({
                                                                        ...(checked && {
                                                                            '--variant-borderWidth': '2px',
                                                                            background: 'aliceblue',
                                                                            '&&': {
                                                                                // && to increase the specificity to win the base :hover styles
                                                                                borderColor: theme.vars.palette.primary[500],
                                                                            },
                                                                        }),
                                                                    }),
                                                                }),
                                                            }}
                                                        />
                                                    </Sheet>
                                                ))}
                                            </RadioGroup>
                                        </FormControl>
                                    </Card>
                                ))}
                            </Box>
                        </Grid>
                        <Box sx={{ width: "100%", textAlign: "center", my: 2 }}>
                            <Button onClick={checkAnswers}>Submit</Button>
                        </Box>
                    </Grid >
                </Card>
            </Container>
        </>
    )
}

export default PersonalityTest