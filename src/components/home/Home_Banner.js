import React from 'react';
import styles from "./Home_Banner.module.css";
import testfox from "../../images/testfox.png";

function HomeBanner() {

    return (
        <div className={styles.ctn}>
            <div className={styles.content}>
                <div className={styles.btitle}>학습 유형 테스트</div>
                <div className={styles.btext}>
                    나의 학습 유형이 궁금하다면? <br />
                    나에게 맞는 공부법이 궁금하다면?
                </div>
                <button className={styles.btntest}>테스트 하러가기 {">"}</button>
            </div>
            <img className={styles.imgFox} src={testfox} alt="여우" />
        </div>
    );
}

export default HomeBanner;