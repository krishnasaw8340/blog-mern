import React from 'react'
import NavBar from '../Header/NavBar'
import { Typography } from '@mui/material'
const About = ({ onLogOut,userName }) => {
  return (
    <div>
    <NavBar onLogoutOut={onLogOut}  userName={userName} />
    <Typography>Hello About</Typography>
  </div>
  )
}

export default About;