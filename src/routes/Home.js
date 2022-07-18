import React, {useState, useEffect} from "react";
import styles from "./Home.module.css";
import Home_Study from "../components/home/Home_Study";
import Mento from "../components/mentoring/Mento";
import Home_Banner from "../components/home/Home_Banner";

function Home() {
  return (
      <Home_Banner/>
      <Mento />
      <Home_Study/>
  );
}

export default Home;