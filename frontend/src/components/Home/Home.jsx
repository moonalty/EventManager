import { CardMedia, Grid } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";
import Aside from "../Aside/Aside";
import  "./home.css";

function Home() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(welcomeAC('КУДА ДАЛЬШЕ?'))
  },[])
  return (
    <div className="home">
    <div className="main" >
      <img src="/image/logo.png" alt="" style={{ width: 200, height: 200, marginLeft: 10, marginRight: 30 }} />
      <div><p className="mainText">МЫ МОЛОДОЙ ПРОЕКТ "КУДА ДАЛЬШЕ?"</p></div>
      </div>
      <div>
      <div className="otherText">
        <p style={{margin:0}}>Наша цень помогать людям находить интересные мероприятия и развлечения на любой вкус.</p>
        <p>У нас на сайте Вы можете начти тысячи идей куда выбраться из дома в любимом городе Санкт-Петербургe</p>
        <p>Мы можем предложить Вам любое приключение на вечер, выходные или даже на целый отпуск!</p></div> 
    </div>
    </div>
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
