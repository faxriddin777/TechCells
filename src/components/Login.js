import React, { useRef } from "react";
import axios from "axios";
import SubmitImg from "../assete/submit.svg";
const SimpleBtn = React.lazy(() => import("./SimpleBtn"));

const Login = () => {
  const inputRef = useRef(null);
  const symbols = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const output = (symbol) => {
    if (inputRef.current.value.length <= 3) {
      inputRef.current.value = inputRef.current.value + symbol;
    }
  };

  const backSpace = () => {
    if (inputRef.current.value.length > 0) {
      inputRef.current.value = inputRef.current.value.slice(
        0,
        inputRef.current.value.length - 1
      );
    }
  };

  const handleSubmit = async () => {
    if (inputRef.current.value === "1234") {
      window.location.href = "/clocked";
    } else {
      alert("Wrong pin");
    }

    const data = {
      pin: inputRef.current.value,
    };
    const res = await axios.post("http://localhost:5000/login", data);

    if (res.data === "success") {
      window.location.href = "/clocked";
    } else {
      alert("Wrong pin");
    }
  };

  return (
    <div className="login component">
      <div className="clockIn">
        <h2>Enter your PIN</h2>
        <input
          type="password"
          className="hisob"
          maxLength={4}
          size={4}
          value={inputRef.current ? inputRef.current.value : ""}
          ref={inputRef}
          disabled
        />

        <div className="grid">
          {symbols.map((element) => (
            <SimpleBtn symbol={element} key={element} output={output} />
          ))}
          <div onClick={backSpace}>⬅</div>
          <SimpleBtn symbol="0" output={output} />
          <div onClick={handleSubmit}>
            <img src={SubmitImg} alt="Submit" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
