import React, { useEffect, useState } from 'react';
import styles from "./Home_Banner.module.css";
import testfox from "../../images/testfox.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeBanner() {

  const [test, setTest] = useState('');

  const testClick = () => {
    axios.get('http://localhost:8080/test')
    .then((res) => {
      setTest(res.data);
      console.log('test', test);
    })
  }
  
    return (
        <div className={styles.ctn}>
            <div className={styles.content}>
                <div className={styles.btitle}>학습 유형 테스트</div>
                <div className={styles.btext}>
                    나의 학습 유형이 궁금하다면? <br />
                    나에게 맞는 공부법이 궁금하다면?
                </div>
                <button onClick={testClick}>아아</button>
                <Link to="/test"><button type="button" className={styles.btntest}> 테스트 하러가기 {">"}</button></Link>

            </div>
            <img className={styles.imgFox} src={testfox} alt="여우" />
        </div>
    );
}

export default HomeBanner;