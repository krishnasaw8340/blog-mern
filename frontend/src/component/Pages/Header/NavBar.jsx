import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Tooltip from '@mui/material/Tooltip';
import styled from '@emotion/styled';
import { Button } from '@mui/material';

const MainBody = styled(AppBar)`
   background-color:#ffffff;
   color: #000;
  `
const ContainerMenu = styled(Box)`
  display:flex;
  flex-direction:row;
  padding-left:50px;
  & >  p {
    padding-right: 50px;
  }
`
const ContainerMenuMobile = styled(Box)`
  display:flex;
  flex-direction:column;
  & >  p {
    padding: 2px 5px 20px 3px;
  }
`
const UserLogout = styled(Box)`
   display: flex;
   flex-direction: row;
   align-items: center;
   & >  p {
    padding: 0px 10px 0px 3px;
  }
`

function NavBar({ onLogoutOut, userName }) {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  return (
    <MainBody position="static">
      <Container maxWidth="xl" >
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
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
            MedFist
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
              <ContainerMenuMobile>
                <Typography>Home </Typography>
                <Typography>About</Typography>
                <Typography>Contact </Typography>

              </ContainerMenuMobile>

            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            MedFist
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <ContainerMenu>
              <Typography>Home </Typography>
              <Typography>About </Typography>
              <Typography>Contact </Typography>
            </ContainerMenu>

          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <UserLogout>
              <Typography>{userName}</Typography>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar src="/broken-image.jpg"
                    sx={{ bgcolor: '8C52FF' }}
                  />
                </IconButton>
              </Tooltip>
            </UserLogout>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <Button textAlign="center" sx={{ color: 'red' }} minWidth={'80px'} onClick={onLogoutOut}>Logout</Button>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </MainBody>
  );
}
export default NavBar;
