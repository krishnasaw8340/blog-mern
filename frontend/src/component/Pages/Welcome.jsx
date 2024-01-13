import React from 'react';
import { Box, Grid } from '@mui/material';
import Banner from './Banner/Banner';
import NavBar from './Header/NavBar';
import Categories from './Categories/Categories';

const Welcome = ({onLogOut}) => {
  return (
    <div>
      <Box>
      <NavBar onLogoutOut={onLogOut}/>
        <Banner />
      </Box>

      <Box>
        <Grid container>
          <Grid item lg={2} sm={2} xs={12}>
        <Categories/>
          </Grid>
          <Grid container item xs={12} sm={10} lg={10}>
              Post
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};

export default Welcome;
