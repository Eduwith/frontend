import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home';
import Join from './components/user/Join';
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
import MentiRecruit from './components/mentoring/MentiRecruit';
import MentiMentoring from './routes/MentiMentoring';
import TestMain from './test/TestMain';
import TestQna from './test/TestQna';
import TestResult from './test/TestResult';

function App() {

  const [isLogin, setIsLogin] = useState(false);



  return (
    <div className="App">
        <Router>
          <Navbar isLogin={isLogin}/>
          <Routes>
            <Route path="/main" element={<Home />}>
            </Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
            <Route path="/mymentoapply" element={<MyMentoApply/>}></Route>
            <Route path="/mymento" element={<MyMento/>}></Route>
            <Route path="/mystudy" element={<MyStudy/>}></Route>
            <Route path="/myscrap" element={<MyScrap/>}></Route>
            <Route path="/mypoint" element={<MyPoint/>}></Route>

            <Route path="/test" element={<TestMain />}></Route>
            <Route path="/testqna" element={<TestQna />}></Route>
            <Route path="/result" element={<TestResult />}></Route>

            <Route path="/mentoring/mentor" element={<Mentoring/>}></Route>
            <Route path="/mentoring/mentee" element={<MentiMentoring/>}></Route>

            <Route path="/mentiRecruit" element={<MentiRecruit />}></Route>


            <Route path="/mentoring/:keyword" element={<Mentoring />}></Route>
            <Route path="/mentoring/filter" element={<Mentoring />}></Route>

            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/volunteerdetail/:idex" element={<VolunteerDetail />}></Route>
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;