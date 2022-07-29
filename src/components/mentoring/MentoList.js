import React, { useEffect, useState } from "react";
import styles from "./MentoList.module.css";
import pin from "../../images/pin.png";
import axios from "axios";

function MentoList({geul, togglePopup}) {

  return (
    geul && geul.map((n) => (
      <div className={styles.mento} key={n.m_no}>
        <img className={styles.pic} src={pin} alt="mentopic" />
        <div className={styles.title}>{n.title}</div>
        <div className={styles.btn} onClick={togglePopup}>신청</div>

        <div className={styles.box}><span>멘토 <b>{n.name}</b></span></div>
        <div className={styles.box}><span>분야 <b>{n.field}</b></span></div>
        <div className={styles.box2}><span>소개 <b>{n.info}</b></span></div>
      </div>

    ))
  );

}

export default MentoList;