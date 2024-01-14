import React from 'react'
import { Grid, Box, Typography, FormControl, FormLabel, Button } from '@mui/joy'
import { FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { toastError } from '../../Utils/Toasts';

const MBTI2 = ({ questions, handleSelectAnswer,showNextForm }) => {
    const [errorCheck, setErrorCheck] = React.useState(false);

    const checkAnswers = () => {
        setErrorCheck(true)
        const allQuestionsAnswered = questions.every((status) => status.response);

        if (allQuestionsAnswered) {
            showNextForm()
        } else {
            toastError('All questions are required to be filled!')
        }
    };
    return (
        <>
            <Typography
                color="neutral"
                level="h3"
                sx={{ textAlign: 'center', my: 3 }}
            >
                Which word in each pair appeals to you more? Think about what the words mean, not about how they look or sound.
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        {questions.slice(0, Math.ceil(questions.length / 2)).map((question, index) => (
                            <FormControl key={question.id} sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row', my: 1, borderBottom: '1px solid black' }}>
                                <FormLabel sx={{ my: "auto" }}>
                                    <Typography color="neutral" level="body-xl" sx={{
                                        ...(question.response === null && errorCheck
                                            ? { color: 'red' }
                                            : {}),
                                    }}>
                                        {question.id}.
                                    </Typography>
                                </FormLabel>

                                <RadioGroup sx={{
                                    gap: 2, flexWrap: 'wrap', flexDirection: 'row', flex: '1 1 auto!important', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px'
                                }} onChange={e => handleSelectAnswer(question.id, e.target.value, 'MBIT2')}>
                                    {question.options.map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index == 0 ? "A" : "B"}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        {questions.slice(Math.ceil(questions.length / 2)).map((question, index) => (
                            <FormControl key={question.id} sx={{ gap: 2, flexWrap: 'wrap', flexDirection: 'row', my: 1, borderBottom: '1px solid black' }}>
                                <FormLabel sx={{ my: "auto" }}>
                                    <Typography color="neutral" level="body-xl" sx={{
                                        ...(question.response === null && errorCheck
                                            ? { color: 'red' }
                                            : {}),
                                    }}>
                                        {question.id}.
                                    </Typography>
                                </FormLabel>

                                <RadioGroup sx={{
                                    gap: 2, flexWrap: 'wrap', flexDirection: 'row', flex: '1 1 auto!important', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '10px'
                                }} onChange={e => handleSelectAnswer(question.id, e.target.value, 'MBIT2')}>
                                    {question.options.map((option, index) => (
                                        <FormControlLabel
                                            key={index}
                                            value={index == 0 ? "A" : "B"}
                                            control={<Radio />}
                                            label={option}
                                        />
                                    ))}
                                </RadioGroup>
                            </FormControl>
                        ))}
                    </Box>
                </Grid>
                <Box sx={{ width: "100%", textAlign: "center" }}>
                    <Button onClick={checkAnswers}>Next</Button>
                </Box>
            </Grid>
        </>
    )
}

export default MBTI2