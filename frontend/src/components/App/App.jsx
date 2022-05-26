import "./App.css";
import Categories from '../Nav-foot/Categories/Categories'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store } from "../../redux/store";
import { Provider } from "react-redux";
import Navbar from "../Nav-foot/Navbar/Navbar";
import Reg from "../Reg/Reg";
import Log from "../Reg/Log";


function App() {
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/registration' element={<Reg />} />
          <Route path='/login' element={<Log />} />
        </Routes>
      Hello, world!
      {/* <Categories /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
