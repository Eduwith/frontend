import React from "react";
import styles from "./Study.module.css";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import slists from "../data_study.js";
import scrapicon from "../images/scrap.png";
import scrappedicon from "../images/scrapped.png";
import peopleicon from "../images/people.png";
import StudyDetail from "../components/study/StudyDetail";
import Paging from "../components/volunteer/Paging";

function Study(){
    const [studyDetailPopup, setStudyDetailPopup] = useState(false);
    const toggleStudyDetailPopup = () => {
        setStudyDetailPopup(current => !current);
    };
    const [scrap, setScrap] = useState(false);
    const onClickScrap = () => {
        setScrap(current => !current);
    }
    const [current, setCurrent] = useState("");
    // const getCurrent = (s_no) => {
    //     setCurrent(s_no);
    //     setStudyDetailPopup(current => !current);

    // }
    const [slist, setSlist] = useState(slists);
    // const [slist, setSlist] = useState([]);
    // const [error, setError] = useState(null);
    // const apiStudy = "http://localhost:8080/api/studies";
    // const getSlist = async () => {
    //     try {
    //         setError(null);
    //         setSlist(null);
    //         const response = await axios.get(apiStudy);
    //         setSlist(response.data); // 데이터는 response.data 안에
    //         console.log(response.data);
    //     } catch (e) {
    //         setError(e);
    //         console.log(e);
    //     }
    // };

    // useEffect(() => {
    //     getSlist();
    // }, []);

    // if (error) return <div>에러가 발생했습니다</div>;
    // // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않음
    // if (!slist) return null;

    // const [page, setPage] = useState(1); // 현재 페이지
    // const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    // const [postPerPage] = useState(7); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const handlePageChange = (page) => {setPage(page);}

    // useEffect(()=>{
    //     setCurrentPosts(slist.slice(indexOfFirstPost, indexOfLastPost));
    // }, [indexOfFirstPost, indexOfLastPost, page]);

    return(
        <div className={styles.wrap}>
            <div className={styles.shead}>
                <div className={styles.stitle}>스터디</div>
                <Link to="/study/register">
                    <button className={styles.swritebtn}>스터디 모집하기</button>
                </Link>
            </div>
            <div className={styles.ssearch}>검색창</div>
            <div className={styles.sbody}>
                {slist.map((item, idex) =>
                (
                    <div className={styles.box} key={idex}>
                        <div className={styles.boxtop}>
                                <div className={styles.boxtitle} onClick={toggleStudyDetailPopup}>{item.title}</div>
                                { scrap ? <img src={scrapicon} className={styles.scrap} onClick={onClickScrap} /> : <img src={scrappedicon} className={styles.scrap} onClick={onClickScrap} /> }
                            </div>
                            <div>
                                <img src={peopleicon} className={styles.peopleicon}/> 
                                 {item.current_people} / {item.total_people} <hr/> </div>
                            
                            <div className={styles.boxdetail} onClick={toggleStudyDetailPopup}>
                                {item.contents} <br /><br />
                                [모집마감기한] {item.r_end_date}
                                <hr />
                            </div>

                            <div className={styles.boxtag} onClick={toggleStudyDetailPopup}>
                                <div className={styles.tag}>#한글</div>
                                <div className={styles.tag}>#다문화</div>
                                <div className={styles.tag}>#문법</div>
                            </div>  
                            {studyDetailPopup && (
                            <StudyDetail slist={current} toggleStudyDetailPopup={toggleStudyDetailPopup}/>
                        )} 
                    </div>
                ))}
                
            </div>
            {/* <Paging className={styles.vbottom} page={page} totalCount={slist.length} postPerPage={postPerPage}
                    pageRangeDisplayed={5} handlePageChange={handlePageChange}/> */}
        </div>
    );

}

export default Study;

{/* <div className={styles.box} key={idex} onClick={toggleStudyDetailPopup}>
<Link to={`/volunteerdetail/${idex}`} state={{ data: slist[idex] }} style={{textDecoration: 'none', color: '#333333'}} >
    <div className={styles.boxtop}>
        <div className={styles.boxtitle}>{slist[idex].title}</div>
        <img className={styles.scrap} src={scrapicon}></img>
    </div>
    <div>
        <img src={peopleicon} className={styles.peopleicon}/> 
         {slist[idex].current_people} / {slist[idex].total_people} <hr/> </div>
    
    <div className={styles.boxdetail}>
        {slist[idex].contents} <br /><br />
        [모집마감기한] {slist[idex].r_end_date}
        <hr />
    </div>

    <div className={styles.boxtag}>
        <div className={styles.tag}>#한글</div>
        <div className={styles.tag}>#다문화</div>
        <div className={styles.tag}>#문법</div>
    </div>
</Link>
</div> */}