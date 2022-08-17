import React from "react";
import styles from "./Study.module.css";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import slists from "../data_study.js";
import scrapicon from "../images/scrap.png";
import scrappedicon from "../images/scrapped.png";
import peopleicon from "../images/people.png";
import searchicon from "../images/search.png";
import StudyDetail from "../components/study/StudyDetail";
import Paging from "../components/volunteer/Paging";

function Study(){
    const Sbox= styled.div`
    background : ${props => 
        {if(props.recruit == "N") { return "#C4C4C4"}
    }}
    ;
    border: ${props => 
        {if(props.recruit == "N") { return "none"}
    }}
    `;

    const [page, setPage] = useState(1); // 현재 페이지
    const onClickTwo = () =>{
        setPage(2);
        console.log("2page")
    }
    const onClickone= () =>{
        setPage(1);
    }
    // const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    // const [postPerPage] = useState(7); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const handlePageChange = (page) => {setPage(page);}

    // useEffect(()=>{
    //     setCurrentPosts(slist.slice(indexOfFirstPost, indexOfLastPost));
    // }, [indexOfFirstPost, indexOfLastPost, page]);

    const [no, setNo] = useState("");
    const [studyDetailPopup, setStudyDetailPopup] = useState(false);
    const toggleStudyDetailPopup = (s_no) => {
        setStudyDetailPopup(current => !current);
        //setNo(s_no)
    };
    const [scrap, setScrap] = useState(false);
    const onClickScrap = () => {
        setScrap(current => !current);
    }

    const [searchTag, setSearchTag] = useState("");
    const handleSearchInput = (e) => {
        setSearchTag(e.target.value);
    }
    const search = async () => {
        try {
            console.log(searchTag + "검색");
            const response = await axios.get(`http://localhost:8080/mentoring/keyword=${searchTag}`, {
                keyword : searchTag
            });
            if (response.data) {
                setSlist(response.data);
                console.log(response.data);
            }
        } catch (err) {
            console.log("search Error >>", err);
        }
    };

    //const [slist, setSlist] = useState(slists);
    const [slist, setSlist] = useState([]);
    const apiStudy = "http://localhost:8080/api/studies";
    const baseUrl =  "http://localhost:8080";
    const getSlist = async () => {
        try {
            const response = await axios.get(baseUrl+ `/api/studies/?page=${page}&pageSize=10`,
                {params : { page: page}
            });
            setSlist(response.data); // 데이터는 response.data 안에
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getSlist();
    }, []);

    return(
        <div className={styles.wrap}>
            <div className={styles.shead}>
                <div className={styles.stitle}>스터디</div>
                <Link to="/studies/register">
                    <button className={styles.swritebtn}>스터디 모집하기</button>
                </Link>
            </div>
            <form className={styles.s_search}>
            <input value={searchTag} onChange={handleSearchInput} type="text" placeholder="검색어를 입력하세요" className={styles.searchInput} />
            <img onClick={search} src={searchicon} className={styles.searchImg} />
          </form>
            <div className={styles.sbody}>
                {slist.map((item, idex) =>
                (
                    <Sbox recruit={item.recruitYN} className={styles.box} key={idex}>
                        <div className={styles.boxtop}>
                        <Link to={`/studies/${item.s_no}`} state={{ data: item, scrap : scrap, }}>
                        <div className={styles.boxtitle} onClick={toggleStudyDetailPopup}>{item.title}</div>
                        </Link>
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
                                {
                                    item.tag.map((tag, idex) =>(
                                        <div className={styles.tag} key={tag}>#{tag}</div>
                                    ))
                                }
                            </div>
                            {/* {studyDetailPopup && (
                                <StudyDetail slist={item} toggleStudyDetailPopup={toggleStudyDetailPopup} scrap={scrap} onClickScrap={onClickScrap}/>
                             )}  */}
                    </Sbox>
                ))}
            
                
            </div>
            <div onClick={onClickone}>1</div>
            <div onClick={onClickTwo}>2</div>
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