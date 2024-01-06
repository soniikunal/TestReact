import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import DrawIcon from '@mui/icons-material/Draw';
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import './common.css'
import Footer from './Footer';
import logo from "../../assets/FBSPL Logo.png"
const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        display: "flex",
        flexDirection: 'column',
        minHeight: '100vh',
        // padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${drawerWidth}px`,
        marginTop: '60px',
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginLeft: 0,
        }),
    }),
);

const Wrapper = styled('section')(({ theme }) => ({
    flex: 1,
    padding: theme.spacing(3),
}))
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: `${drawerWidth}px`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

export default function Navbar({ AppComponent }) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const DrawerElements = [
        {
            displayName: 'Manage Questions',
            link: '/manage-question',
            logo: <DrawIcon />
        },
        {
            displayName: 'Result',
            link: '/results',
            logo: <SupervisorAccountIcon />
        },
        {
            displayName: 'Admin',
            link: '/admin',
            logo: <SupervisorAccountIcon />
        },
        {
            displayName: 'Login',
            link: '/login',
            logo: <DrawIcon />
        },
        {
            displayName: 'Register',
            link: '/register',
            logo: <DrawIcon />
        },
        {
            displayName: 'Resume',
            link: '/resume',
            logo: <DrawIcon />
        },
        {
            displayName: 'Start Test',
            link: '/StartTest',
            logo: <DrawIcon />
        },
        {
            displayName: 'Prescreening',
            link: '/prescreening',
            logo: <DrawIcon />
        },
        {
            displayName: 'ATD Test',
            link: '/atdTest',
            logo: <DrawIcon />
        },
        {
            displayName: 'TypingTest',
            link: '/typing-test',
            logo: <DrawIcon />
        },
    ]

    return (
        <>
            <Box sx={{ display: 'flex' }}>
                <CssBaseline />
                <AppBar position="fixed" open={open} className='NavbarCss'>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            onClick={handleDrawerOpen}
                            edge="start"
                            sx={{ mr: 2, ...(open && { display: 'none' }) }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <img src={logo} style={{ width: 'auto', height: '60px' }} />
                        <Typography variant="h6" noWrap component="div">
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Drawer
                    sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        '& .MuiDrawer-paper': {
                            width: drawerWidth,
                            boxSizing: 'border-box',
                        },
                    }}
                    variant="persistent"
                    anchor="left"
                    open={open}
                >
                    <DrawerHeader>
                        <IconButton onClick={handleDrawerClose}>
                            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <List>
                        {DrawerElements.map((e) => (
                            <Link key={e.link} to={e.link} onClick={handleDrawerClose}>
                                <ListItem disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            {e.logo}
                                        </ListItemIcon>
                                        <ListItemText primary={e.displayName} />
                                    </ListItemButton>
                                </ListItem>
                            </Link>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        {/* {['All mail', 'Trash', 'Spam'].map((text, index) => (
                            <ListItem key={text} disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        {index % 2 === 0 ? <Inbox /> : <MailIcon />}
                                    </ListItemIcon>
                                    <ListItemText primary={text} />
                                </ListItemButton>
                            </ListItem>
                        ))} */}
                    </List>
                </Drawer>
                <Main open={open}>
                    <Wrapper>
                        {AppComponent}
                    </Wrapper>
                    <Footer />
                </Main>
            </Box>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
        </>
    );
}