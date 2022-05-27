import { Grid } from "@mui/material";
import React from "react";
import  OrgProfile from "./components/OrgProfile/OrgProfile";

const Profile = () => {
  return (
    <Grid container>
      <Grid item style={{ width: '100%', height: '100%' }}>
    <div>
      <OrgProfile/>
    </div>
      </Grid>
    </Grid>
    )
  };

export default Profile;
