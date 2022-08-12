import axios from "axios";
import { useSearchParams } from "react-router-dom";
import mbti from "../common/result.json"

function TestResult() {

  let [searchParams, setSearchParams] = useSearchParams();

  const params = searchParams.get("res");
  const username = searchParams.get("name");

  let e = 0, s = 0, t = 0, j = 0;

  for (let c = 0; c <= params.length; c++) {
    if (params[c] === 'E')
      e++;
    else if (params[c] === 'S')
      s++;
    else if (params[c] === 'T')
      t++;
    else if (params[c] === 'J')
      j++;
  }

  let result = [e >= 2 ? 'E' : 'I',
  s >= 2 ? 'S' : 'N',
  t >= 2 ? 'T' : 'F',
  j >= 2 ? 'J' : 'P'
  ];

  let count;
  outer: for (count = 0; count < 16; count++) {
    for (let i = 0; i < 4; i++) {
      if (mbti[count].id[i] !== result[i]) {
        break;
      } else if (i === 3) {
        break outer;
      }
    }
  }
  
  const url = 'http://34.64.249.190:8080/';

  const sendMbti = () => {
    // axios.post(url + 'test',{
    //   name: username,
    //   result: mbti[count].id
    // })
    // .then((res) => {
    //   console.log('mbti 결과 전송 완료 ', res.data)
    // });
  }


  return (
    <div>
      <h3><span>{username}</span>님의 학습 유형은?</h3>
      <p>{mbti[count].id}</p>
      <img src={mbti[count].img} alt="결과 이미지" width="200px" height="200px" />
      <p>{mbti[count].nickname}</p>
      <ul >
        {mbti[count].description.map((item) => {
          return (
            <li key={item.des}>
              {item.des}
            </li>
          );
        })}
      </ul>
      
    </div>
  )

}

export default TestResult;