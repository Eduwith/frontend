import React, { useEffect, useState } from "react";
import data from "../common/data.json"
import { useNavigate, useSearchParams } from "react-router-dom";

function TestQna() {

  const navigate = useNavigate();
  let [searchParams, setSearchParams] = useSearchParams();
  const [num, setNum] = useState(searchParams.get("res")?.length ?? 0);
  const [mbti, setMbti] = useState([]);

  useEffect(() => {
    const len = searchParams.get("res")?.length ?? 0
    setMbti(searchParams.get("res")?.split('') ?? []);
    if (len < 12)
      setNum(searchParams.get("res")?.length ?? 0);
    else {
      navigate("/result?" + searchParams.toString());
    }
  }, [searchParams])

  const nextSlide = (i) => {
    const a = [...mbti, data[num].answers[i].type]
    setMbti(a);
    searchParams.set("res", a.join(''))
    setSearchParams(searchParams)
  };

  return (
    <div className="question">
      <h1>Q{data[num].id}</h1>
      <p><span>{data[num].question}</span></p>
      <button onClick={() => nextSlide(0)}>
        <span>{data[num].answers[0].content}</span>
      </button>
      <button onClick={() => nextSlide(1)}>
        <span>{data[num].answers[1].content}</span>
      </button>
    </div>
  )

}

export default TestQna;