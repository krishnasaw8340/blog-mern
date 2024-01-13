import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Box } from '@mui/material';
import Banner from './Banner/Banner';
import NavBar from './Header/NavBar';
import Categories from './Categories/Categories';

const Welcome = () => {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        navigate('/auth');
      }
      try {
        const { data } = await axios.post(
          'http://localhost:4000',
          {},
          { withCredentials: true }
        );

        const { status, user } = data;

        setUsername(user);
        return status;
      } catch (error) {
        console.error('Error verifying token:', error);
        navigate('/auth');
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/auth');
  };

  return (
    <div className="home_page">
      <Box>
      <NavBar onLogoutOut={Logout} userData={username} />
      </Box>
      <Box>
        <Banner />
      </Box>
      <Box>
        <Categories/>
      </Box>
    </div>
  );
};

export default Welcome;
