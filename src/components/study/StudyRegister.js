import React from "react";
import styles from "./StudyRegister.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function StudyRegister(toggleStudyRecruitPopup) {
    const navigate = useNavigate();

    const email = "email.com";
    const s_no = "10";
    const current_people = "2";
    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [total_people, setTPeople] = useState("");
    const [r_end_date, setEDate] = useState("");
    const [s_period, setSPeriod] = useState("1개월 미만");
    const [contents, setContents] = useState("");
  
  
    const onTitleHandler = (event) => {
      setTitle(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
  
    const onTagHandler = (event) => {
      setTag(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
  
    const onEDateHandler = (event) => {
      setEDate(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
    
    const onTPeopleHandler = (event) => {
      setTPeople(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
  
    const onSPeriodHandler = (event) => {
      setSPeriod(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
    const onContentsHandler = (event) => {
      setContents(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }
  const [error, setError] = useState(null);
  const apiStudyRegister = "http://localhost:8080/api/studies/register";
  const postStudyRegister = async () => {
    try {
      setError(null);
      axios.post(apiStudyRegister, {
        s_no:s_no,
        email: email,
        title: title,
        tag: tag,
        total_people: total_people,
        s_period: s_period,
        r_end_date: r_end_date,
        contents: contents,
        current_people:current_people
      }).then(function (response) {
        if (response.data) {
          console.log('스터디 등록 완료');
          navigate(-1);
        }
        else {
          alert('등록 실패');
        }

      });
    } catch (e) {
      setError(e);
      console.log(e);
    }
  };

  return (
    <div>
      <div> 스터디 모집글 작성하기</div>
      <div>
        <form onSubmit={postStudyRegister}>
          <div className={styles.inner_box}>
            <div className={styles.left}>제목</div>
            <input type="text" className={styles.input_title} value={title} onChange={onTitleHandler} />
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>태그</div>
            <div>
              <label><input type="radio" name="tag" value="korean" onChange={onTagHandler} />한글</label>
              <label><input type="radio" name="tag" value="english" onChange={onTagHandler} />영어</label>
              <label><input type="radio" name="tag" value="IT" onChange={onTagHandler} />IT</label>
              <label><input type="radio" name="tag" value="etc" onChange={onTagHandler} />기타</label>
            </div>
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>스터디기간</div>
            <select name="period" onChange={onSPeriodHandler}>
              <option value="1">1개월 미만</option>
              <option value="3">3개월 미만</option>
              <option value="6">6개월 미만</option>
              <option value="12">1년 미만</option>
            </select>
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>모집인원</div>
            <input type="text" className={styles.input_title} value={total_people} onChange={onTPeopleHandler} />
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>모집마감기한</div>
            <input type="text" className={styles.input_title} value={r_end_date} onChange={onEDateHandler} />
          </div>

          <div className={styles.inner_box}>
            <div className={styles.left}>내용</div>
            <input type="text" value={contents} onChange={onContentsHandler} className={styles.input_desc} />
          </div>

          <button type="submit" onClick={postStudyRegister} className={styles.btn} >등록하기</button>
        </form>
      </div>


    </div>

    );
}

export default StudyRegister;