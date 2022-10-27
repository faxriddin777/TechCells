import { useEffect } from "react";
import Check from "../assete/check.svg";

const Clocked = () => {
  useEffect(() => {
    const time =
      new Date(Date.now()).getHours() + ":" + new Date(Date.now()).getMinutes();
    if (localStorage.getItem("startedTime") === null) {
      localStorage.setItem("startedTime", time);
      localStorage.setItem("time", Date.now());
    }
  }, []);

  const clockedOut = () => {
    localStorage.removeItem("startedTime");
    window.location.href = "/clocked-out";
  };

  return (
    <div className="clocked component">
      <div className="clockIn">
        <h2>Hello, Abrorbek!</h2>
        <p>
          <img src={Check} alt="check" /> You have clocked in successfully
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", width: 400}}>
        <h2>Started time: </h2>
        <h2>{localStorage.getItem("startedTime")}</h2>
      </div>
      <button className="ClockedBtn" onClick={clockedOut}>Clock out</button>
    </div>
  );
};

export default Clocked;
