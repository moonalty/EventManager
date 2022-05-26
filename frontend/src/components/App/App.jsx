import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store as globalStore } from "../../redux/store";
import { Provider } from "react-redux";
import Categories from "../Categories/Categories";
import Map from "../Aside/components/Map/Map";
import Advertising from "../Aside/components/Advertising/Advertising";
import Calendar from "../Aside/components/Calendar/Calendar";
import Home from "../Home/Home";
import Aside from "../Aside/Aside";
import { Grid } from "@mui/material";

function App() {
  return (

    <BrowserRouter>
      <Grid container direction='column' style={{ width: '100%', height: '100%' }} >
        <Grid item>
          <Categories />
        </Grid>
        <Grid >
          <Grid container>
            <Grid item sm={8}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/map" element={<Map />} />
                <Route path="/adverstising" element={<Advertising />} />
                <Route path="/calendar" element={<Calendar />} />
              </Routes>
            </Grid>
            <Grid item sm={4}  >
              <Aside />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </BrowserRouter>
  );
}

export default App;
