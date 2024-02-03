import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Footer from './Footer';
import logo from "../../assets/FBSPL Logo.png"
import { ToastContainer } from "react-toastify";

export default function NavLayout({ AppComponent }) {

  const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
  }))
  const Wrapper = styled('section')(({ theme }) => ({
    display:"flex",
    flex: 1,
    padding: theme.spacing(3),
  }))

  return (
    <>
      <Main>
        <Box >
          <AppBar position="static" className='NavbarCss'>
            <Toolbar>
              {/* <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
              >
                <MenuIcon />
              </IconButton> */}
              <img src={logo} style={{ width: 'auto', height: '60px' }} />
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              </Typography>
              {/* <Button color="inherit">Login</Button> */}
            </Toolbar>
          </AppBar>
        </Box>
        <Wrapper>
          {AppComponent}
        </Wrapper>

        <Footer />
      </Main>
      <ToastContainer
        position="top-center"
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
