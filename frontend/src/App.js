import { Route, Routes, Navigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import axios from 'axios';
import Login from "./component/account/Login";
import Welcome from "./component/Pages/Welcome";
import CreatePost from "./component/Pages/Createpost/CreatePost"
import Contact from "./component/Pages/Contact/Contact";
import About from "./component/Pages/About/About";
function App() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const verifyCookie = async () => {
      const token = cookies.token;

      if (!token) {
        navigate('/auth');
      } else {
        try {
          const { data } = await axios.post(
            'http://localhost:4000',
            {},
            { withCredentials: true }
          );

          const { status, user } = data;

          if (status) {
            setUsername(user);
          } else {
            navigate('/auth');
          }
        } catch (error) {
          console.error('Error verifying token:', error);
          navigate('/auth');
        }
      }
    };

    verifyCookie();
  }, [cookies, navigate, removeCookie]);

  const Logout = () => {
    removeCookie('token');
    navigate('/auth');
  };

  return (
    <div>
      <Routes>
        <Route path='/auth' element={<Login />} />
        <Route
          path='/'
          element={username && cookies.token ? <Welcome onLogOut={Logout} userName = {username}/> : <Navigate to="/auth" />}
        />
         <Route
          path='/create'
          element={username && cookies.token ? <CreatePost onLogOut={Logout} userName = {username}/> : <Navigate to="/auth" />}
        />
         <Route
          path='/contact'
          element={username && cookies.token ? <Contact onLogOut={Logout} userName = {username}/> : <Navigate to="/auth" />}
        />
         <Route
          path='/about'
          element={username && cookies.token ? <About onLogOut={Logout} userName = {username}/> : <Navigate to="/auth" />}
        />
      </Routes>
    </div>
  );
}

export default App;
