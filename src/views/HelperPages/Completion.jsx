import React, { useEffect, useState } from 'react'
import { Box, Card, Container, Typography, Chip } from '@mui/joy';
import { removeCookie } from '../../Utils/utils'

const Completion = () => {
    const [params, setParams] = useState(null)

    useEffect(() => {
        const searchParams = new URLSearchParams(window.location.search);
        const strParam = searchParams.get('str');
        if (strParam) {
            const decodedString = strParam.replace('-', '%')
            setParams(decodedString)
        }
        removeCookie()
    }, [])
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
                        sx={{ mb: 3 }}
                    >
                        Thank you for your participation. Please stay tuned for the next instructions from our HR team. We appreciate your time and effort!
                    </Typography>
                    {params &&
                        <Card
                            color="neutral"
                            invertedColors={false}
                            orientation="horizontal"
                            size="lg"
                            variant="soft"
                            sx={{ py: 2, mt: 3, marginBlock: 'auto', maxWidth: '1000px', justifyContent: 'center' }}
                        ><Typography
                            color=""
                            level="h4"
                            noWrap={false}
                            variant="plain"
                            sx={{ textAlign: "center" }}
                        >
                                Your Typing Score: <span style={{ fontWeight: 700 }}>{params}</span>
                            </Typography>
                        </Card>}
                </Box>
            </Card>
        </Container >
    </>
    )
}

export default Completion