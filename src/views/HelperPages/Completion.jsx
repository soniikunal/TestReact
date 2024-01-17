import React from 'react'
import { Box, Card, Container, Typography, Chip } from '@mui/joy';


const Completion = () => {
    return (<>
        <Container maxWidth="" sx={{ height: 'calc(100vh-220px)', display: 'flex', width: 'auto' }}>
            <Card
                color="success"
                invertedColors={false}
                orientation="horizontal"
                size="lg"
                variant="soft"
                sx={{ py: 5, marginBlock: 'auto', maxWidth: '1000px' }}
            >
                <Box sx={{ textAlign: "center", width: "100%", py: 3 }}>
                    <Typography
                        color="primary"
                        noWrap
                        variant=""
                        level="h1"
                        sx={{ mb: 4 }}
                    >
                        🎉 Congratulations on completing the test! 🎉
                    </Typography>
                    <Typography
                        color="success"
                        level="h3"
                        noWrap={false}
                        variant="plain"
                    >
                        {/* Thank You for Completing the Test, please wait for HR's next instructions */}
                        Thank you for your participation. Please stay tuned for the next instructions from our HR team. We appreciate your time and effort!
                    </Typography>
                    {/* <Typography
                        noWrap
                        variant=""
                        level="h2"
                        sx={{ mt: 2, color: '#f7901e' }}
                    >
                        FBSPL
                    </Typography> */}
                </Box>
            </Card>
        </Container >
    </>
    )
}

export default Completion