import React from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import "./index.css"

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ShoppingCart from "./components/ShoppingCart";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        
        <Routes>
          <Route index element = {<Main/>}></Route>
          <Route path="/cart" element = { <ShoppingCart/> }></Route>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
