import React, { useState, useEffect, useRef } from 'react';
import './TypingTest.css'; // Import the CSS file
import { Box, Card, Container, Typography, Chip } from '@mui/joy';
import TimerOffIcon from '@mui/icons-material/TimerOff';

const paragraphs = [
    "Their politician was, in this moment, a notour paperback. The first armless grouse is, in its own way, a gear. The coat is a wash. However, a cake is the llama of a caravan. Snakelike armies show us how playgrounds can be viscoses. Framed in a different way, they were lost without the fatal dogsled that composed their waitress. Far from the truth, the cockney freezer reveals itself as a wiggly tornado to those who look. The first hawklike sack.",
    // "Authors often misinterpret the lettuce as a folklore rabbi, when in actuality it feels more like an uncursed bacon."
];

const TypingTest = () => {
    const [text, setText] = useState("");
    const [timeLeft, setTimeLeft] = useState(60);
    const [charIndex, setCharIndex] = useState(0);
    const [mistakes, setMistakes] = useState(0);
    const [isTyping, setIsTyping] = useState(false);
    const [paragraph, setParagraph] = useState("");

    const inputRef = useRef(null);
    const TestDivRef = useRef(null);

    useEffect(() => {
        loadParagraph();
    }, []);

    useEffect(() => {
        if(timeLeft == 0){
            CalculateResult()
        }
        if (timeLeft > 0 && isTyping) {
            const timer = setInterval(() => {
                setTimeLeft(timeLeft - 1);
            }, 1000);
            return () => clearInterval(timer);
        }
        inputRef.current.focus();
    }, [timeLeft, isTyping]);

    const loadParagraph = () => {
        const ranIndex = Math.floor(Math.random() * paragraphs.length);
        setParagraph(paragraphs[ranIndex]);
    }

    const handleChange = (e) => {
        if (timeLeft === 60 && !isTyping) {
            setIsTyping(true);
        }
        setText(e.target.value);
        let errs = 0;
        for (let i = 0; i < e.target.value.length; i++) {
            if (e.target.value[i] !== paragraph[i]) errs++;
        }
        setMistakes(errs);
        setCharIndex(e.target.value.length);
    }
    const handleFocusClick = () => {
        inputRef.current.focus();
    }
    const CalculateResult = () => {
        setParagraph(null)
        const Accuracy = Math.round(((charIndex - mistakes) / charIndex) * 100);
        const WordPrMinute = Math.round(((charIndex - mistakes) / 5));
        const penalty = Math.round((mistakes / charIndex) * 100);
        const netSpeed = Math.round((charIndex / 5) - penalty);
        const str = `${WordPrMinute} WPM x ${Accuracy}% Accuracy = ${netSpeed} NetSpeed`
        alert(str)
    }
    const resetGame = () => {
        loadParagraph();
        setTimeLeft(60);
        setCharIndex(0);
        setMistakes(0);
        setIsTyping(false);
        setText("");
    }
    const giveClass = (char, index) => {
        let Cls = "";
        if (text[index] !== undefined) {
            if (text[index] == char) {
                Cls += ' correct'
            } else {
                Cls += ' incorrect'
            }
        } else {
            Cls = ""
        }
        if (index === text.length) {
            Cls += ' active'
        }
        return Cls
    }

    return (
        <Container sx={{ display: 'flex', height: '100%' }}>
            <Box sx={{ display: 'flex', flexDirection: "column" }}>
                <Typography
                    color="primary"
                    level="h1"
                    noWrap
                    variant="plain"
                    sx={{ textAlign: "center" }}
                >
                    Typing Test
                </Typography>
                <Card className="" sx={{ my: 'auto' }}>
                    <input type="text" className="input-field" ref={inputRef} onChange={e => handleChange(e)} value={text} />
                    <Box className='blinking-chip' sx={{ display: 'flex', textAlign: 'center' }}>

                        {isTyping ? "" : 'Start Typing'}
                        <Chip color="primary" sx={{ ml: 'auto' }}>00:{timeLeft}</Chip>
                    </Box>
                    <div className="typing-text">
                        <div className="content-box" onClick={handleFocusClick}>
                            {paragraph !==null ?
                                (<p>
                                    {paragraph.split('').map((char, index) => (
                                        <span key={index} className={giveClass(char, index)} >{char}</span>
                                    ))}
                                </p>) : <Box className='text-center my-5'><TimerOffIcon sx={{ fontSize: 50 }} /><p className='text-center'>Times Up!</p></Box>}
                        </div>
                    </div>
                </Card>
            </Box>
        </Container>
    );
}

export default TypingTest;
