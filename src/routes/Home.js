import React from "react";
import styles from "./Home.module.css";
import fox from '../images/fox.png';
import Home_Study from "../components/home/Home_Study";
import Mento from "../components/mentoring/Mento";

function Home() {
  return (
    <div>
      <div className={styles.ctn}>
        <img className={styles.imgFox} src={fox} alt="여우" />
      </div>
      <Mento />
      <Home_Study/>
    </div>
  );
}

export default Home;