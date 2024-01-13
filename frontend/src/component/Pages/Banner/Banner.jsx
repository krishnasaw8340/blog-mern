import React from 'react'
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';
const Image = styled(Box)`
   background: url(https://cdn.pixabay.com/photo/2020/05/17/19/01/pray-5183171_1280.jpg) center/60% repeat-x #000;
   width: 100%;
   height:60vh;
   display:flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
 `
 const Heading = styled(Typography)`
    font-size: 70px;
    color: #ffffff;
    line-height:1;  
 `
 const SubHeading = styled(Typography)`
   font-size: 30px;
   color: #ffffff;
   background: #8C52FF;
   border-radius: 5px;
   width:40%;
   text-align:center;
   

 `
 
const Banner = () => {
  return (
    <Image>
      <Heading>Welcome to Medfist</Heading>
      <SubHeading>Bend Your Mind, Inspire Yourself</SubHeading>
    </Image>
  )
}

export default Banner;