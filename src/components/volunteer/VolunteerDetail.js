import Navbar from "../home/Navbar";
import s from "./VolunteerDetail.module.css";
import Table from "react-bootstrap/Table";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';
import { useLocation } from 'react-router-dom';


function VolunteerDetail(props) {
    // const {vtitle, vcountry, vrecperiod, vperiod, vpeople} = vlist;
    //const location = useLocation();
    //console.log(location.state.vlists[idex]);
    //const state_vlists = location.state.vlists;

    const { idex } = useParams();
    const navigate = useNavigate();
    console.log(props.vlist[idex]);

    // const [vlists, setVlists] = useState([]);
    // // const apiVolunteer = "http://localhost:8080/api/volunteers";
    // const apiVolunteer = '';
    // useEffect(async () => {
    //     const response = await axios.get(apiVolunteer);
    //     setVlists(response.data);
    //     console.log(response.data);
    //   }, []);

    return(
        <div>
            <Navbar/>
            <div className={s.content}>
                <div className={s.titleblock}>
                    <div className={s.recruitstate}>모집중</div>
                    <div className={s.title}>{props.vlist[idex].vtitle}</div>
                </div>
                <div className={s.table}>
                    <Table>
                            <tbody className="align-middle" height={500}>
                                        <tr height="10%">
                                            <td id={s.tbmenu} >봉사기간</td>
                                            <td colSpan={3}>{props.vlist[idex].v_start_date}~{props.vlist[idex].v_end_date}</td>
                                        </tr>
                                        <tr height="10%">
                                            <td id={s.tbmenu} >모집기간</td>
                                            <td colSpan={3}>{props.vlist[idex].r_start_date}~{props.vlist[idex].r_end_date}</td>
                                        </tr>
                                        <tr height="10%">
                                            <td id={s.tbmenu} >신청인원</td>
                                            <td>{props.vlist[idex].current_people}/{props.vlist[idex].total_people}</td>
                                            <td id={s.tbmenu} >지역</td>
                                            <td>{props.vlist[idex].address}</td>
                                        </tr>                   
                                        <tr height="40%">
                                            <td id={s.tbmenu} >활동내용</td>
                                            <td colSpan={3}>{props.vlist[idex].contents}</td>
                                        </tr>
                                    </tbody>
                        </Table>
                 </div>
                 <div className={s.buttonblock}>
                    <button className={s.btn_apply}>신청하기</button>
                    <button className={s.btn_back} onClick={ () => navigate(-1)}>목록보기</button>
                </div>
            </div>
        </div>
    );
}

export default VolunteerDetail;