import React, {useState, useEffect} from "react";
import Navbar from "../components/home/Navbar";
import styles from "./Home.module.css";
import fox from '../images/fox.png';
import customAxios from '../customAxios';
import Home_Volunteer from "../components/home/Home_Volunteer";

function Home() {

   // IP주소 변수 선언
   const [ip, setIp] = useState('');

   // IP주소 값을 설정합니다.
   function callback(data) {
     setIp(data);
   }
 
   // 첫번째 렌더링을 다 마친 후 실행합니다.
   useEffect(
     () => {
       // 클라이언트의 IP주소를 알아내는 백엔드의 함수를 호출합니다.
       customAxios('/ip', callback);
     }, []
   );

  return (
    <div>
      <Navbar />
      <div className={styles.container}>
        <img className={styles.imgFox} src={fox} alt="여우" />
        <Home_Volunteer/>
      </div>
      <h1>IP 주소는 {ip}입니다.</h1>
    </div>
  );
}

export default Home;