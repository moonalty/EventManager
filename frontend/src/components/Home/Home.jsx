import { Grid } from '@mui/material';
import React from 'react';
import Aside from '../Aside/Aside';
import  styles from './home.module.css'

function Home() {
  return (
    <Grid container  style={{width:'100%', height:'100%'}} className={styles.home}>
      <Grid item >
      something
      </Grid>
    </Grid>
  );
}

export default Home;
