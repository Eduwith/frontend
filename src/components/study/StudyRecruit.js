import React from "react";
import styles from "./StudyRecruit.module.css";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

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

function StudyRecruit(toggleStudyRecruitPopup){
    const navigate = useNavigate();

    const email = "12233@naver.com";
    const role = "O";
    const [title, setTitle] = useState("");
    const [field, setField] = useState("");
    const [region, setRegion] = useState("");
    const [teaching, setTeaching] = useState("");
    const rPeriod = "7";
    const [mPeriod, setMPeriod] = useState("1개월 미만");
    const [keyword, setKeyword] = useState("재밌어요");
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
  
    const handleSubmit = async () => {
      try {
        axios.post('http://localhost:8080/mentoring/recruitment', {
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
        }).then(function (response) {
          if(response.data){
            console.log('모집글 등록 완료');
          }
          else{
            alert('등록 실패');
          }
        });
        
      } catch (err) {
        console.log("Mentoring Recruit Error >>", err);
      }
    };
    const onClick = () => {
        alert('등록이 완료되었습니다.');
        toggleStudyRecruitPopup(false);
        navigate('/mentoring');
      }

    return(
        <div>
                <div> 스터디 모집글 작성하기</div>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className={styles.inner_box}>
                            <div className={styles.left}>제목</div>
                            <input type="text" className={styles.input_title} value={title} onChange={onTitleHandler} />
                        </div>

                        <div className={styles.inner_box}>
                            <div className={styles.left}>태그</div>
                            <div>
                                <label><input type="radio" name="field" value="dream" onChange={onFieldHandler} />진로</label>
                                <label><input type="radio" name="field" value="teach" onChange={onFieldHandler} />교육</label>
                                <label><input type="radio" name="field" value="art" onChange={onFieldHandler} />문화예술스포츠</label>
                                <label><input type="radio" name="field" value="etc" onChange={onFieldHandler} />기타</label>
                            </div>
                        </div>

                        <div className={styles.inner_box}>
                            <div className={styles.left}>스터디기간</div>
                            <select name="period" onChange={onMPeriodHandler}>
                                <option value="1">1개월 미만</option>
                                <option value="3">3개월 미만</option>
                                <option value="6">6개월 미만</option>
                                <option value="12">1년 미만</option>
                            </select>
                        </div>

                        <div className={styles.inner_box}>
                            <div className={styles.left}>모집인원</div>
                            <input type="text" className={styles.input_title} value={region} onChange={onRegionHandler} />
                        </div>

                        <div className={styles.inner_box}>
                            <div className={styles.left}>모집마감기한</div>
                            <input type="text" className={styles.input_title} value={region} onChange={onRegionHandler} />
                        </div>

                        <div className={styles.inner_box}>
                            <div className={styles.left}>소개글</div>
                            <input type="text" value={info} onChange={onInfoHandler} className={styles.input_desc} />
                        </div>

                        <button type="button" onClick={handleSubmit} className={styles.btn} >등록하기</button>
                    </form>
                </div>
            </Box>

        </div>

    );
}

export default StudyRecruit;