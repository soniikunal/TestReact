import React from 'react'
import { Grid, Box, Typography, FormControl, FormLabel, Button, Card } from '@mui/joy'
import { FormControlLabel, RadioGroup, Radio, FormHelperText } from '@mui/material';
import { toastError } from '../../Utils/Toasts';


const MBTI1 = ({ questions, handleSelectAnswer, showNextForm, formType }) => {
    // const [helperText, setHelperText] = React.useState('Please select an option.');
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
                Which answer comes closest to describing how you usually feel or act?
            </Typography>
            <Grid container spacing={2} sx={{ flexGrow: 1 }}>
                <Grid item xs={12} md={6}>
                    <Box>
                        {questions.slice(0, Math.ceil(questions.length / 2)).map((question, index) => (
                            <Card sx={{ mx: 3, my: 2 }}
                                color={(errorCheck && question.response == null) && 'danger'}
                                variant="soft">
                                <FormControl key={question.id} error={true}>
                                    <FormLabel>
                                        <Typography color="neutral" level="body-xl" sx={{
                                            ...(question.response === null && errorCheck
                                                ? { color: 'red' }
                                                : {}),
                                        }}>
                                            {question.id}. {question.text}
                                        </Typography>
                                    </FormLabel>

                                    <RadioGroup onChange={e => handleSelectAnswer(question.id, e.target.value, formType)}>
                                        {question.options.map((option, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={index == 0 ? "A" : "B"}
                                                control={<Radio />}
                                                label={option}
                                            />
                                        ))}
                                    </RadioGroup>
                                    {/* <FormHelperText sx={{ color: 'red', textAlign: 'center' }}>{(question.response == null && errorCheck) && helperText}</FormHelperText> */}
                                </FormControl>
                            </Card>
                        ))}
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Box>
                        {questions.slice(Math.ceil(questions.length / 2)).map((question, index) => (
                            <Card sx={{ mx: 3, my: 2 }}
                                color={(errorCheck && question.response == null) && 'danger'}
                                variant="soft">
                                <FormControl key={question.id} error={true}>
                                    <FormLabel>
                                        <Typography color="neutral" level="body-xl" sx={{
                                            ...(question.response === null && errorCheck
                                                ? { color: 'red' }
                                                : {}),
                                        }}>
                                            {question.id}. {question.text}
                                        </Typography>
                                    </FormLabel>

                                    <RadioGroup onChange={e => handleSelectAnswer(question.id, e.target.value, formType)}>
                                        {question.options.map((option, index) => (
                                            <FormControlLabel
                                                key={index}
                                                value={index == 0 ? "A" : "B"}
                                                control={<Radio />}
                                                label={option}
                                            />
                                        ))}
                                    </RadioGroup>
                                    {/* <FormHelperText sx={{ color: 'red', textAlign: 'center' }}>{(question.response == null && errorCheck) && helperText}</FormHelperText> */}
                                </FormControl>
                            </Card>
                        ))}
                    </Box>
                </Grid>
                <Box sx={{ width: "100%", textAlign: "center", my: 2 }}>
                    <Button onClick={checkAnswers}>{formType === 'MBIT3' ? 'Submit' : 'Next'}</Button>
                </Box>
            </Grid >
        </>
    )
}

export default MBTI1