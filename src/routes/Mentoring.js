import React, { useEffect, useState } from "react";
import styles from "./Mentoring.module.css";
import pin from "../images/pin.png";
import MentoApply from "../components/mentoring/MentoApply";
import MentiRecruit from "../components/mentoring/MentiRecruit";
import axios from "axios";

let mento = [['한이음(23세/여자)', '중1 수학 멘티 모집'],
             ['박서윤(24세/여자)', '고3 영어 멘티 모집'],
             ['김한음(25세/남자)', '고2 물리 같이 해요'],
            ['김세훈(23세/남자)','드로잉 기초 멘티']];

function Mentoring() {
  const [showPopup, setShowPopup] = useState(false);
  const [showApplyPopup, setShowApplyPopup] = useState(false);


  const [geul, setGeul] = useState(null);

  const togglePopup = () => {
    setShowPopup(current => !current);
  };

  const toggleApplyPopup = () => {
    console.log('멘토 신청 버튼 클릭');
    setShowApplyPopup(current => !current);
  };

  const fetchGeul = async () => {
    try {
      setGeul(null);
      const response = await axios.get('http://localhost:8080/mentoring/recruitment');
      console.log(response.data);
      setGeul(response.data);
    } catch (err) {
      console.log("Error >>", err);
    }
  };

  useEffect(() => {
    fetchGeul();
  }, []);
  
  return (
    <div>
      <div className={styles.back}>
      <div className={styles.Title}>
        멘토 찾기 <button className={styles.apply_btn} onClick={toggleApplyPopup}> 멘토 신청하기 </button>
      </div>

    <div className={styles.big_box}>
      <div className={styles.search}>
        <div className={styles.cn1}>
          <div>
            <form method="get" action="#" className={styles.subject}>
              <h2>분야</h2>
              <label><input type="radio" name="category" value="진로" /> 진로</label>
              <label><input type="radio" name="category" value="교육" /> 교육</label>            
              <label><input type="radio" name="category" value="문화예술스포츠" /> 문화예술스포츠</label>            
              <label><input type="radio" name="category" value="기타" /> 기타</label>
              <div className={styles.hiddenblock}></div>
            </form>
           
          </div>
          
         
            <div className={styles.subject}>
              <h2>멘토링기간</h2>
              <select name="period" className={styles.selectbox1}>
                <option value="1개월">1개월 이상</option>
                <option value="3개월">3개월 이상</option>
                <option value="6개월">6개월 이상</option>
                <option value="1년">1년 이상</option>
              </select>
            </div>
          
        </div>

      <div className={styles.cn1}>
        <div className={styles.subject}>
          <h2>지역</h2>
          <select name="region" className={styles.region}>
            <option value="서울특별시">서울특별시</option>
            <option value="경기도">경기도</option>
            <option value="인천광역시">인천광역시</option>
          </select>
          <select name="region_sub" className={styles.region}>
            <option value="광진구">광진구</option>
            <option value="강서구">강서구</option>
            <option value="노원구">노원구</option>
          </select>
          <div className={styles.hiddenblock}></div>
        </div>

        <div>
          <form method="get" action="#" className={styles.subject}>
            <h2>강의 방식</h2>
            <label><input type="checkbox" name="how" defaultValue="온라인" /> 온라인</label>
            <label><input type="checkbox" name="how" defaultValue="오프라인" /> 오프라인</label>
          </form>
        </div>
      </div>

        <div className={styles.scBtn}>검색</div>

      </div>

        <div className={styles.group}>
          {console.log(geul)}
          {geul && geul.map((n) => (
            <div className={styles.mento} key={n.m_no}>
            <img className={styles.pic} src={pin} alt="mentopic" />
            <div className={styles.title}>{n.title}</div>
            <div className={styles.btn} onClick={togglePopup}>신청</div>
            
            <div className={styles.box}><span>멘토 <b>{n.name}</b></span></div>
            <div className={styles.box}><span>분야 <b>{n.field}</b></span></div>
            <div className={styles.box2}><span>소개 <b>{n.info}</b></span></div>
          </div>
            
          ))}
          
          {showPopup && (
                <MentoApply togglePopup={togglePopup} />
              )}

          {showApplyPopup && (
                <MentiRecruit toggleApplyPopup={toggleApplyPopup} />
              )}  
        </div>
      </div>
    </div>
  </div>

  );
}

export default Mentoring;