import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Categories from "../Categories/Categories";
import { store } from "../../redux/store";

function App() {
  return (
    <Provider value={store}>
      <>
        Hello, world!
        <div></div>
      </>
      <Categories />
    </Provider>
  );
}

export default App;
