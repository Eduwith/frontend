import React from 'react';
import styles from "./Home_Banner.module.css";
import testfox from "../../images/testfox.png";
import { Link } from 'react-router-dom';
import axios from 'axios';

function HomeBanner() {

  const url = 'http://34.64.249.190:8080';
  const takeUrl = () => {
    axios.get(url +'/test')
    .then((res) => {
      console.log('test 결과!!!!!!!!!! ', res.data)
    });
  }

    return (
        <div className={styles.ctn}>
            <div className={styles.content}>
                <div className={styles.btitle}>학습 유형 테스트</div>
                <div className={styles.btext}>
                    나의 학습 유형이 궁금하다면? <br />
                    나에게 맞는 공부법이 궁금하다면?
                </div>
                <Link to="/test"><button type="button" className={styles.btntest}> 테스트 하러가기 {">"}</button></Link>
            <button onClick={takeUrl}>버튼</button>
            </div>
            <img className={styles.imgFox} src={testfox} alt="여우" />
        </div>
    );
}

export default HomeBanner;