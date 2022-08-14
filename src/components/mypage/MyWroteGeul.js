import axios from "axios";
import React from "react";
import styles from "./MyWroteGeul.module.css"
import { GoPencil, GoTrashcan } from 'react-icons/go';

function MyWroteGeul({item}) {

  const {m_no, role, title, name, field, info, keyword, m_period, mentoringApply, way, region} = item;

  const url = 'http://34,64,249,190:8080'

  const acceptClick = () => {
    try {
      //axios.get(url + '/mypage/mentolist')
      axios.get(`${url}/mypage/${m_no}`, {
        m_no: m_no,
        apply_no: mentoringApply.apply_no
      })
        .then((res) => {
          if (res.data) {
            alert('수락하였습니다.');

          }
        })
    }
    catch (err) {
      console.log('list get error', err);
    }
  }

  const rejectClick = () => {
    try {
      //axios.get(url + '/mypage/mentolist')
      axios.delete('/mypage')
        .then((res) => {
          if (res.data) {
            alert('수락하였습니다.');
          }
        })
    }
    catch (err) {
      console.log('list get error', err);
    }
  }

  const onClickEvent = () => {

  }

  return (
    <div>
      <div className={styles.content}>
        <div className={styles.top}>
          <div className={styles.title}>{title}</div>
          
        </div>
        
        <div className={styles.sub_box}>

          <p><span className={styles.content_span}>멘토</span> <span className={styles.content_span2}>{name}</span></p>
          <p><span className={styles.content_span3}>멘토링 기간</span> <span className={styles.content_span2}>{m_period}개월 이상</span></p>
        </div>
        <div className={styles.sub_box}>
          <p><span className={styles.content_span}>분야</span> <span className={styles.content_span2}>{field}</span></p>
          <p><span className={styles.content_span3}>강의 방식</span> <span className={styles.content_span2}>{way === "ON" ? '온라인' : '오프라인'}</span></p>
        </div>
        <p><span className={styles.content_span}>지역</span> <span className={styles.content_region}>{region}</span>
          <span className={styles.content_span}>특징</span> <span className={styles.content_keyword}>#{keyword}</span></p>
        <p><span className={styles.content_span}>소개</span> <span className={styles.content_info}>{info}</span></p>
        
        <span className={styles.pencil}><GoPencil /></span>
        <span className={styles.trash}><GoTrashcan /></span>
        
      </div>
      {/* 1. 내가 작성한 글이랑 신청한 사람 목록 조회 / 모집글 작성 버튼 보내기 */}

      {
      mentoringApply && mentoringApply.map((item) => (
      <div className={styles.box2}>{/* 신청자 조회 map 함수*/}
        <div className={styles.inner_box2}>
        <span className={styles.name}>{item.email}</span> 님이 {role === "O" ? '멘토' : '멘티'}를 신청하였습니다.
        <span className={styles.detailbtn} onClick={onClickEvent}>상세 보기 {'>'}</span>
        <div className={styles.btnbox}>
          <button className={styles.acceptbtn} onClick={acceptClick}>수락</button>
          <button className={styles.rejectbtn} onClick={rejectClick}>거절</button>
        </div>
        </div>
      </div>
    
      )) 
      }

      </div>
  );
}

export default MyWroteGeul;