import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Join from './components/user/Join';
import Login from './components//user/Login';
import Volunteer from './routes/Volunteer';
import VolunteerDetail from './components/volunteer/VolunteerDetail';
import vlists from './data.js';

function App() {
  const [vlist, setVlist] = useState(vlists);

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
            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/volunteerdetail/:idex" element={<VolunteerDetail vlist={vlist}/>}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;