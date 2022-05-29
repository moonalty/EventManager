
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
// import TinyProfileEventCard from "../TinyProfileEventCard/TinyProfileEventCard";
import TinyProfileEventCard from "../MaterialProfileTinyCards/MaterialProfileTinyCards";
import { Grid } from "@mui/material";
import  OrgProfile from "./components/OrgProfile/OrgProfile";

const Profile = () => {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  console.log('>>>>SUBS',subscribed);
  useEffect(() => {
    dispatch(getFetchSubs());
  }, [dispatch]);
  return (
    <Grid container>
      <Grid item style={{ width: '100%', height: '100%' }}>
    <div>
      <OrgProfile/>
    </div>
    <h1>Вы подписаны на мероприятия: </h1>
    <div>
        {subscribed?.map(
          (el) => (el = <TinyProfileEventCard el={el[0]} key={el[0].id} />)
        )}
      </div>
      </Grid>
    </Grid>
    )
  };


export default Profile;

