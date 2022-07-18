import React from "react";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import styles from "./Volunteer.module.css";
import vimg from "../images/vimage.png";
import Navbar from "../components/home/Navbar";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
//import vlists from "../data";

//let vlists =[["오디오북 녹음하기", "서울 성북구", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["자료 번역하기", "경기도", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["디지털 취약계층을 위한 강의", "부산", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"], ["강의 자막 업로드", "대한한국", "2022.02.28~2022.03.06", "2022.03.07~2023.01.31", "5/10"]];

function Volunteer(props) {
    //const [vlist, setVlist] = useState(vlists);

    // const [vlists, setVlists] = useState([]);
    // const getVlists = async () => {
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
    const [vlists, setVlists] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    // const apiVolunteer = "http://localhost:8080/api/volunteers";
    const apiVolunteer = '';
    const getVlists = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 vlist 초기화 , loading 상태를 tru로
            setError(null);
            setVlists(null);
            setLoading(true);
            const response = await axios.get(apiVolunteer);
            setVlists(response.data); // 데이터는 response.data 안에
            console.log(response.data);
        } catch (e) {
            setError(e);
            console.log(e);
        }
        setLoading(false);
    };

    useEffect(() => {
        getVlists();
    }, []);

    if (loading) return <div>로딩중..</div>;
    if (error) return <div>에러가 발생했습니다</div>;
    // 아직 users가 받아와 지지 않았을 때는 아무것도 표시되지 않음
    if (!vlists) return null;


    return (
        <div className={styles.wrap}>
            <Navbar/>
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
                    {vlists.map((item, idex) =>
                    (
                        <div className={styles.listbox} key={idex}>
                            <div className={styles.boxtop}>
                                <h4>{item[0]}</h4>
                                <button>
                                    <Link to={`/volunteerdetail/${idex}`
                                    }>모집중</Link>
                                </button>
                            </div>
                            <div className={styles.boxdetail}>[지역] {item[1]} &nbsp; [모집기간] {item[2]} ~ {item[3]}  &nbsp;  [봉사기간] {item[4]} ~ {item[5]} &nbsp;  [신청인원] {item[6]}/{item[7]}</div>
                           
                        </div>
                    ))}
                </div>
            </div>
            
            <div className={styles.vbottom}><MdArrowBackIos size={25}/> 1 2 3 <MdArrowForwardIos size={25}/></div>
        </div>
        
    );
}

export default Volunteer;