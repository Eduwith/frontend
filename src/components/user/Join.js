import React, {useState} from "react";
import Navbar from "../home/Navbar";
import styles from "./Join.module.css";

function Join() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState(0);
  const [gender, setGender] = useState("남자");
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

  const onSubmit = (event) => {
    
    if(password !== confirmPassword) {
      return alert('비밀번호와 비밀번호확인은 같아야 합니다.');
    }
    event.preventDefault()
  }

  const handleSubmit = () => { // 정보 전송
    //event.preventDefault(); // 클릭해도 페이지 이동되지 않음

    const join_info = {
      method: "POST",
      body: JSON.stringify({
        email: email,
        name: name,
        password: password,
        age: age,
        gender: gender,
        address: address,

      })
    }
    fetch("http://localhost:8080/user/join", join_info)
    .then(response =>  response.json())
    .then(response => {
      console.log(response);
    });
  };

  return (
    <div>
      <Navbar />
      <div className={styles.background}>
        &nbsp; <h1>eduwith</h1>
        <form onSubmit={handleSubmit}>
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
                    <option value="남자" >남자</option>
                    <option value="여자">여자</option>
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
              <button type="submit" onSubmit={onSubmit} className={styles.submitbtn}>가입하기</button>
            </div>
        </form>
    </div>
    </div>
  );
}

export default Join;