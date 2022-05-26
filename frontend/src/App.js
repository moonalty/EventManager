import "./App.css";
import Categories from "./components/Categories/Categories";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { store as globalStore } from "../../redux/store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      Hello, world!
      <Categories />
    </>
  );
}

export default App;
