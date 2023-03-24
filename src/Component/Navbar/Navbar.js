import React from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" style={{ backgroundColor: '#000000' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}

            >
              <Link to="/"><MenuItem onClick={handleCloseNavMenu} > <Button  ><Typography variant='caption'>Home</Typography></Button> </MenuItem></Link>
              <Link to="/product"> <MenuItem onClick={handleCloseNavMenu}  ><Button ><Typography variant='caption'>Product</Typography></Button> </MenuItem></Link>
              <Link to="/cartdetail">  <MenuItem onClick={handleCloseNavMenu}> <Button ><Typography variant='caption'>About</Typography></Button></MenuItem></Link>
              <MenuItem onClick={handleCloseNavMenu} ><Button><Typography variant='caption'>Contact</Typography></Button></MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontSize: '12px',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>

            <Link to="/" style={{textDecoration:'none'}}> <Button sx={{ mr: 2, color: 'white', display: 'block' }} ><Typography variant='caption'>Home</Typography></Button></Link>
            <Link to="/produc" style={{textDecoration:'none'}}> <Button sx={{ mr: 2, color: 'white', display: 'block' }} ><Typography variant='caption'>Product</Typography></Button></Link>
            <Button sx={{ mr: 2, color: 'white', display: 'block' }} ><Typography variant='caption'>About</Typography></Button>
            <Button sx={{ mr: 2, color: 'white', display: 'block' }} ><Typography variant='caption'>Contact</Typography></Button>
          </Box>
          <Button style={{ backgroundColor: '#4d0101', }} variant='contained'><LoginIcon style={{ fontSize: '20px', paddingRight: '3px' }} />Login</Button>
          <Link to={"/cart"} style={{textDecoration:'none'}}><Button style={{ backgroundColor: '#4d0101', marginLeft: '5px' }} variant='contained'><ShoppingCartIcon style={{ fontSize: '20px', paddingRight: '3px' }} />Cart(0)</Button></Link>

        </Toolbar>
      </Container>
    </AppBar>
  )
}
