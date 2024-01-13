import React from 'react';
import { Box, Grid } from '@mui/material';
import Banner from './Banner/Banner';
import NavBar from './Header/NavBar';
import Categories from './Categories/Categories';
import styled from '@emotion/styled';
const MainBody = styled(Box)`
 padding-top: 20px;
`
const Welcome = ({onLogOut, userName}) => {
  return (
    <div>
      <NavBar onLogoutOut={onLogOut} userName={userName}/>
        <Banner />
      <MainBody>
        <Grid container>
          <Grid item lg={2} sm={2} xs={12}>
        <Categories />
          </Grid>
          <Grid container item xs={12} sm={10} lg={10}>
              Post
          </Grid>
        </Grid>
      </MainBody>
    </div>
  );
};

export default Welcome;
