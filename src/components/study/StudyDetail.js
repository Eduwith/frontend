import React from "react";
import styles from "./StudyDetail.module.css";
import styled from "styled-components";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import scrapicon from "../../images/scrap.png";
import scrappedicon from "../../images/scrapped.png";
import closeicon from "../../images/close.png";
import peopleicon from "../../images/people.png";
//import slists from "../../data_study";


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
background-color: #333333;
opacity: 0.2;
`;

function StudyDetail({slist, toggleStudyDetailPopup}) {
    //const [slist, setSlist] = useState([]);
     const [error, setError] = useState(null);
    // const apiStudyDetail = "http://localhost:8080/api/"+slist.s_no
    const apiStudyDetail = "http://localhost:8080/api/studies";
    const postStudy = async () => {
        try {
            setError(null);
            axios.post(apiStudyDetail, {
                email:email,
                s_no: slist.s_no
            }).then(function(response) {
                if(response.data){
                    console.log('스터디 신청 완료');
                    toggleStudyDetailPopup(false);
                  }
                  else{
                    alert('신청 실패');
                  }
            });
        } catch (e) {
            setError(e);
            console.log(e);
        }
    };
    // const getSlist = async () => {
    //     try {
    //         setError(null);
    //         setSlist(null);
    //         const response = await axios.get(apiStudyDetail);
    //         setSlist(response.data);
    //         console.log(response.data);
    //     } catch (e) {
    //         setError(e);
    //         console.log(e);
    //     }
    // };
    // useEffect(() => {
    //     getSlist();
    // }, []);

    const email = "이메일";
    const [scrap, setScrap] = useState(false);
    const [close, setClose] = useState(false);
    
    const onClickScrap = () => {
        setScrap(current => !current);
    }
    const onClickApply = () => {
        alert('신청되었습니다.');
        toggleStudyDetailPopup(false);
        postStudy();
    }
    const onClickClose = () => {
        toggleStudyDetailPopup(false);
        console.log("close");
    }
    // var slist = [{
    //     s_no:5,
    //     title:"강의 자막 업로드",
    //     contents: "안녕하세요. 스터디 모집글 작성. 스터디 모집글 작성",
    //     r_start_date: "2022.02.28",
    //     r_end_date: "2022.03.06",
    //     s_start_date: "2022.03.07",
    //     s_end_date: "2023.01.31",
    //     current_people: "0",
    //     total_people: "10",
    //     s_period: "5"
    // }]
    console.log(slist)
    return(
        <div>
            <Background onClick={toggleStudyDetailPopup} />
            <div className={styles.box}>
                <div className={styles.boxtop}>
                    {console.log(slist.title)}
                    <div className={styles.boxtitle}>{slist.title}</div>
                    { scrap ? <img src={scrapicon} className={styles.scrap} onClick={onClickScrap} /> : <img src={scrappedicon} className={styles.scrap} onClick={onClickScrap} /> }
                    <img className={styles.close} src={closeicon} onClick={onClickClose}/>
                </div>
                <div>
                    <img src={peopleicon} className={styles.peopleicon} />
                    {slist.current_people} / {slist.total_people}
                </div>
                <div className={styles.boxtag}>
                    <div className={styles.tag}>#한글</div>
                    <div className={styles.tag}>#다문화</div>
                    <div className={styles.tag}>#문법</div>
                </div>
                <hr />
                <div className={styles.boxdetail}>
                    {slist.contents} <br /><br />
                    스터디기간 &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; {slist.s_period}개월<br/>
                    모집마감기한 &nbsp;&nbsp;&nbsp;&nbsp; {slist.r_end_date}
                    <hr />
                </div>
                <button className={styles.btn_apply} onClick={onClickApply}>신청하기</button>   
            </div>
        </div>
    );
}

export default StudyDetail;