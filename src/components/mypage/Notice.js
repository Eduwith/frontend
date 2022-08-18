import React from "react";
import styles from "./Notice.module.css";
import {MdDelete ,MdArrowBackIos, MdArrowForwardIos} from "react-icons/md";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

function Notice(){
    // let nlist = [
    //     {
    //         date: "2022/02/24",
    //         title: "확률과 통계 멘토링 - 방금 새로운 멘티가 지원했어요.",
    //         notice_no: "1",
    //         field : "Mentoring"},
    //         {
    //             date: "2022/02/24",
    //             title: "스터디 - 방금 새로운 멘티가 지원했어요.",
    //             notice_no: "1",
    //             field : "Study"}]
    
    const baseUrl = "http://localhost:8080";
    const [nlist, setNlist] = useState([]);
    const getNlist = async () => {
        try {
            const response = await axios.get(baseUrl+ '/notice');
            setNlist(response.data); // 데이터는 response.data 안에
            console.log(response.data);
        } catch (e) {
            console.log(e);
        }
    };
    useEffect(() => {
        getNlist();
    }, []);

    const deleteNlist = async() => {

    }

    const navigate = useNavigate();
    const onClickNotice = (field) => {
        if(field == "Mentoring") return (navigate('/mentoring/mento') );
        if(field == "Study") return (navigate('/studies'));
        if(field == "Volunteer") return (navigate('/volunteers'));
    }

    return(
        <div className={styles.wrap}>
            <div className={styles.body}>
            <h3 className={styles.title}>알림</h3>
            <div className={styles.content}>
                    <div className={styles.nday}>
                        {nlist.map((note) =>
                        (
                            <div classname={styles.notes} key={note}>
                                <h3>{note.date}</h3>
                                <div className={styles.nbox} >
                                    <div className={styles.ntext} onClick={()=>onClickNotice(note.field)}>{note.title}</div>
                                    <div className={styles.deletebtn}><MdDelete color="#4673EA" size={50}/></div>
                                </div>
                                
                            </div>
                        ))}
                    </div>
            </div>
        </div>
        </div>
    );
}

export default Notice;