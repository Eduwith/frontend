import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from 'axios';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Join from './components/user/Join';
import Login from './components//user/Login';
import Volunteer from './routes/Volunteer';
import VolunteerDetail from './components/volunteer/VolunteerDetail';
import Mentoring from "./routes/Mentoring";
import MyPage from "./routes/Mypage";
import MyMentoApply from './components/mypage/MyMentoApply';
import MyMento from './components/mypage/MyMento';
import MyStudy from './components/mypage/MyStudy';
import MyScrap from './components/mypage/MyScrap';
import MyPoint from './components/mypage/MyPoint';
import Navbar from './components/home/Navbar';

function App() {
  
  const [isLogin, setIsLogin] = useState(false);

  return (
    <div className="App">
        <Router>
          <Navbar isLogin={isLogin} />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/main" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>

            <Route path="/join" element={<Join />}></Route>

            <Route path="/mypage" element={<MyPage/>}></Route>
            <Route path="/mymentoapply" element={<MyMentoApply/>}></Route>
            <Route path="/mymento" element={<MyMento/>}></Route>
            <Route path="/mystudy" element={<MyStudy/>}></Route>
            <Route path="/myscrap" element={<MyScrap/>}></Route>
            <Route path="/mypoint" element={<MyPoint/>}></Route>

            <Route path="/mentoring" element={<Mentoring />}></Route>
            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/volunteerdetail/:idex" element={<VolunteerDetail />}></Route>
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;
