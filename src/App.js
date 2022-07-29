import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './reset.css';
import axios from 'axios';
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
import MentoList from './components/mentoring/MentoList';

function App() {
  //const [vlist, setVlist] = useState(vlists);
  const [isLogin, setIsLogin] = useState(false);
  const [vlist, setVlist] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const apiVolunteer = "http://localhost:8080/api/volunteers";
  const apiVolunteer = '';
  const getVlist = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 vlist 초기화 , loading 상태를 tru로
      setError(null);
      setVlist(null);
      setLoading(true);
      const response = await axios.get(apiVolunteer);
      setVlist(response.data); // 데이터는 response.data 안에
      console.log(response.data);
    } catch (e) {
      setError(e);
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    getVlist();
  }, []);

  // if (loading) return <div>로딩중..</div>;
  // if (error) return <div>에러가 발생했습니다</div>;
  // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않음
  if (!vlist) return null;


  return (
    <div className="App">
        <Router>
          <Navbar isLogin={isLogin} />
          <Routes>
            <Route path="/" element={<Home />}>
            </Route>
            <Route path="/main" element={<Home />}>
            </Route>
            <Route path="/join" element={<Join />}></Route>
            <Route path="/mypage" element={<MyPage/>}></Route>
            <Route path="/mymentoapply" element={<MyMentoApply/>}></Route>
            <Route path="/mymento" element={<MyMento/>}></Route>
            <Route path="/mystudy" element={<MyStudy/>}></Route>
            <Route path="/myscrap" element={<MyScrap/>}></Route>
            <Route path="/mypoint" element={<MyPoint/>}></Route>

            <Route path="/mentoring" element={<Mentoring />}></Route>
            <Route path="/mentoring/:keyword" element={<Mentoring />}></Route>
            <Route path="/mentoring/filter" element={<Mentoring />}></Route>

            <Route path="/volunteer" element={<Volunteer/>}></Route>
            <Route path="/volunteerdetail/:idex" element={<VolunteerDetail vlist={vlist}/>}></Route>
            
          </Routes>
        </Router>
    </div>
  );
}

export default App;