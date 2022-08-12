import axios from "axios";
import React, {useState} from "react";
import { useNavigate } from "react-router";
import styles from "./Join.module.css";

function Join() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("M");
  const [address, setAddress] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value)
  }
  const onEmailHandler = (event) => {
      setEmail(event.currentTarget.value)
  }

  const onPasswordHandler = (event) => {
      setPassword(event.currentTarget.value)
  }

  const onConfirmPasswordHandler = (event) => {
      setConfirmPassword(event.currentTarget.value)
  }

  const onAgeHandler = (event) => {
    setAge(event.currentTarget.value)
  }

  const onGenderHandler = (event) => {
    setGender(event.currentTarget.value)
  }

  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value)
  }

  const url = 'http://34.64.249.190:8080';

  const handleSubmit2 = async () => {
    try {
     axios.post(url +'/user/join', {
        email: email,
        name: name,
        pwd: password,
        age: age,
        gender: gender,
        address: address,
      }).then(function (response) {
        if(response){
           console.log('가입 성공!!!');
          navigate('/');
        }
        else
          console.log('정보 없음');
          
        console.log(response);
        console.log(response.data);
      });
      
    } catch (err) {
      console.log("Join Error >>", err);
    }
  };


  const handleSubmit = () => { // 정보 전송

    const url = "http://localhost:8080/user/join";

    const join_info = {
        email: email,
        name: name,
        pwd: password,
        age: age,
        gender: gender,
        address: address,
    };

    axios.post(url, {
      headers: {
        "Content-Type": "application/json"
      },
      data: join_info,
    })
    .then(response => {
      if(response.data.result === "SUCCESS"){
        alert('회원가입 성공!');
        navigate('/');
      }
      else{
        alert('회원가입 실패');
      }
    }).catch(error => {
      console.log("Join Error >>", error);
    });
  };

  const onSubmit = () => {
    console.log('버튼 클릭');
  }

  return (
    <div>
      <div className={styles.background}>
        &nbsp; <h1>eduwith</h1>
        <form onSubmit={handleSubmit2}>
            <div className={styles.box}>
              <h3>이름</h3><input name="name" type="text" placeholder="이름" value={name} onChange={onNameHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <h3>이메일</h3>
              <div className={styles.email}>
              <input name="email" type="email" placeholder="이메일" value={email} onChange={onEmailHandler} className={styles.input_join}/>
              <button>중복확인</button>
              </div>
            </div>
            <div className={styles.box}>
              <h3>비밀번호</h3>
              <input name="password" type="password" placeholder="비밀번호" value={password} onChange={onPasswordHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <h3>비밀번호 확인</h3>
              <input name="confirmPassword" type="password" placeholder="비밀번호 확인" value={confirmPassword} onChange={onConfirmPasswordHandler} className={styles.input_join}/>
            </div>
            <div className={styles.box}>
              <h3>성별</h3>
              <select onChange={onGenderHandler} value={gender} className={styles.input_join}>
                    <option value="M" >남자</option>
                    <option value="F">여자</option>
              </select>
            </div>
            <div className={styles.box}>
              <h3>나이</h3>
              <input name="age" type="number" placeholder="이름" value={age} onChange={onAgeHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <h3>주소</h3>
              <input name="address" type="text" placeholder="주소" value={address} onChange={onAddressHandler}className={styles.input_join} />
            </div>
            <div className={styles.box}>
              <button type="submit" onSubmit={handleSubmit2} className={styles.submitbtn}>가입하기</button>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Join;