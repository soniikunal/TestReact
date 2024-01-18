import * as React from 'react';
import Box from '@mui/joy/Box';
import Chip from '@mui/joy/Chip';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Question from './Question'
import ATDQuestion from './ATDQuestion'
import ArticleQuestion from './ArticleQuestion'

const ManageTest = () => {
    const [index, setIndex] = React.useState(0);
    return (
        <Box
            sx={{
                flexGrow: 1,
                m: -2,
                overflowX: 'hidden',
            }}
        >
            <Tabs
                aria-label="Pipeline"
                value={index}
                onChange={(event, value) => setIndex(value)}
            >
                <TabList
                    sx={{
                        pt: 1,
                        justifyContent: 'center',
                        [`&& .${tabClasses.root}`]: {
                            flex: 'initial',
                            bgcolor: 'transparent',
                            '&:hover': {
                                bgcolor: 'transparent',
                            },
                            [`&.${tabClasses.selected}`]: {
                                color: 'primary.plainColor',
                                '&::after': {
                                    height: 2,
                                    borderTopLeftRadius: 3,
                                    borderTopRightRadius: 3,
                                    bgcolor: 'primary.500',
                                },
                            },
                        },
                    }}
                >
                    <Tab indicatorInset>
                        Pre Screening Test
                    </Tab>
                    <Tab indicatorInset>
                        Article
                    </Tab>
                    <Tab indicatorInset>
                        ATD
                    </Tab>
                </TabList>
                <Box
                    sx={(theme) => ({
                        '--bg': theme.vars.palette.background.surface,
                        background: 'var(--bg)',
                        boxShadow: '0 0 0 100vmax var(--bg)',
                        clipPath: 'inset(0 -100vmax)',
                    })}
                >
                    <TabPanel value={0}><Question/></TabPanel>
                    <TabPanel value={1}><ArticleQuestion/></TabPanel>
                    <TabPanel value={2}><ATDQuestion/></TabPanel>
                </Box>
            </Tabs>
        </Box>
    );
}

export default ManageTest