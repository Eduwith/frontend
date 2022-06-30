import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Home from './components/Home';
import Join from './components/Join';
import Login from './components/Login';
function App() {
  return (
    <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/main" element={<Home />}>
            </Route>
            <Route path="/login" element={<Login />}>
            </Route>
            <Route path="/join" element={<Join />}>
            </Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;