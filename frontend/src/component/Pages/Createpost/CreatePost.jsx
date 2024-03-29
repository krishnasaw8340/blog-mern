import React, { useEffect, useState} from 'react';
import NavBar from '../Header/NavBar';
import { FormControl,Box, InputBase, Button, TextareaAutosize } from '@mui/material';
import styled from '@emotion/styled';
import axios from 'axios';
import {AddCircle as Add} from "@mui/icons-material";
import { useLocation } from 'react-router-dom';
const Image = styled('img')`
  width: 100%;
  height: 60vh;
  background: center/60% repeat-x #000;
  objectFit: cover;
`
const Container  =styled(Box)`
  margin: 1% 3% 0 3%;
`
const PublishButton = styled(Button)`
width: 15%;
background: #8C52FF;
color: #fff;
margin-bottom: 16px;

&:hover {
  background: #5a34aa; /* Change the color on hover */
}
`
const FromStyle = styled(FormControl)`
  margin-top: 10px;
  display:flex;
  flex-direction:row;
`
const InputtextField = styled(InputBase)`
  flex:1;
  margin:0 30px;
  font-size:25px;
`
const TextArea = styled(TextareaAutosize)`
  width:100%;
  margin-top:30px;
  font-size: 18px;
  border:none;
  &:focus visible {
    outline:none;
  }
`
const IntialPost = {
  title: '',
  description: '',
  picture: '',
  username: '',
  categories: '',
  createdAt: new Date()
}
const CreatePost = ({ onLogOut,userName }) => {
  // const url = 'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532_1280.jpg';
  const[post,setPost]  = useState(IntialPost);
  const [file,setFile] = useState('');
  const location = useLocation();
  const url = post.picture ?  post.picture: 'https://cdn.pixabay.com/photo/2017/04/08/22/26/buddhism-2214532_1280.jpg';
  // const uploadFile = async (data) => {
  //   try {
  //     const response = await axios.post("http://localhost:4000/file/upload", data);
  //     console.log("Response from upload API:", response);  // Add this line for debugging
  //     return response.data;
  //   } catch (error) {
  //     console.log("Error while calling the upload API", error);
  //     throw error;  // Re-throw the error to propagate it further
  //   }
  // };
  // useEffect(()=>{
  //   const geImage = async () =>{
  //     if(file)
  //     {
  //       const data = new FormData()
  //       data.append('name', file.name);
  //       data.append('file', file);
       
  //       const response = await uploadFile(data); 
  //       post.picture = response.data;
  //     }
  //   }
  //   geImage();
  //   post.categories = location.search?.split('=')[1] || 'All';
  //   post.username = userName;
  // },[file])
  const handleOnChange = (e) =>{
    setPost({...post, [e.target.name]: e.target.value})
  }
  return (
    <div>
      <NavBar onLogoutOut={onLogOut}  userName={userName} />
      <Container>
        <Image src={url} alt='banner'></Image>
        <FromStyle>
          <label htmlFor='InputFile'>
            <Add fontSize='large' color='action'/>
          </label>
          <input type='file' 
          id='InputFile' 
          style={{display: 'none'}}
          onChange={(e)=>setFile(e.target.files[0])}
          ></input>
          <InputtextField placeholder='title' onChange={(e)=> handleOnChange(e)} name='title'></InputtextField>
          <PublishButton>Publish</PublishButton>
        </FromStyle>
        <TextArea
        minRows={5}
        placeholder='Write you Medfist here....'
        onChange={(e)=> handleOnChange(e)} name='description'
        />
      </Container>
      
    </div>
  );
};

export default CreatePost;
