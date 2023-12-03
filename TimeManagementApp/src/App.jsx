import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignIn from "./components/LogIn/SignIn";
import SignUp from "./components/LogIn/SignUp";
import HomePage from "./components/LogIn/Home/HomePage";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<HomePage/>}/>
      </Routes>
    </Router>
  );
}

export default App;
