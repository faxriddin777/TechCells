import React from "react";
import Check from "../assete/check.svg";

const ClockOut = () => {
  return (
    <div className="clocked component">
      <div className="clockIn">
        <h2>See you, Abrorbek!</h2>
        <p>
          <img src={Check} alt="check" /> You have clocked out successfully
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <h2>
          Worked time:{" "}
          <i>
            {Math.round((Date.now() - localStorage.getItem("time")) / 60000)}{" "}
            minutes
          </i>
        </h2>
      </div>
    </div>
  );
};

export default ClockOut;
