import React from "react";
import {Routes,Route} from "react-router-dom";

import Login from "./pages/Login"
import Signup from "./pages/Signup";
import Landing from "./pages/Landing"
import Home from "./pages/Home";
import Registration from "./pages/Registration";



function App() {
  return (
    <Routes>
        <Route element={<Signup/>}path="/Signup"></Route>
        <Route element={<Login/>}path="/Login"></Route>
        <Route element={<Landing/>}path="/"></Route>
        <Route element={<Home/>}path="/Home"></Route>
        <Route element={<Registration/>}path="/Registration"></Route>
       
      </Routes>
  );
}

export default App;