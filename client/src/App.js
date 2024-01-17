
import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Login from "./componets/login";
import Nav from "./componets/nav";
import Signup from "./componets/signup";
function App() {
  return (
    <div className="App">
      <Nav/>
      <Routes>
        <Route path="/account/login" element={<Login/>}/>
        <Route path="/account/signup" element={<Signup/>}/>
              </Routes>
    </div>
  );
}

export default App;
