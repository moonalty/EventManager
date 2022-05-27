import "./App.css";
import { Provider } from "react-redux";
import Categories from "../Categories/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "../Aside/components/Map/Map";
import Advertising from "../Aside/components/Advertising/Advertising";
import Calendar from "../Aside/components/Calendar/Calendar";
import Home from "../Home/Home";
import Aside from "../Aside/Aside";
import { Grid } from "@mui/material";
// import Categories from '../Nav-foot/Categories/Categories'
import { store } from "../../redux/store";
import Navbar from "../Nav-foot/Navbar/Navbar";
import Registration from "../Registration/Registration";
import Login from "../Login/Login";
import OneEventCard from "../OneEventCard/OneEventCard";
import Profile from "../Profile/Profile";
import OneProfileEventCard from "../OneProfileEventCard/OneProfileEventCard";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Grid
          container
          direction="column"
          style={{ width: "100%", height: "100%" }}
        >
          <Grid item>
            <Navbar />
          </Grid>
          <Grid>
            <Grid container>
              <Grid item sm={8}>
                <Routes>
                  <Route path="/profile" element={<Profile />} />
                  <Route
                    path="/profile/:id"
                    element={<OneProfileEventCard />}
                  />
                  <Route
                    path="/categories/:cat/:el"
                    element={<OneEventCard />}
                  />
                  <Route path="/registration" element={<Registration />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/" element={<Home />} />
                  <Route path="/categories/:cat" element={<Categories />} />

                  <Route path="/map" element={<Map />} />
                  <Route path="/adverstising" element={<Advertising />} />
                  <Route path="/calendar" element={<Calendar />} />
                </Routes>
              </Grid>
              <Grid item sm={4}>
                <Aside />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
