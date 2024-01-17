import React, { useState } from 'react'
import { Container, FormControlLabel, RadioGroup, Radio } from '@mui/material';
import { FormControl, FormLabel, Card, Typography, Divider, Box, Button, Chip } from '@mui/joy';
import Stepper from '@mui/joy/Stepper';
import Step from '@mui/joy/Step';
import StepButton from '@mui/joy/StepButton';
import StepIndicator from '@mui/joy/StepIndicator';
import Check from '@mui/icons-material/Check';
import MBTI1 from '../../Components/test/MBTI1';
import MBTI2 from '../../Components/test/MBTI2';


const MBTI = () => {
    const questionsArr = {
        MBIT1: [
            { id: 1, text: 'Are you usually?', options: ['A “good mixer”, or', 'Rather quiet & reserved'], response: null },
            { id: 2, text: 'If you were a teacher, would you rather teach', options: ['Fact courses', 'Courses involving theory'], response: null },
            { id: 3, text: 'When you go somewhere for the day, would you rather', options: ['Plan what you will do & when', 'Just go'], response: null },
            { id: 4, text: 'Do you more often let', options: ['Your heart rule your head', 'Your head rule your heart'], response: null },
            { id: 5, text: 'When you have free time, would you rather', options: ['Spend alone reading a book / reflecting / meditating', 'Rather look for friends whom you can join, or who can join you.'], response: null },
            { id: 6, text: 'Do you like painting that seems to depict', options: ['Current events', 'Imagined situations'], response: null },
            { id: 7, text: 'In taking decisions, would you like to', options: ['Focus on the outcome', 'Focus on the elements of the process'], response: null },
            { id: 8, text: 'When solving problems, would you prefer', options: ['To go by your feelings', 'To go by your logic & reasoning'], response: null },
            { id: 9, text: 'When you are with a group of people, would you usually rather:', options: ['Join in the talk of the group', 'Talk individually to people you know well'], response: null },
            { id: 10, text: 'Do you usually get along better with', options: ['Imaginative people', 'Realistic people'], response: null },
            { id: 11, text: 'Do you prefer to', options: ['Arrange dates, parties, etc., well in advance', 'Be free to do whatever looks like fun when the time comes'], response: null },
            { id: 12, text: 'Is it a higher compliment to be called', options: ['A person of real feeling', 'A consistently reasonable person'], response: null },
            { id: 13, text: 'In work, do you like', options: ['To work with a team', 'To do things alone'], response: null },
            { id: 14, text: 'When you go to a restaurant do you', options: ['Prefer dishes you have already tasted before', 'Prefer new dishes with different combinations'], response: null },
            { id: 15, text: 'When you interact with new persons, do you use previous data to form', options: ['Impressions on the basis of your previous experience', 'Go by how they present themselves'], response: null },
            { id: 16, text: 'Do you rather prefer to work with', options: ['Those who reciprocate your feelings', 'Those who respond to your logic & reasoning'], response: null },
            { id: 17, text: 'In a large group, do you more often', options: ['Introduce others', 'Get introduced'], response: null },
            { id: 18, text: 'Would you rather be considered', options: ['A practical person', 'An intuitive person'], response: null },
            { id: 19, text: 'Does following a schedule', options: ['Appeal to you', 'Cramp you'], response: null },
            { id: 20, text: 'Are you inclined to', options: ['Value sentiment more than logic', 'Value logic more than sentiment'], response: null },
            { id: 21, text: 'In groups, do you usually tend', options: ['To speak a lot', 'Listen more than speak'], response: null },
            { id: 22, text: 'Do you enjoy reading', options: ['Books on real life stories', 'Fiction & imaginary stories'], response: null },
            { id: 23, text: 'Do you find often that', options: ['You can judge people in a short time', 'You change your judgments from time to time.'], response: null },
            { id: 24, text: 'In taking decisions, would you value', options: ['Your feelings', 'The outcome'], response: null },
            { id: 25, text: 'Would you say it generally takes others', options: ['A lot of time to get to know you', 'A little time to get to know you'], response: null },
            { id: 26, text: 'Are you more attracted to', options: ['A person with a quick & brilliant mind', 'A practical person with a lot of common sense'], response: null },
            { id: 27, text: 'Does the idea of making a list of what you should get done over a weekend', options: ['Appeal to you', 'Leave you cold'], response: null },
            { id: 28, text: 'In giving feedback, would you rather', options: ['Care for the feelings it generates in other person at that time.', 'Care for the good it will do in the long run'], response: null },
            { id: 29, text: 'Are you considered highly', options: ['Individualistic, keeping things to yourself', 'Sharing, always communicating to others'], response: null },
            { id: 30, text: 'If you see movies, would you rather prefer', options: ['Those depicting real life situations', 'Dream-world stories'], response: null },
            { id: 31, text: 'Do you prefer to do many things', options: ['On the spur of moment', 'According to your plans?'], response: null },
            { id: 32, text: 'In your conversations with people, would you rather listen to', options: ['The feelings behind what they say', 'The content & meaning of what they say'], response: null },
            { id: 33, text: 'Do you tend to spend a lot of time', options: ['By yourself', 'With others'], response: null },
            { id: 34, text: 'Would you rather have as a friend someone who', options: ['Is always coming up with new ideas', 'Is a practical person, with both feet on the ground'], response: null },
            { id: 35, text: 'In your daily work, do you', options: ['Rather enjoy an emergency that makes you work against time', 'Usually plan your work so you wont need to work under pressure'], response: null },
            { id: 36, text: 'Would you prefer to have friends', options: ['Who respect your feelings', 'Who use your ideas & thoughts'], response: null },
            { id: 37, text: 'Can you talk', options: ['Easily to almost anyone for as long as you have to', 'Only to certain people and for a limited time'], response: null },
            { id: 38, text: 'When faced with a problem, do you rather prefer to use', options: ['Well tested solutions', 'Novel ways that you think will work better'], response: null },
            { id: 39, text: 'Are you known as a person with', options: ['Consistent preferences', 'Flexible & changing from time to time'], response: null },
            { id: 40, text: 'Are you inclined to work with', options: ['Emotionally intelligent people', 'People with high thinking & intellect'], response: null },
            { id: 41, text: 'Can the new people you meet tell what you are interested in', options: ['Right away', 'Only after they really get to know you?'], response: null },
            { id: 42, text: 'In reading for pleasure, do you', options: ['Enjoy odd or imaginative & original ways of saying things', 'Like writers to say exactly what they mean'], response: null },
            { id: 43, text: 'In planning trip would you prefer to', options: ['Most of the time do whatever you feel like that day', 'Know ahead of time what you will be doing most days'], response: null },
            { id: 44, text: 'Do you spend your time', options: ['Thinking about events, reasoning', 'Feeling or expressing your feelings'], response: null },
            { id: 45, text: 'Would most people say you are', options: ['A private person', 'A very social & mixing person'], response: null },
            { id: 46, text: 'In doing something that many other people do, does it appeal to you more to', options: ['Do it in the accepted way', 'Invent a way of your own'], response: null },
            { id: 47, text: 'When you have a special job to do, do you like to', options: ['Organize it carefully before you start', 'Find out what is necessary as you go along?'], response: null },
            { id: 48, text: 'In social interactions, do you express more of', options: ['Your feelings & emotions (appreciations, dislike, anger, etc.)', 'Your ideas & thoughts.'], response: null },
        ],
        MBIT2: [
            { id: 49, options: ['Hearty', 'Quiet'], response: null },
            { id: 50, options: ['Abstract', 'Solid'], response: null },
            { id: 51, options: ['Scheduled', 'Unplanned'], response: null },
            { id: 52, options: ['Gentle', 'Firm'], response: null },
            { id: 53, options: ['Reserved', 'Talkative'], response: null },
            { id: 54, options: ['Facts', 'Ideas'], response: null },
            { id: 55, options: ['Systematic', 'Spontaneous'], response: null },
            { id: 56, options: ['Thinking', 'Feeling'], response: null },
            { id: 57, options: ['Quiet', 'Ongoing'], response: null },
            { id: 58, options: ['Concrete', 'Intuitive'], response: null },
            { id: 59, options: ['Impulse', 'Decision'], response: null },
            { id: 60, options: ['Analyze', 'Sympathize'], response: null },
            { id: 61, options: ['Reserved', 'Lively'], response: null },
            { id: 62, options: ['No-nonsense', 'Theoretical'], response: null },
            { id: 63, options: ['Consistent', 'Flexible'], response: null },
            { id: 64, options: ['Expressive', 'Thoughtful'], response: null },
            { id: 65, options: ['Few Friends', 'Lots of friends'], response: null },
            { id: 66, options: ['Theory', 'Facts'], response: null },
            { id: 67, options: ['Analytical', 'Conclusive'], response: null },
            { id: 68, options: ['Convincing', 'Touching'], response: null },
            { id: 69, options: ['Excited', 'Inactive'], response: null },
            { id: 70, options: ['Novel', 'Already Known'], response: null },
            { id: 71, options: ['Fluent', 'Conclusive'], response: null },
            { id: 72, options: ['Sensitive', 'Understanding'], response: null },
            { id: 73, options: ['Quiet', 'Jolly'], response: null },
            { id: 74, options: ['Sensible', 'Fascinating'], response: null },
            { id: 75, options: ['Unconstrained', 'Scheduled'], response: null },
            { id: 76, options: ['Compassion', 'Foresight'], response: null },
            { id: 77, options: ['Private', 'Fun Loving'], response: null },
            { id: 78, options: ['Imaginative', 'Matter of fact'], response: null },
            { id: 79, options: ['Easy Going', 'Fast'], response: null },
            { id: 80, options: ['Competent', 'Kind Hearted'], response: null },
            { id: 81, options: ['Open', 'Private'], response: null },
            { id: 82, options: ['Production', 'Design'], response: null },
            { id: 83, options: ['Systematic', 'Casual'], response: null },
            { id: 84, options: ['Strong-willed', 'Tender-hearted'], response: null },
            { id: 85, options: ['Chirpy', 'Quiet'], response: null },
            { id: 86, options: ['Idea', 'Actuality'], response: null },
            { id: 87, options: ['Orderly', 'Easy Going'], response: null },
            { id: 88, options: ['Fair Minded', 'Caring'], response: null },
            { id: 89, options: ['Talkative', 'Observant'], response: null },
            { id: 90, options: ['Make', 'Create'], response: null },
            { id: 91, options: ['Firm', 'Flexible'], response: null },
            { id: 92, options: ['Determined', 'Devoted'], response: null },
            { id: 93, options: ['Friendly', 'Shy'], response: null },
            { id: 94, options: ['Imaginative', 'Realistic'], response: null },
            { id: 95, options: ['Perceptive', 'Judgmental'], response: null },
            { id: 96, options: ['Objective', 'Passionate'], response: null },
            { id: 97, options: ['Jovial', 'Silent'], response: null },
            { id: 98, options: ['Build', 'Invent'], response: null },
            { id: 99, options: ['Receptive', 'Conclusive'], response: null },
            { id: 100, options: ['Practical', 'Sentimental'], response: null },
            { id: 101, options: ['Confident', 'Coy'], response: null },
            { id: 102, options: ['Possibilities', 'Certainties'], response: null },
            { id: 103, options: ['Systematic', 'Flexible'], response: null },
            { id: 104, options: ['Benefits', 'Blessings'], response: null },
            { id: 105, options: ['Enthusiastic', 'Monotonous'], response: null },
            { id: 106, options: ['Concrete', 'Abstract'], response: null },
            { id: 107, options: ['Formal', 'Informal'], response: null },
            { id: 108, options: ['Analytical', 'Sentimental'], response: null },
            { id: 109, options: ['Lively', 'Un-enthusiastic'], response: null },
            { id: 110, options: ['Practical', 'Innovative'], response: null },
            { id: 111, options: ['Analytical', 'Conclusive'], response: null },
            { id: 112, options: ['Big-hearted', 'Firm Minded'], response: null }
        ],
        MBIT3: [
            { id: 113, text: 'Do you find being around a lot of people', options: ['Gives you more energy', 'Is often draining'], response: null },
            { id: 114, text: 'Do you generally prefer courses that teach', options: ['Concepts & principles', 'Facts & Figures'], response: null },
            { id: 115, text: 'Do you generally prefer to', options: ['Make your social engagements some distance ahead', 'Be free to do things on the spur of the moment'], response: null },
            { id: 116, text: 'When making a decision, is it more important to you to', options: ['Weigh the facts', 'Consider people’s feelings & opinions'], response: null },
            { id: 117, text: 'At parties you', options: ['Sometimes get bored', 'Always have fun?'], response: null },
            { id: 118, text: 'Would you rather', options: ['Support the established methods of doing good', 'Analyze what is still wrong & attack unsolved problems?'], response: null },
            { id: 119, text: 'In most instances, do you prefer to', options: ['Go with the flow', 'Follow a schedule?'], response: null },
            { id: 120, text: 'Which is a higher compliment, to be called', options: ['Competent', 'Compassionate'], response: null },
            { id: 121, text: 'Do you usually', options: ['Mingle well with others', 'Tend to keep more to yourself'], response: null },
            { id: 122, text: 'Do you prefer work that', options: ['Requires imagination', 'Doing things in well-tested ways'], response: null },
            { id: 123, text: 'Do you prefer to', options: ['Wait & see what happens & then make plans', 'Plan things far in advance'], response: null },
            { id: 124, text: 'Would you rather work under a boss (or teacher) who is', options: ['Good-natured but often inconsistent', 'Sharp-tongued but always logical'], response: null },
            { id: 125, text: 'Are you', options: ['Easy to get to know you', 'Hard to get to know you'], response: null },
            { id: 126, text: 'Would you like to attend a lecture in which', options: ['Past experiences are shared for the benefit of others', 'New things / ideas are proposed'], response: null },
            { id: 127, text: 'Do you consider yourself to be', options: ['More of a spontaneous person', 'More of an organized person'], response: null },
            { id: 128, text: 'In finalizing policies, you give importance to', options: ['How people will feel', 'What benefits the decision will give'], response: null },
            { id: 129, text: 'At parties, do you', options: ['Do much of the talking', 'Let others do most of the talking'], response: null },
            { id: 130, text: 'When you listen to others, do you pay more attention to:', options: ['New ideas they propose', 'Their own experiences & conclusions they share'], response: null },
            { id: 131, text: 'When you start a big project that is due in a week, do you', options: ['Take time to list the separate things to be done & the order of doing them', 'Plunge in'], response: null },
            { id: 132, text: 'Would you rather prefer to lead people by', options: ['Caring for their feelings', 'Caring for their outcomes'], response: null },
            { id: 133, text: 'Can you keep a conversation going indefinitely', options: ['Only with people who share some interest of yours', 'With almost anyone'], response: null },
            { id: 134, text: 'Do you generally like to', options: ['Plan for the future', 'Solve current problems & issues'], response: null },
            { id: 135, text: 'Do you find going by schedule', options: ['Necessary at times but generally unfavorable', 'Helpful & favorable most of the time'], response: null },
            { id: 136, text: 'In your interpersonal relations, you are known as', options: ['Thinking person', 'Feeling person'], response: null },
            { id: 137, text: 'In social situations, do you generally find it', options: ['Difficult to start & maintain a conversation with some people', 'Easy to talk to most people for long periods of time'], response: null },
            { id: 138, text: 'When you have free time, would you rather', options: ['Solve crossword puzzles or read fiction', 'Do some concrete work'], response: null },
            { id: 139, text: 'Overall, when working on a big assignment, do you tend to', options: ['Figure out what needs to be done as you go along', 'Begin by breaking it down into steps'], response: null },
            { id: 140, text: 'In giving your views, you are more concerned about', options: ['How to get across your ideas correctly', 'How others are affected by what you say'], response: null },
            { id: 141, text: 'In group-discussions, do you', options: ['Play an active role to involve yourself', 'Wait for others to involve you'], response: null },
            { id: 142, text: 'Are you more concerned about', options: ['The current problems & issues', 'The future world we can create.'], response: null },
            { id: 143, text: 'Would you prefer to do most things according to', options: ['However you feel that particular day', 'A set schedule'], response: null },
            { id: 144, text: 'You prefer movies / stories that are', options: ['Sentimental', 'Thought-provoking'], response: null },
            { id: 145, text: 'Do you usually', options: ['Volunteer in sharing your views & information', 'Give information only when asked'], response: null },
            { id: 146, text: 'Do you prefer', options: ['Developing vision statements', 'Solving a current problem or issues'], response: null },
            { id: 147, text: 'In meetings, do you like to', options: ['Stick to the agenda', 'Attend to the urgent, even if unplanned'], response: null },
            { id: 148, text: 'If you have to share your experiences in a story, would you rather emphasize', options: ['Things that excited you & aroused your emotions', 'Ideas you implemented'], response: null },
            { id: 149, text: 'Are you generally', options: ['Reflective', 'Expressive'], response: null },
            { id: 150, text: 'In solving a problem, do you pay more attention to', options: ['Current facts & events', 'Future possibilities & desired shape of things'], response: null },
            { id: 151, text: 'Do you like', options: ['Change of systems as & when needed', 'Strict implementation than change'], response: null },
            { id: 152, text: 'Would you prefer working with people', options: ['Who care for feelings', 'Who are experienced & thought-provoking'], response: null },
        ]
    }

    const [activeStep, setActiveStep] = useState(0);
    const [questions, setQuestions] = useState(questionsArr);
    const steps = ['MBIT1', 'MBIT2', 'MBIT3'];
    const [results, setResults] = useState({
        Introversion: 0,
        Extraversion: 0,
        Sensing: 0,
        Intuiting: 0,
        Thinking: 0,
        Feeling: 0,
        Judging: 0,
        Perceiving: 0,
    });

    const handleAnswer = (questionId, response, formNo) => {

        // Update the response in the state
        setQuestions(prevQuestions => ({
            ...prevQuestions,
            [formNo]: prevQuestions[formNo].map(question =>
                question.id === questionId ? { ...question, response } : question
            ),
        }));
    };

    const calculateResults = () => {

        let introversionScore = 0
        let extraversionScore = 0
        let sensingScore = 0
        let intuitingScore = 0
        let thinkingScore = 0
        let feelingScore = 0
        let judgingScore = 0
        let perceivingScore = 0
        // Your logic to calculate results based on the responses
        // Update the state with the calculated results
        const questionArray = Object.values(questions).flat()
        for (const question of questionArray) {
            const response = question.response;

            if (response === 'B') {
                // Update scores based on the response for each dimension
                extraversionScore += 1;
                intuitingScore += 1;
                feelingScore += 1;
                perceivingScore += 1;
            } else {
                // Update scores for the opposite dimension if 'A'
                introversionScore += 1;
                sensingScore += 1;
                thinkingScore += 1;
                judgingScore += 1;
            }
        }

        setResults({
            Introversion: introversionScore,
            Extraversion: extraversionScore,
            Sensing: sensingScore,
            Intuiting: intuitingScore,
            Thinking: thinkingScore,
            Feeling: feelingScore,
            Judging: judgingScore,
            Perceiving: perceivingScore,
        });
        // console.log({
        //     introversionScore,
        //     extraversionScore,
        //     sensingScore,
        //     intuitingScore,
        //     thinkingScore,
        //     feelingScore,
        //     judgingScore,
        //     perceivingScore,
        // })

        const introversionType = introversionScore > extraversionScore ? "I" : extraversionScore > introversionScore ? "E" : "IE";
        const sensingType = sensingScore > intuitingScore ? "S" : intuitingScore > sensingScore ? "N" : "SN";
        const judgingType = judgingScore > perceivingScore ? "J" : perceivingScore > judgingScore ? "P" : "JP";
        const thinkingType = thinkingScore > feelingScore ? "T" : feelingScore > thinkingScore ? "F" : "TF";

        // Concatenate the results
        const personalityResult = introversionType + sensingType + judgingType + thinkingType;

        console.log(personalityResult);
    };
    const showNextForm = () => {

        if (activeStep !== 2) {
            setActiveStep(activeStep + 1)
        } else {
            calculateResults()
        }
    }

    return (
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
                    sx={{ textAlign: 'center', my: 2 }}
                >
                    Myer Brigs Type Indicator
                </Typography>
                <Stepper sx={{ width: '100%' }}>
                    {steps.map((step, index) => (
                        <Step
                            key={step}
                            orientation="vertical"
                            indicator={
                                <StepIndicator
                                    variant={activeStep <= index ? 'soft' : 'solid'}
                                    color={activeStep < index ? 'neutral' : 'primary'}
                                >
                                    {activeStep <= index ? index + 1 : <Check />}
                                </StepIndicator>
                            }
                            sx={{
                                '&::after': {
                                    ...(activeStep > index &&
                                        index !== 2 && { bgcolor: 'primary.solidBg' }),
                                },
                            }}
                            onClick={() => setActiveStep(index)}
                        >
                            <StepButton >{ }</StepButton>
                        </Step>
                    ))}
                </Stepper>
                <Container maxWidth=''>
                    {(activeStep === 0) && <MBTI1 questions={questions.MBIT1} handleSelectAnswer={handleAnswer} showNextForm={showNextForm} formType={'MBIT1'} />}
                    {(activeStep === 1) && <MBTI2 questions={questions.MBIT2} handleSelectAnswer={handleAnswer} showNextForm={showNextForm} />}
                    {(activeStep === 2) && <MBTI1 questions={questions.MBIT3} handleSelectAnswer={handleAnswer} showNextForm={showNextForm} formType={'MBIT3'} />}
                </Container>
            </Card>
        </Container>
    )
}

export default MBTI
