import styles from "./MyMento.module.css";
import {NavLink} from "react-router-dom";
import { useState, useEffect } from "react";
import {BsPlusCircle} from "react-icons/bs";
import animal from "../../../images/animal.png"
import axios from "axios";
import MyMentoJournal from "./MyMentoJournal";
import MyMtJournalDetail from "./MyMtJournalDetail";

function MyMento() {
    const activeStyle={
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle={
        color: 'black',
        textDecoration: "none"
    };

    //멘토, 멘티 구분

    const [role, setRole] = useState("O");

    const onClickMentor = () => {
      setRole("O");
    }
  
    const onClickMentee = () => {
      setRole("E");
    }    

    const url = 'http://localhost:8080';
    const [user, setUser] = useState(null);
    const [logList, setLogList] = useState([]);
    const [mtitle, setMtitle] = useState('');
    const [current, setCurrent] = useState(null);


    //멘토링 일지 조회

    const getList = () => {
      axios.get(url + '/mentoring/log/list')
           .then((res) => {
              if(res.data){
                setUser(res.data.user);
                setLogList(res.data.logList);
                setMtitle(res.data.m_title);
              }

           })
    }

    const clickBtn = () => {
      setShowPopup(true);
    }

    useEffect(() => {
      getList();
    }, [])


      //팝업
  const [showPopup, setShowPopup] = useState(false);
  const [showSPopup, setShowSPopup] = useState(false);

  const onView = (id) => {
    setCurrent(logList ? logList.find(item => item.mentoring_no === id) : null);
    console.log(current , 'current');    
  }

  const togglePopup = () => {
    setShowPopup(current => !current);
    
  };

  const toggleSPopup = () => {
    
    setShowSPopup(current => !current);
    
  };

    return(
      <div className={styles.wrap}>
      <div className={styles.head}>MY PAGE</div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.left}>
            <ul className={styles.nav}>
              <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
              <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
              <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
              <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
              <li><NavLink to="/MyScrap" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
              <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.menu}>
              <span className={styles.submenu} onClick={onClickMentor} >멘토</span> <span className={styles.bar}> </span> <span className={styles.submenu} onClick={onClickMentee}>멘티</span>
            </div>

            <div className={styles.bigBox}>
              <h2 className={styles.mymenu}>{mtitle}</h2>
              <div className={styles.profileBox}>
                <div className={styles.ptitle}>{role === "O" ? '멘티' : '멘토'} 상세 정보</div>
                <div className={styles.pinBox}>
                  <img src={animal} className={styles.img}/>
                  <div>
                  <div className={styles.desc}>{user.name}</div>
                  <div className={styles.desc}>{user.age} 세</div>
                  <div className={styles.desc}>{user.email}</div> </div>
                </div>
              </div>

              <div className={styles.MemoBox}>
                <div className={styles.mtitle}>멘토링 일지</div>
                
                <div className={styles.minBox}>
                  
                 { logList.map((item) => (
                      <div className={styles.subBox} key={item.mentoring_no} onClick={toggleSPopup} onMouseOver={() => onView(item.mentoring_no)}> 
                        <div className={styles.desc}>{item.date}</div>
                        <div className={styles.desc}>{item.title}</div>
                        <div className={styles.desc2}>{item.content}</div>
                      </div>

                  ))}
                </div>
                <BsPlusCircle size="32" color="#4673EA" onClick={clickBtn} className={styles.btn}/>
              
                { showPopup && <MyMentoJournal togglePopup={togglePopup}/>}
                { showSPopup && <MyMtJournalDetail toggleSPopup={toggleSPopup} logList={logList} current={current} /> }
              </div>

            </div>

           

          </div>
        </div>

      </div>
    </div>
    );
}

export default MyMento;