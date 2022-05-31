import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
// import TinyProfileEventCard from "../TinyProfileEventCard/TinyProfileEventCard";
import { Grid } from "@mui/material";
import OrgProfile from "./components/OrgProfile/OrgProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import { creatorAC } from "../../redux/actionCreators/creatorAC";
import { subscribedAC } from "../../redux/actionCreators/subscribesAC";
import { getFetchCreator } from "../../redux/thunk/asyncCreator";
import { welcomeAC } from "../../redux/actionCreators/welcomeAC";

const Profile = () => {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  const {creators} = useSelector((state)=> state.creators)
 
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(welcomeAC('Личный кабинет'))
  }, [])
  return (
    <Grid container>
      <Grid item style={{ width: "100%", height: "100%" }}>
        {user.role === "Организатор" ? <OrgProfile /> : <UserProfile />}
      </Grid>
    </Grid>
  );
};

export default Profile;
