import Navbar from "../home/Navbar";
import styles from "./MyMento/MyMento.module.css";
import myimg from "../../images/myimg.png";
import peopleicon from "../../images/people.png";
import {NavLink} from "react-router-dom";

function MyStudy() {
    const activeStyle={
        color: 'blue',
        textDecoration: "none"
    };
    const unactiveStyle={
        color: 'black',
        textDecoration: "none"
    };

    return(
        <div className={styles.wrap}>
            <div className={styles.head}>마이페이지</div>
            <ul className={styles.nav}>
                        <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                            <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
                            <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
                            <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
                            <li><NavLink to="/MyScrap"style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                            <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
                        </ul>
            <div className={styles.body}>
                <div className={styles.title}>내가 모집한 스터디</div>
                <div className={styles.top}>
                    <div>우리말 문법 스터디</div>
                    <div>모집마감기한 2022.07.12</div>
                    <div className={styles.boxtag}>
                        <div className={styles.tag}>#한글</div>
                        <div className={styles.tag}>#다문화</div>
                        <div className={styles.tag}>#문법</div>
                    </div>
                    <div>
                        <img src={peopleicon} className={styles.peopleicon} />
                        0 / 5
                    </div>
                    <button className={styles.btn_edit} >수정하기</button>
                </div>

                <div>
                    <div>
                        ㅇㅇㅇ님이 스터디를 신청하였습니다.
                        <div>상세보기 {">"}</div>
                        <div>수락</div>
                        <div>거절</div>
                    </div>
                    <div>
                        ㅇㅇㅇ님이 스터디를 신청하였습니다.
                        <div>상세보기 {">"}</div>
                        <div>수락</div>
                        <div>거절</div>
                    </div>
                </div>
            </div>

            <div>

            </div>
        </div>
    );
}

export default MyStudy;