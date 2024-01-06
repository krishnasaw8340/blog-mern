import { Box, Button, TextField, styled, Typography } from "@mui/material";
import logo from "../assets/logo4.png";
import { useState } from "react";
import axios from "axios";

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
const LoginButton = styled(Button) `
   text-transform: none;
   background: #8C52FF;
   color: #fff;
   border-radius: 2px;
`
const SignUpButton = styled(Button)`
text-transform: none;
background: white;
color: #8C52FF;
border-radius: 2px;
box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`

const Wrapper = styled(Box)`
  padding: 25px 35px;
  display: flex;
  flex: 1;
  flex-direction: column;
  & > div , Button, p{
    margin-top: 20px;
  }
`;
const Text = styled(Typography)`
   color: ##767676;
`
const SignUpInitialValues = {
  name: '',
  username: '',
  password: ''
}

const Login = () => {
  const[account, toggleAccount] = useState('login');
  const[signup, setSignup] = useState(SignUpInitialValues)
  const [loginVal, setLoginVal] = useState({
    email : "",
    password: ""
  })
  const toggleSignUp = ()=> {
    account==='signup' ? toggleAccount('login'):toggleAccount('signup');
  }
  const onInputChange = (e) =>{
    setSignup({...signup, [e.target.email]: e.target.value})
    console.log(signup);
  }

  const signupUser =()=>{

  }
  const handleSubmitSignup =() => {
    
  }
  const onInputChangeLogin = (e) => {
    const { email, password } = e.target;
    setLoginVal({
      ...loginVal,
      [email]: password,
    });
  };
  const handleSubmitLogin =async (e) =>{
    e.preventDefault();
    try{
      const {data} = await axios.post(
        "http://localhost:4000/login",
        {
          ...loginVal,
        },
        {withCredentials: true}
      );
      console.log(data);
    }
    catch(err)
    {
      console.log(err);

    }
  }
  
  return (
    <Component>
      <Box>
        <Box>
          <Image srcSet={`${logo} 400w`} sizes="(max-width: 600px) 100vw, 400px" alt="logo" />
        </Box>
        {
          account==='login'?
          <form onSubmit={handleSubmitLogin}>
             <Wrapper>
          <TextField variant="standard" onChange={(e)=> onInputChangeLogin(e)} name="email "label="Enter Email" />
          <TextField variant="standard" onChange={(e)=> onInputChangeLogin(e)} name ="password" label="Enter password" />
          <LoginButton variant="contained">Login</LoginButton>
          <Text variant="p" component="p" style={{textAlign: "center"}}>
            OR
          </Text>
          <SignUpButton onClick={()=> toggleSignUp()}>Don't have an account?</SignUpButton>
        </Wrapper>
          </form>
        :
        <form onSubmit={handleSubmitSignup}>
             <Wrapper>
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='email' label="Enter Email" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name ='password' label="Enter password" />
          <TextField variant="standard" onChange={(e)=> onInputChange(e)} name='username' label="Enter username" />
          <SignUpButton onClick={()=>signupUser()} >SignUp</SignUpButton>
          <Text variant="p" component="p" style={{textAlign: "center"}}>
            OR
          </Text>
          <LoginButton variant="contained" onClick={()=> toggleSignUp()}>Already have an Account? </LoginButton>
        </Wrapper>

        </form>
       
}
      </Box>
    </Component>
  );
};

export default Login;
