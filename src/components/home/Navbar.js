import React, {useState } from "react";
import styles from "./Navbar.module.css";
import {NavLink, Link} from 'react-router-dom';
import logo from '../../images/logo.jpg';
import Login from "../user/Login";
import point from '../../images/point.png';
import bell from '../../images/bell.png';
import msg from '../../images/msg.png';

function Navbar({isLogin}) {

  const activeStyle = {
    textDecoration: 'none',
    borderBottom: '4px solid #4673EA',
    paddingBottom: '13px',
    fontWeight: 600,
    color:'#4673EA',
  };
  const [loginOpen, setLoginOpen] = useState(false);

  const openLogin = () => {
    setLoginOpen(true);
  };

  const closeLogin = () => {
    setLoginOpen(false);
  }
  
  return (
    <div>
    <nav className={styles.navbar}>
        <div className={styles.logo}>
          <Link to="/main" style={{textDecoration: 'none'}}>
            <img className={styles.logo} src={logo} alt="로고" />
          </Link>
        </div>
        <ul className={styles.navLinks}>
          <li className={styles.navItem} style={{textDecoration: 'none', color: 'gray'}} onClick={openLogin} >
            {isLogin? '로그아웃' : '로그인'}
          </li>

          <li className={styles.navItem}>
            <Link to="/join" style={{textDecoration: 'none', color: 'gray'}} >회원가입</Link>
          </li>

          <li  className={styles.navItem}>
            <Link to="/mypage" style={{textDecoration: 'none', color: 'gray'}} >마이페이지</Link>
          </li>
        </ul>
    </nav>
    <nav className={styles.subvar}>
      <ul className={styles.subLinks}>
        <li className={styles.dropdown}>
          <NavLink to="/mentoring/mento" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.mlink}> 멘토링</NavLink>
          <div className={styles.dropdown_content}>
            <Link to="/mentoring/mento" >멘토 찾기</Link>
            <Link to="/mentoring/menti" >멘티 찾기</Link>
          </div>
        </li>
        <li><NavLink to="/volunteer" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}> 자원봉사</NavLink></li>
        <li><NavLink to="/guide" style={({ isActive }) => isActive ? activeStyle : undefined } className={styles.link}>이용안내</NavLink></li>
      </ul>

      <ul className={styles.nav_icons_ul}>
        <li><Link to="/mypoint"><img alt="point" src={point} className={styles.nav_icons} /></Link></li>
        <li><Link to="/mypoint"><img alt="point" src={msg} className={styles.nav_icons} /></Link></li>
        <li><Link to="/mypoint"><img alt="point" src={bell} className={styles.nav_icons} /></Link></li>
      </ul>
    </nav>
    <Login open={loginOpen} close={closeLogin} />
  </div>

  );
}

export default Navbar;