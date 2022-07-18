import React, { useState } from "react";
import styled from "styled-components";
import styles from "./MentoApply.module.css";
import pin from "../../images/pin.png";
import { ImCross } from "react-icons/im";
import {BsBookmarkStar, BsBookmarkStarFill} from "react-icons/bs";

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
  display: flex;
  z-index: 990;
  width: 63vw;
  height: 73vh;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0px 2px 3px 0px #4673EA;
  background: white;
`;


function MentoApply({togglePopup}) {

  const [value, setValue] = useState("");
  const [bmk, setBmk] = useState(false);

  const onChange = (e) => {
    setValue(e.target.value);
  }

  const onClickBMK = () => {
    setBmk(current => !current);
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setValue("");
    
  }

  const onClick = () => {
    alert('지원이 완료되었습니다.');
    togglePopup(false);
  }

  return (
    <div>
      <Background  onClick={togglePopup} />
      <Box>
            <img className={styles.pic} src={pin} alt="mentopic" />
            <div>
              <div className={styles.bin}>
               { bmk ? <BsBookmarkStarFill size="30" className={styles.book} onClick={onClickBMK} /> : <BsBookmarkStar size="30" className={styles.book} onClick={onClickBMK} /> }
                <div className={styles.title}>중1 수학 멘티 모집</div>
              </div>
              <div className={styles.content}>
                <p>멘토 한이음</p>
                <p>분야 교육/수학</p>
                <p>멘토링 기간 3개월</p>
                <p>특징 #친절해요 #재밌어요</p>
                <p>소개 즐겁게 공부할 멘티 구해요~</p>
              </div>
              <button className={styles.btn} onClick={onClick}>신청하기</button>
            </div>
            
            <ImCross size="20" className={styles.x} onClick={togglePopup} />
           
      </Box>
    </div>
  );
}

export default MentoApply;