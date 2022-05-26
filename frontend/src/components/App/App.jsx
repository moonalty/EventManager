import "./App.css";
import { store } from "../../redux/store";
import Categories from "../Categories/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Navbar from "../Nav-foot/Navbar/Navbar";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/categories/:cat" element={<Categories />} />
          Hello, world!
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
