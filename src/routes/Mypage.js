import Navbar from "../components/home/Navbar";
import styles from "./MyPage.module.css";
import myimg from "../images/myimg.png"
import {NavLink} from "react-router-dom";
import Table from "react-bootstrap/Table";

function MyPage() {
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
            <Navbar/>
            <div className={styles.head}>마이페이지</div>
            <div className={styles.body}>
                <div className={styles.box}>
                    <div className={styles.mybox}>
                    <div className={styles.left}>
                        <img src={myimg} alt="myimg" className={styles.myimg}/>
                        <h2 className={styles.name}>Tom </h2>
                        <ul className={styles.nav}>
                            <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                            <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
                            <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
                            <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
                            <li><NavLink to="/MyScrap"style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                            <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.mymenu}>프로필 수정 </h2><hr/>
                        <div>
                                <Table>
                                    <tbody className="align-middle">
                                        <tr>
                                            <td className={styles.tbmenu} >프로필 이미지</td>
                                            <td>
                                                <div>
                                                    <img src={myimg} alt="myimg" className={styles.profileimg}/>
                                                    <button  className={styles.imgbtn}>사진변경</button>
                                                    <button  className={styles.imgbtn}>삭제</button>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>이메일</td>
                                            <td>
                                            <input className={styles.userinfor} type="email" placeholder="이메일" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>비밀번호</td>
                                            <td>
                                            <input className={styles.userinfor} type="password" placeholder="비밀번호" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>비밀번호 변경</td>
                                            <td>
                                            <input className={styles.userinfor} type="password" placeholder="비밀번호" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>이름</td>
                                            <td>
                                            <input className={styles.userinfor} type="text" placeholder="이름" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>나이</td>
                                            <td>
                                                <input className={styles.userinfor} type="number" placeholder="나이" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>주소</td>
                                            <td>
                                                <input className={styles.userinfor} type="text" placeholder="주소" />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>성별</td>
                                            <td>
                                            <select >
                                                <option value="M" >남자</option>
                                                <option value="F">여자</option>
                                            </select>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className={styles.btnbox}>
                                    <button className={styles.editbtn}>수정하기</button> 
                                    <button className={styles.quitbtn}>탈퇴하기</button> 
                                </div>
                                
                        </div>
                    </div>
                    
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default MyPage;