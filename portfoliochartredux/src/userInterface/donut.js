import React, { useEffect } from "react";
import "./css/donut.css";
import { connect } from "react-redux";
import { fetchStocks } from "../actions/postActions";

function Donut(props) {
  useEffect(() => {
    props.fetchStocks();
  }, []);
  let stock = [];
  let mutualFund = [],
    etfs = [];
  let i = 0,
    totalOfMutualFunds = 0,
    totalOfEtfs = 0;

  if (props.stocks !== undefined) {
    stock = props.stocks.map((data) => {
      if (i < 3) {
        mutualFund.push(data.percentOfPortfolio);
        i = i + 1;
      } else {
        etfs.push(data.percentOfPortfolio);
      }
    });
  }
  totalOfMutualFunds = mutualFund.reduce(function (a, b) {
    return a + b;
  }, 0);
  totalOfEtfs = etfs.reduce(function (a, b) {
    return a + b;
  }, 0);

  console.log("Mutual funds", totalOfMutualFunds);

  return (
    <div className="overAll">
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
              strokeDasharray={totalOfMutualFunds
                .toString()
                .concat(" ", totalOfEtfs)}
              strokeDashoffset="25"
            ></circle>
          </svg>
        </span>
        <span className="headings">
          <div>
            <span>
              <svg width="6" height="6">
                <rect
                  width="6"
                  height="6"
                  style={{
                    fill: "#dba315",
                    strokeWidth: 3,
                  }}
                />
                Sorry, your browser does not support inline SVG.
              </svg>
              &nbsp;
              <span>Mutual&nbsp;Funds</span>
            </span>
          </div>
          <span>
            <svg width="6" height="6">
              <rect
                width="6"
                height="6"
                style={{
                  fill: "#3acfe3",
                  strokeWidth: 3,
                }}
              />
              Sorry, your browser does not support inline SVG.
            </svg>
          </span>
          &nbsp;
          <span>ETFs</span>
        </span>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stocksData,
  };
};

export default connect(mapStateToProps, { fetchStocks })(Donut);
