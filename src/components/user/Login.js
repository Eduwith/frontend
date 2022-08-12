import React, { useState } from 'react';
import styles from "./Login.module.css"
import {MdClose} from "react-icons/md";
import {useNavigate} from "react-router-dom"
import axios from 'axios';
import setAuthorizationToken from './setAuthorizationToken';
import { useCookies } from 'react-cookie';


const Login = ( props ) => {
  const navigate = useNavigate();
    const [cookies, setCookie] = useCookies(['id']);
    const { open, close } = props;
    const [email, setEmail] = useState("");
    const [pw, setPw] = useState("");

    const onEmailHandler = (event) => { // id 저장
      console.log(event.currentTarget.value)
      setEmail(event.currentTarget.value)
    }

    const onPwHandler = (event) => { // pw 저장
      console.log(event.currentTarget.value)
      setPw(event.currentTarget.value)
    }

    const url = 'http://34.64.249.190:8080/';

    const login = (e) => {
      e.preventDefault();
      axios.post(url + 'user/login',{
        email: email,
        pwd: pw
      })
      .then((res) => {
        const token = res.data.accessToken;
        localStorage.setItem('jwtToken', token)
        setAuthorizationToken(token);
      });
    }

    return (
        <div>
          {open ? (
            <div> 
            <div className={styles.back} ></div>
            <form className={styles.loginbox} onSubmit={login}>
                <div className={styles.logo}>eduwith</div>
                <div className={styles.text}>로그인</div>
                <MdClose size={50} color="#5D6466" className={styles.icon} onClick={close} />
                <input
                    className={styles.id}
                    type="text" placeholder='이메일 주소'
                    value={email}
                    onChange={onEmailHandler}
                />
                <input
                    className={styles.pw}
                    type="password" placeholder="비밀번호"
                    value={pw}
                    onChange={onPwHandler}
                />
                <div className={styles.findpw}>비밀번호를 잊어버리셨나요?</div>
                <div className={styles.sign}>회원가입</div>
                <button className={styles.lbtn} type="submit">
                    LOGIN
                </button>
            </form>
            </div>
          ) : null}
        </div>
    );
}

export default Login;