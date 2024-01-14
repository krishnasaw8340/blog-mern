import { Box, Button, TextField, styled, Typography } from "@mui/material";
import logo from "../assets/logo4.png";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Component = styled(Box)`
  width: 400px;
  margin: auto;
  box-shadow: 5px 2px 5px 2px rgb(0 0 0 / 0.6);
`;

const Image = styled("img")({
  width: 400,
  height: 200,
  objectFit: "contain",
  mixBlendMode: "color-burn",
  // Lazy loading
  loading: "lazy",
});

const LoginButton = styled(Button)`
   text-transform: none;
   width:100%;
   background: #8C52FF;
   color: #fff;
   border-radius: 2px;
`;

const SignUpButton = styled(Button)`
  text-transform: none;
  width:100%;
  background: white;
  color: #8C52FF;
  border-radius: 2px;
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div, Button, p {
    margin-top: 20px;
  }
`;

const Text = styled(Typography)`
  color: ##767676;
`;

const SignUpInitialValues = {
  email: '',
  username: '',
  password: ''
}

const Login = () => {
  const navigate = useNavigate();
  const [account, toggleAccount] = useState('login');
  const [signup, setSignup] = useState(SignUpInitialValues);
  const [loginVal, setLoginVal] = useState({
    email: "",
    password: ""
  })

  const toggleSignUp = () => {
    toggleAccount(account === 'signup' ? 'login' : 'signup');
  }

  const onInputChangeSignup = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value });
  }

  const handleSubmitSignup = async (e) => {
    e.preventDefault();
    if (!signup.email || !signup.password || !signup.username) {
      alert('All fields are required.');
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/signup",
        {
          ...signup
        },
        { withCredentials: true }
      );
      console.log(data);

      if (data.success) {
        alert('User successfully signed up. Please login.');
        toggleAccount('login');
        setSignup(SignUpInitialValues); // Clear input fields
      } else {
        alert('User already exists. Please login.');
        toggleAccount('login');
      }
    } catch (err) {
      console.log(err);
    }
  }

  const onInputChangeLogin = (e) => {
    const { name, value } = e.target;
    setLoginVal({
      ...loginVal,
      [name]: value,
    });
  };

  const handleSubmitLogin = async (e) => {
    e.preventDefault();
    if (!loginVal.email || !loginVal.password) {
      alert('All fields are required.');
      return;
    }
    try {
      const { data } = await axios.post(
        "http://localhost:4000/login",
        {
          ...loginVal,
        },
        { withCredentials: true }
      );
      console.log(data);

      if (data.success) {
        navigate("/") 
        setLoginVal({
          email: "",
          password: ""
        }); // Clear input fields        
      } else {
        alert('Incorrect Email/Password');
      }
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <Component>
      <Box>
        <Box>
          <Image srcSet={`${logo} 400w`} sizes="(max-width: 600px) 100vw, 400px" alt="logo" />
        </Box>
        {account === 'login' ? (
          <Wrapper>
            <form onSubmit={handleSubmitLogin}>
              <TextField variant="standard" fullWidth id="fullWidth" onChange={onInputChangeLogin} name="email" label="Enter Email" value={loginVal.email} />
              <TextField variant="standard" fullWidth id="fullWidth" type="password" onChange={onInputChangeLogin} name="password" label="Enter password" value={loginVal.password} />
              <Box>
              <LoginButton variant="contained" type="submit">Login</LoginButton>
              </Box>
              <Text variant="p" component="p" style={{ textAlign: "center" }}>
                OR
              </Text>
              <SignUpButton onClick={toggleSignUp}>Don't have an account?</SignUpButton>
            </form>
          </Wrapper>
        ) : (
          <Wrapper>
            <form onSubmit={handleSubmitSignup}>
              <TextField variant="standard"  fullWidth id="fullWidth"  onChange={onInputChangeSignup} name="email" label="Enter Email" value={signup.email} />
              <TextField variant="standard"  fullWidth id="fullWidth" onChange={onInputChangeSignup} name="password" label="Enter password" value={signup.password} type="password" />
              <TextField variant="standard"  fullWidth id="fullWidth" onChange={onInputChangeSignup} name="username" label="Enter username" value={signup.username} />
              <Box>
              <SignUpButton type="submit">SignUp</SignUpButton>
              </Box>
              <Text variant="p" component="p" style={{ textAlign: "center" }}>
                OR
              </Text>
              <LoginButton variant="contained" onClick={toggleSignUp}>Already have an Account? </LoginButton>
            </form>
          </Wrapper>
        )}
      </Box>
    </Component>
  );
};

export default Login;
