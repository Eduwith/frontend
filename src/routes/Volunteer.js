import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./Volunteer.module.css";
import vimg from "../images/vimage.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import vlists from "../data.js";
import Paging from "../components/volunteer/Paging";


function Volunteer() {
    const [page, setPage] = useState(1); // 현재 페이지
    // const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    // const [postPerPage] = useState(7); //페이지당 포스트 개수
    // const indexOfLastPost = page * postPerPage; //해당 페이지의 첫번째 데이터 인덱스
    // const indexOfFirstPost = indexOfLastPost - postPerPage; //해당 페이지의 마지막 데이터 인덱스
    // const handlePageChange = (page) => { 
    //     setPage(page); 
    //     console.log(page); 
    // }

    // useEffect(() => {
    //     setCurrentPosts(vlist.slice(indexOfFirstPost, indexOfLastPost));
    // }, [indexOfFirstPost, indexOfLastPost, page]);

    //const [vlist, setVlist] = useState(vlists);
    const onClickTwo = () =>{
        setPage(2);
    }
    const onClickone= () =>{
        setPage(1);
    }
    const [vlist, setVlist] = useState([]);
    const [error, setError] = useState(null);
    const apiVolunteer = "http://localhost:8080/api/volunteers";
    const getVlist = async () => {
        try {
            setError(null);
            setVlist(null);
            const response = await axios.get(apiVolunteer +`?page=${page}`);
            setVlist(response.data); // 데이터는 response.data 안에
            console.log(response.data);
        } catch (e) {
            setError(e);
            console.log(e);
        }
    };

    useEffect(() => {
        getVlist();
    }, []);

    return (
        <div className={styles.wrap}>
            <div className={styles.vhead}>
                <div>
                    <div className={styles.vtitle}>Volunteer</div>
                    <div className={styles.vtext}>1년 365일 자원봉사하기 좋은 날</div>
                    <img className={styles.vimg} src={vimg}></img>
                </div>
            </div>
            
            <div className={styles.vlist}>,
                <div>
                    <div className={styles.text}>목록보기 <hr /> </div>
    
                    {vlist.map((item, idex) =>
                    (
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxtop}>
                                <h4>{item.title}</h4>
                                <Link to={`/volunteers/no=${item.v_no}`} state={{ data: item }}>
                                    <button className={styles.recruitbtn}>모집중</button>
                                </Link>
                            </div>
                            <div className={styles.boxdetail}>[지역] {item.address} &nbsp; [모집기간] {item.r_start_date} ~ {item.r_end_date}  &nbsp;  [봉사기간] {item.v_start_date} ~ {item.v_end_date} &nbsp;  [신청인원] {item.current_people}/{item.total_people}</div>
                            {console.log(idex)}
                        </div>
                    ))}
                </div>
            </div>
            <div onClick={onClickone}>1</div>
            <div onClick={onClickTwo}>2</div>
            {/* <Paging className={styles.vbottom} page={page} totalCount={vlist.length} postPerPage={postPerPage}
                    pageRangeDisplayed={5} handlePageChange={handlePageChange}/> */}

            {/* <div className={styles.vbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div> */}
        </div>
        
    );
}

export default Volunteer;