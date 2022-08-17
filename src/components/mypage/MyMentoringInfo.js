function MyMentoringInfo() {
  return (
    <div className={styles.wrap}>
      <div className={styles.head}>MY PAGE</div>
      <div className={styles.body}>
        <div className={styles.box}>
          <div className={styles.left}>
            <ul className={styles.nav}>
              <li><NavLink to="/MyPage" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>프로필 수정</NavLink></li>
              <li><NavLink to="/MyMentoApply" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 신청</NavLink></li>
              <li><NavLink to="/MyMento" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>멘토링 내역</NavLink></li>
              <li><NavLink to="/MyStudy" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스터디 관리</NavLink></li>
              <li><NavLink to="/MyScrap" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>스크랩 내역</NavLink></li>
              <li><NavLink to="/MyPoint" style={({ isActive }) => (isActive ? activeStyle : unactiveStyle)}>포인트 관리</NavLink></li>
            </ul>
          </div>
          <div className={styles.right}>
            <div className={styles.menu}>
              <span className={styles.submenu} onClick={onClickMentor}>멘토</span> <span className={styles.bar}> </span> <span className={styles.submenu} onClick={onClickMentee}>멘티</span>
            </div>
            <h2 className={styles.mymenu}>멘토링 내역 </h2>
            <div>
           
            </div>

          

          </div>
        </div>

      </div>
    </div>
  );
}

export default MyMentoringInfo;