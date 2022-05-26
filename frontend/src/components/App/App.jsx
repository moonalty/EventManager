import "./App.css";
import Categories from '../Nav-foot/Categories/Categories'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import Navbar from "../Nav-foot/Navbar/Navbar";



function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/registration'  />
          <Route path='/login'  />
        </Routes>
      Hello, world!
      {/* <Categories /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
