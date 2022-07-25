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
    // const [vlist, setVlist] = useState([]);
    // const getVlist = async () => {
    //     const json= await(
    //         await fetch(
    //             'http://localhost:8080/volunteers'
    //         )
    //     ).json();
    //     setVlists(json.data.vlists);
    // };
    // useEffect(() => {
    //     getVlists();
    // },[]);

    const [page, setPage] = useState(1); // 현재 페이지
    const [currentPosts, setCurrentPosts] = useState([]); // 보여줄 포스트
    const [postPerPage] = useState(7); //페이지당 포스트 개수
    const indexOfLastPost = page * postPerPage;
    const indexOfFirstPost = indexOfLastPost - postPerPage;
    const handlePageChange = (page) => { setPage(page); console.log(page); }

    useEffect(() => {
        setCurrentPosts(vlist.slice(indexOfFirstPost, indexOfLastPost));
    }, [indexOfFirstPost, indexOfLastPost, page]);

    const [vlist, setVlist] = useState(vlists);
    // const [vlist, setVlist] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const apiVolunteer = "http://localhost:8080/api/volunteers";
    // const getVlist = async () => {
    //     try {
    //         // 요청이 시작 할 때에는 error 와 vlist 초기화 , loading 상태를 tru로
    //         setError(null);
    //         setVlist(null);
    //         setLoading(true);
    //         const response = await axios.get(apiVolunteer);
    //         setVlist(response.data); // 데이터는 response.data 안에
    //         console.log(response.data);
    //     } catch (e) {
    //         setError(e);
    //         console.log(e);
    //     }
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getVlist();
    // }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않음
    // if (!vlist) return null;

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
                                <Link to={`/volunteerdetail/${item.v_no}`} state={{ data: item }}>
                                    <button className={styles.recruitbtn}>모집중</button>
                                </Link>
                            </div>
                            <div className={styles.boxdetail}>[지역] {item.address} &nbsp; [모집기간] {item.r_start_date} ~ {item.r_end_date}  &nbsp;  [봉사기간] {item.v_start_date} ~ {item.v_end_date} &nbsp;  [신청인원] {item.current_people}/{item.total_people}</div>
                           
                        </div>
                    ))}
                </div>
            </div>
            <Paging className={styles.vbottom} page={page} totalCount={vlist.length} postPerPage={postPerPage}
                    pageRangeDisplayed={5} handlePageChange={handlePageChange}/>

            {/* <div className={styles.vbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div> */}
        </div>
        
    );
}

export default Volunteer;