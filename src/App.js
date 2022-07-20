import "./App.css";
import { Login } from "./components/Login/Login.jsx";
import { Register } from "./components/Register/Register.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
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