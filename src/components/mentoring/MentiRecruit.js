import React, { useState } from "react";
import styled from "styled-components";
import styles from "./MentiRecruit.module.css";
import { ImCross } from "react-icons/im";
import axios from "axios";
import { useNavigate } from "react-router";


const Background = styled.div`
position: fixed;
z-index: 980;
left: 0;
top: 0;
overflow: hidden;
width: 100vw;
height:100vh;
display: flex;
justify-content: center;
align-items: center;
background: grey;
opacity: 0.9;
`;

const Box = styled.div`
position: fixed;
top: 13%;
margin: 0 auto;
left: 0;
right: 0;
z-index: 990;
width: 50vw;
height: 73vh;
overflow: hidden;
background: white;
`;



function MentiRecruit({toggleApplyPopup}) {
  const navigate = useNavigate();

  const email = "12@naver.com";
  const role = 'O';
  const [title, setTitle] = useState("");
  const [field, setField] = useState("");
  const [region, setRegion] = useState("");
  const [teaching, setTeaching] = useState("");
  const rPeriod = "7";
  const [mPeriod, setMPeriod] = useState("");
  const [keyword, setKeyword] = useState("");
  const [info, setInfo] = useState("");


  const onTitleHandler = (event) => {
    setTitle(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onFieldHandler = (event) => {
    setField(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onRegionHandler = (event) => {
    setRegion(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }
  
  const onTeachingHandler = (event) => {
    setTeaching(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onMPeriodHandler = (event) => {
    setMPeriod(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onKeywordHandler = (event) => {
    setKeyword(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }
  const onInfoHandler = (event) => {
    setInfo(event.currentTarget.value);
    console.log(event.currentTarget.value);
  }

  const onSubmit = () => {
    const url = "http://localhost:8080/mentoring/recruitment";

    const recruit_info = {
        role: role,
        title: title,
        field: field,
        region: region,
        way: teaching,
        r_period: rPeriod,
        m_period: mPeriod,
        keyword: keyword,
        info: info,
        email: email
    };

    axios.post(url, {
      headers: {
        "Content-Type": "application/json"
      },
      data: recruit_info,
    })
    .then(response => {
      if(response.data === email){
        console.log('모집글 등록 완료');
        navigate('/mentoring');
      }
      else{
        alert('등록 실패');
      }
    }).catch(error => {
      console.log("Join Error >>", error);
    });
  };


  const onClick = () => {
    alert('등록이 완료되었습니다.');
    toggleApplyPopup(false);
  }

  return (
    <div>
      <Background  onClick={toggleApplyPopup} />
      <Box>
            <div className={styles.title_box}>
              <span className={styles.big_title}>멘티모집글</span>
              <ImCross type="button" size="20" className={styles.x} onClick={toggleApplyPopup} />
            </div>
            <div className={styles.outer_box}>
              <form onSubmit={onSubmit}>
                <div className={styles.inner_box}>
                  <div className={styles.left}>제목</div>
                  <input type="text" className={styles.input_title} value={title} onChange={onTitleHandler} />  
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>분야</div>
                  <div>
                    <label><input type="radio" name="field" value="dream" onChange={onFieldHandler} />진로</label>
                    <label><input type="radio" name="field" value="teach" onChange={onFieldHandler} />교육</label>
                    <label><input type="radio" name="field" value="art"  onChange={onFieldHandler} />문화예술스포츠</label>
                    <label><input type="radio" name="field" value="etc"  onChange={onFieldHandler} />기타</label> 
                  </div>
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>지역</div>
                  <input type="text" className={styles.input_title} value={region} onChange={onRegionHandler} />  
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>강의방식</div>
                  <div>
                    <label><input type="checkbox" name="teaching" value="on" onChange={onTeachingHandler} />온라인</label>
                    <label><input type="checkbox" name="teaching" value="off" onChange={onTeachingHandler} />오프라인</label>
                  </div>
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>멘토링 기간</div>
                  <select name="period" onChange={onMPeriodHandler}>
                    <option value="1">1개월 미만</option>
                    <option value="3">3개월 미만</option>
                    <option value="6">6개월 미만</option>
                    <option value="12">1년 미만</option>
                  </select>
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>특징</div>
                  <select name="keyword" onChange={onKeywordHandler} value={keyword}>
                    <option value="fun">재밌어요</option>
                    <option value="faithful">성실해요</option>
                    <option value="kind">친절해요</option>
                  </select>
                </div>

                <div className={styles.inner_box}>
                  <div className={styles.left}>소개글</div>
                  <input type="text" value={info} onChange={onInfoHandler} className={styles.input_desc} />  
                </div>

              <button type="submit" className={styles.btn} >멘토 등록하기</button>
              </form>
            </div>
            
            
            
           
      </Box>
    </div>
  );
}

export default MentiRecruit;