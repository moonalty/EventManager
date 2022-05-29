import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFetchSubs } from "../../redux/thunk/asyncSubscribes";
// import TinyProfileEventCard from "../TinyProfileEventCard/TinyProfileEventCard";
import { Grid } from "@mui/material";
import OrgProfile from "./components/OrgProfile/OrgProfile";
import UserProfile from "./components/UserProfile/UserProfile";
import { creatorAC } from "../../redux/actionCreators/creatorAC";
import { subscribedAC } from "../../redux/actionCreators/subscribesAC";
const Profile = () => {
  const dispatch = useDispatch();
  const { subscribed } = useSelector((state) => state.subscribed);
  const { user } = useSelector((state) => state.user);
  useEffect(() => {
    console.log(">>>>SUBS", user);
    const data = getFetchSubs();
    console.log("BLYAAAAAAAAAAAAAAAAAAAA", data);
    if (user.role === "Организатор") {
      dispatch(creatorAC(data));
    } else {
      dispatch(subscribedAC(data));
    }
  }, [user.role, dispatch]);
  return (
    <Grid container>
      <Grid item style={{ width: "100%", height: "100%" }}>
        {user.role === "Организатор" ? <OrgProfile /> : <UserProfile />}
      </Grid>
    </Grid>
  );
};

export default Profile;
