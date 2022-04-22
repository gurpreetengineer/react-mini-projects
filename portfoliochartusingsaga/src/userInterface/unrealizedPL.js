import React, { useEffect } from "react";
import "./css/unrealizedPL.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrowUpGreen from "../assets/greenUpArrow.png";
import arrowDownRed from "../assets/redArrowDown.png";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loadStocks } from "../actions/allActions";

function UnrealizedPL(props) {
  useEffect(() => {
    props.loadStocks();
  }, []);
  let stock = [];
  let arrow;
  let bar;
  let percentReturn;
  if (props.stocks !== undefined) {
    stock = props.stocks.map(
      (data) => (
        (arrow =
          data.percentReturn > 0 ? (
            <span>
              <img src={arrowUpGreen} alt="arrowUpGreen" />
            </span>
          ) : data.percentReturn === 0 ? (
            <span></span>
          ) : (
            <span>
              <img src={arrowDownRed} alt="arrowDownRed" />
            </span>
          )),
        (bar =
          data.percentReturn > 0 ? (
            <div className="prog">
              <div>
                <div
                  className="progress"
                  style={{
                    direction: "rtl",
                    borderRadius: "0px",
                    height: "5px",
                    marginTop: "2px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "0%",
                      height: "5px",
                      backgroundColor: "red",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div
                  className="progress"
                  style={{
                    borderRadius: "0px",
                    height: "5px",
                    marginTop: "2px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: data.percentReturn + "%",
                      height: "5px",
                      backgroundColor: "green",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="prog">
              <div>
                <div
                  className="progress"
                  style={{
                    direction: "rtl",
                    borderRadius: "0px",
                    height: "5px",
                    marginTop: "2px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: data.percentReturn.toString().split("-")[1] + "%",
                      height: "5px",
                      backgroundColor: "red",
                    }}
                  ></div>
                </div>
              </div>
              <div>
                <div
                  className="progress"
                  style={{
                    borderRadius: "0px",
                    height: "5px",
                    marginTop: "2px",
                  }}
                >
                  <div
                    className="progress-bar"
                    style={{
                      width: "0%",
                      height: "5px",
                      backgroundColor: "green",
                    }}
                  ></div>
                </div>
              </div>
            </div>
          )),
        (
          <div className="main4" key={stock.scrip}>
            <div className="column">
              <span>Unrealized&nbsp;P/L</span>
              <span>{data.unrealizedPandL}</span>
            </div>
            <div className="column">
              <span id="portfolioColor">%&nbsp;Return</span>

              <span>
                {arrow}
                {
                  (percentReturn =
                    data.percentReturn >= 0
                      ? data.percentReturn
                      : data.percentReturn.toString().split("-")[1])
                }
              </span>
            </div>
            {bar}
          </div>
        )
      )
    );
  }

  return <> {stock} </>;
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stockData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadStocks: () => dispatch(loadStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(UnrealizedPL);
