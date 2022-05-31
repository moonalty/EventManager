import { CardMedia, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";
import Aside from "../Aside/Aside";
import styles from "./home.module.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(welcomeAC('Добро пожаловать'))
  },[])
  return (
    <>Home</>
    // // <Grid
    // //   container
    // //   style={{ width: "100%", height: "100%" }}
    // //   className={styles.home}
    // // >
    //   {/* <Grid item>
    //     <CardMedia
    //       component="img"
    //       height="100%"
    //       image="https://funart.pro/uploads/posts/2021-04/1618617122_41-funart_pro-p-sankt-peterburg-krasivie-mesta-foto-43.jpg"
    //       alt="#"
    //     ></CardMedia>
    //   </Grid> */}
    // // </Grid>
  );
}

export default Home;
