import React from 'react';
import NavBar from '../Header/NavBar';
import { Typography } from '@mui/material';

const CreatePost = ({ onLogOut,userName }) => {
  return (
    <div>
      <NavBar onLogoutOut={onLogOut}  userName={userName} />
      <Typography>Hello CreatePost</Typography>
    </div>
  );
};

export default CreatePost;
