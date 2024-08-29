import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar.js";
import Login from "./components/login.js";
import Signup from "./components/signup.js";
import Account  from "./components/account.js";





function App() {
 
 
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/account" element={<Account/>}/>
      </Routes>
    </Router>
  );
}

export default App;
