import React from "react";
import styles from "./StudyRegister.module.css";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


function StudyRegister() {
    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [tag, setTag] = useState("");
    const [total_people, setTPeople] = useState("1");
    const [r_end_date, setEDate] = useState("");
    const [contents, setContents] = useState("");
    const [s_period, setSperiod] = useState("1");
  
  
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
  
    const onContentsHandler = (event) => {
      setContents(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }

    const onSperiodHandler = (event) => {
      setSperiod(event.currentTarget.value);
      console.log(event.currentTarget.value);
    }

  const apiStudyRegister = "http://localhost:8080/api/studies/register";
  const postStudyRegister = async () => {
      console.log("스터디 등록 버튼 클릭됨");
      axios.post(apiStudyRegister, {
        title: title,
        contents: contents,
        tag: tag,
        total_people: total_people,
        r_end_date: r_end_date,
        s_period: s_period
      }).then(function (response) {
        if(response.data.result === "SUCCESS"){
          console.log('스터디 등록 완료');
          navigate("/studies");
        }
      }).catch(function(error) {
        console.log(error);
        alert('등록 실패');
      });

  };

  return (
    <div className={styles.wrap}>
      <div className={styles.top}> 스터디 모집글 작성</div>
      <div className={styles.body}>
      
        <form onSubmit={postStudyRegister}>
          <div className={styles.inner_box}>
            <div className={styles.boxtop}>제목</div>
            <input type="text" className={styles.input_title} value={title} onChange={onTitleHandler} placeholder="제목을 입력하세요" />
          </div>
          <div className={styles.inner_display}>
            <div>
            <div className={styles.boxtop}>모집마감기한</div>
            <input type="text" className={styles.input_title} value={r_end_date} onChange={onEDateHandler} />
            </div>
            <div className={styles.displaybox}>
            <div className={styles.boxtop}>모집인원</div>
            <input type="number" className={styles.input_title} value={total_people} onChange={onTPeopleHandler} />
            </div>
          </div>
          <div className={styles.inner_box}>
            <div className={styles.boxtop}>스터디기간</div>
            <input type="number" className={styles.input_title} value={s_period} onChange={onSperiodHandler} />
          </div>
          <div className={styles.inner_box}>
            <div className={styles.boxtop}>내용</div>
            <input type="text" value={contents} onChange={onContentsHandler} className={styles.input_content} placeholder="내용을 입력하세요"  />
          </div>
          <div className={styles.inner_box}>
            <div className={styles.boxtop}>태그</div>
            <input type="text" value={tag} onChange={onTagHandler} className={styles.input_title} placeholder="#태그를 입력하세요" />
          </div>


          <div className={styles.btnblock}>
          <button type="submit" className={styles.btn_apply} onClick={postStudyRegister}>등록하기</button>
          <button type="submit" className={styles.btn_back} onClick={ () => navigate('/studies')}>취소하기</button>
          </div>
          
        </form>
      </div>
    </div>

    );
}

export default StudyRegister;