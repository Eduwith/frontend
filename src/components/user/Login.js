import React, { useState } from 'react';
import styles from "./Login.module.css"
import {MdClose} from "react-icons/md";
import {useNavigate} from "react-router-dom"


const Login = ( props ) => {
  const navigate = useNavigate();
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

    const handleSubmit = () => { // 정보 전송
      //event.preventDefault(); // 클릭해도 페이지 이동되지 않음

      const login_info = {
        method: "POST",
        body: JSON.stringify({
          email: email,
          pwd: pw
        }),
        headers: {
          "Content-Type": "application/json"
        }
      }
      fetch("http://localhost:8080/user/login", login_info)
      .then(response =>  response.json())
      .then(result => {
        console.log(result);
        if(result.token) {
          //localStorage.setItem('token', result.token);
          alert('환영합니다!');
          navigate('/');
        } else if(result.message === 'INVALID_USER'){
          alert('ID와 PW를 확인해주세요.');
        }
      });
    };

    return (
        <div>
          {open ? (
            <div> 
            <div className={styles.back} ></div>
            <form className={styles.loginbox} onSubmit={handleSubmit}>
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
                <button className={styles.lbtn} type="submit" onClick={handleSubmit}>
                    LOGIN
                </button>
            </form>
            </div>
          ) : null}
        </div>
    );
}

export default Login;