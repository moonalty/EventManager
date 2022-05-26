import "./App.css";
// import Categories from "../components/Categories/Categories";
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

        </Routes>
      Hello, world!
      {/* <Categories /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
