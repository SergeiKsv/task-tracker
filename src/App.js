import "./App.css";
import { Login } from "./components/Login/Login.jsx";

import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
         
        </Routes>
      </BrowserRouter>
    </div>
  );
}