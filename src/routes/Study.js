import React from "react";
import styles from "./Study.module.css";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import vlists from "../data.js";
import scrapicon from "../images/scrap.png";

function Study(){
    const [slist, setSlist] = useState(vlists);
    // const [loading, setLoading] = useState(false);
    // const [error, setError] = useState(null);
    // const apiStudy = "http://localhost:8080/api/study";
    // const getSlist = async () => {
    //     try {
    //         // 요청이 시작 할 때에는 error 와 vlist 초기화 , loading 상태를 tru로
    //         setError(null);
    //         setSlist(null);
    //         setLoading(true);
    //         const response = await axios.get(apiStudy);
    //         setSlist(response.data); // 데이터는 response.data 안에
    //         console.log(response.data);
    //     } catch (e) {
    //         setError(e);
    //         console.log(e);
    //     }
    //     setLoading(false);
    // };

    // useEffect(() => {
    //     getSlist();
    // }, []);

    // if (loading) return <div>로딩중..</div>;
    // if (error) return <div>에러가 발생했습니다</div>;
    // // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않음
    // if (!slist) return null;

    return(
        <div className={styles.wrap}>
            <div className={styles.shead}>
                <div className={styles.stitle}>스터디</div>
                <button className={styles.swritebtn}>스터디 모집하기</button>
            </div>
            <div className={styles.ssearch}>검색창</div>
            <div className={styles.sbody}>
            {slist.map((item, idex) =>
                (
                    <Link to={`/volunteerdetail/${idex}`} state={{ data: slist[idex] }}>
                        <div className={styles.box} key={idex}>
                            <div className={styles.boxtop}>
                                <h3 className={styles.boxtitle}>{slist[idex].title}</h3>
                                <div src={scrapicon} className={styles.scrapbtn}></div>
                            </div>
                            <div>{slist[idex].current_people} / {slist[idex].total_people}</div>
                            <hr/>
                            <div className={styles.boxdetail}>
                                {slist[idex].address} <br/>
                                [모집기간] {slist[idex].r_end_date}
                                <hr/>
                            </div>
                            
                            <div className={styles.boxtag}>
                                <div className={styles.tag}>#한글</div>
                                <div className={styles.tag}>#다문화</div>
                                <div className={styles.tag}>#문법</div>
                            </div>

                        </div>
                    </Link>

            ))}
            </div>
        </div>
    );

}

export default Study;