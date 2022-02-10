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
      <Route path="https://serene-lake-49034.herokuapp.com/" element={<Home />} />
      <Route path="https://serene-lake-49034.herokuapp.com/readings/item/:itemId" element={<MainItem />} />
      <Route path="https://serene-lake-49034.herokuapp.com/readings/add" element={<AddItem />} />
      <Route path="https://serene-lake-49034.herokuapp.com/readings/edit/:itemId" element={<EditItem />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
