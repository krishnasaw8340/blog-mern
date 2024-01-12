import React from 'react'
import { AppBar, Button, Toolbar, Typography, styled, Box } from '@mui/material';
import Avatar from '@mui/material/Avatar';
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
const RightBox = styled(Box)`
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-left: 10px;
`
const AvatarContainer = styled(Box)`
  margin-right: 10px; /* Adjust the margin between Avatar and Typography as needed */
`;
const NavBar = ({ onLogoutOut, userData }) => {
    return (
        <Component>
            <RightBox >
                MedFist
            </RightBox>
            <Container>
                <Typography>Home </Typography>
                <Typography>About </Typography>
                <Typography>Contact </Typography>
            </Container>
            <RightBox>
                <AvatarContainer>
                    <Avatar sx={{ bgcolor: '#8C52FF', }}></Avatar>
                </AvatarContainer>
                <Typography>  {userData} </Typography>
                <Button onClick={onLogoutOut} sx={{ color: 'red' }}>Logout</Button>
            </RightBox>

        </Component>
    )
}

export default NavBar;