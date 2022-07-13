import Navbar from "../components/Navbar";
import styles from "./Mypage.module.css";
import myimg from "../images/myimg.png"
import {NavLink} from "react-router-dom";
import Table from "react-bootstrap/Table";

function Mypage() {
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
                            <li><NavLink to="/Mypage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
                            <li><NavLink to="/Mymento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 정보</NavLink></li>
                            <li><NavLink to="/Myvolunteer" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>자원봉사 내역</NavLink></li>
                            <li><NavLink to="/Myaccount" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>계정정보 수정</NavLink></li>
                            <li><NavLink to="/Myscrap"style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
                        </ul>
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles.mymenu}>프로필 수정 </h2><hr/>
                        <div>
                                <Table striped bordered hover
                                background- color="white">
                                    <tbody>
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
                                            <td className={styles.tbmenu}>name</td>
                                            <td>
                                            <input type="text" placeholder="name"
                                            />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>age</td>
                                            <td>
                                                <input type="text" placeholder="age"

                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>nationality</td>
                                            <td>
                                                <input type="text" placeholder="Korea"
                                                />
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className={styles.tbmenu}>gender</td>
                                            <td>
                                                <input type="text" placeholder="gender"
                                                />
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                                <div className={styles.editbtn}>
                                    <button className={styles.editbtn1}>edit</button> 
                                    <button className={styles.editbtn2}>again</button> 
                                </div>
                                
                        </div>
                    </div>
                    
                </div>
                </div>
                
            </div>
        </div>
    );
}

export default Mypage;