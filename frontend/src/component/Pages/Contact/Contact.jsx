import React from 'react'
import NavBar from '../Header/NavBar'
import { Typography } from '@mui/material'
const Contact = ({ onLogOut,userName }) => {
  return (
    <div>
    <NavBar onLogoutOut={onLogOut}  userName={userName} />
    <Typography>Hello Contact</Typography>
  </div>
  )
}

export default Contact;