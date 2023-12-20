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

export default function NavLayout({ AppComponent }) {

  const Main = styled('main')(({ theme }) => ({
    flexGrow: 1,
    display: "flex",
    flexDirection: 'column',
    minHeight: '100vh',
  }))
  const Wrapper = styled('section')(({ theme }) => ({
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
              <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Test
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
    </>
  );
}
