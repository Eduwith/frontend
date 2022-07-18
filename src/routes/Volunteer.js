import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./Volunteer.module.css";
import vimg from "../images/vimage.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import vlists from "../data.js";


function Volunteer() {
    const [vlist, setVlist] = useState(vlists);
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

    // const [vlist, setVlist] = useState([]);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // // const apiVolunteer = "http://localhost:8080/api/volunteers";
    // const apiVolunteer = '';
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
                                <h4>{vlist[idex].title}</h4>
                                <Link to={`/volunteerdetail/${idex}`} state={{ data: vlist[idex] }}>
                                    <button className={styles.recruitbtn}>모집중</button>
                                </Link>
                            </div>
                            <div className={styles.boxdetail}>[지역] {vlist[idex].address} &nbsp; [모집기간] {vlist[idex].r_start_date} ~ {vlist[idex].r_end_date}  &nbsp;  [봉사기간] {vlist[idex].v_start_date} ~ {vlist[idex].v_end_date} &nbsp;  [신청인원] {vlist[idex].current_people}/{vlist[idex].total_people}</div>
                           
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.vbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div>
        </div>
        
    );
}

export default Volunteer;