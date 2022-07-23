import "./App.css";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from "react";

export const App:React.FC=()=>{
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}