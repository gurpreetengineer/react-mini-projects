import React from "react";
import "./css/donut.css";

function Donut() {
  return (
    <div>
      <div className="portfolio">Portfolio</div>
      <div className="donutParent">
        <span className="innerDonut">
          <svg width="100%" height="100%" viewBox="0 0 42 42" className="donut">
            <circle
              className="donut-hole"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="#fff"
            ></circle>
            <circle
              className="donut-ring"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#3acfe3"
              strokeWidth="5"
            ></circle>

            <circle
              className="donut-segment"
              cx="21"
              cy="21"
              r="15.91549430918954"
              fill="transparent"
              stroke="#dba315"
              strokeWidth="5"
              strokeDasharray="60 40"
              strokeDashoffset="25"
            ></circle>
          </svg>
        </span>
        <span className="headings">
          <div>Mutual&nbsp;Funds</div>
          <div>ETFs</div>
        </span>
      </div>
    </div>
  );
}

export default Donut;
