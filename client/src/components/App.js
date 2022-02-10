import React from "react";
import Home from "./Home/Home";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import MainItem from "./MainItem";
import AddItem from "./AddItem";
import EditItem from "./EditItem";

function App() {
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/readings/view/:itemId" element={<MainItem />} />
      <Route path="/readings/add" element={<AddItem />} />
      <Route path="/readings/edit/:itemId" element={<EditItem />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
