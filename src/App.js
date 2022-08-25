import React from "react";
import './App.css';
import SearchBar from "./components/SearchBar";
import List from "./components/List";
import {BrowserRouter, Routes, Route} from "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route element={<SearchBar />} path="/" />
          <Route element={<List />} path="/game/:id" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;