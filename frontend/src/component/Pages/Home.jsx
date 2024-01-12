import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import { Box } from '@mui/material';
import Header from './Header/Header';
import NavBar from './Header/NavBar';

const Home = () => {
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
        <NavBar 
        onLogoutOut={Logout}
        userData = {username}
        />
        {/* <Header/> */}
      </Box>
      <nav>
        <section>
          <span>MedFist</span>
        </section>
      </nav>
    </div>
  );
};

export default Home;
