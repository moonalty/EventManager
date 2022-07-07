import * as React from "react";
import { Link } from "react-router-dom";
import Advertising from "./components/Advertising/Advertising";
import Calendar from "./components/Calendar/Calendar";
import Map from "./components/Map/Map";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

import Grid from "@mui/material/Grid";

export default function Aside() {
  return (
    <Box>
      <Grid container spacing={2} style={{ width: "100%", height: "100%" }}>
        <Grid
          item
          justifyContent="flex-end"
          style={{ width: "100%", height: "100%" }}
        >
          <div className="rightBlock">
            <br />
            <Link to="/calendar">
              <Calendar />
            </Link>
            <br />
            <Link to="/map">
              {" "}
              <Map />
            </Link>
            <br />
            <Link to="/adverstising">
              {" "}
              <Advertising />
            </Link>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
}
