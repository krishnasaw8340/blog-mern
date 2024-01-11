import React from 'react'
import { AppBar ,Button,Toolbar, Typography, styled} from '@mui/material';
const Component = styled(AppBar)`
    background: #ffffff;
    color: #000;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`
const Container = styled(Toolbar)`
    justify-content: center;
    & > p {
        padding:20px;
    }
    
`
const NavBar = ({onLogoutOut, userData}) => {
  return (
   <Component>
    <Typography >
        MedFist
    </Typography>
    <Container>
        <Typography>Home </Typography>
        <Typography>About </Typography>
        <Typography>Contact </Typography>
    </Container>
    <Typography>{userData}</Typography>
    <Button onClick={onLogoutOut}>Logout</Button>
    
   </Component>
  )
}

export default NavBar;