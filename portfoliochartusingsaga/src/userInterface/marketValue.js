import React, { useEffect } from "react";
import "./css/marketValue.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { connect } from "react-redux";
import { loadStocks } from "../actions/allActions";

function MarketValue(props) {
  useEffect(() => {
    props.loadStocks();
  }, []);
  let stock = [];
  if (props.stocks !== undefined) {
    stock = props.stocks.map((data) => (
      <div className="main3" key={data.scrip}>
        <div className="column">
          <span>Market&nbsp;Value</span>
          <span>${data.price * data.quantity}</span>
        </div>
        <div className="column">
          <span id="portfolioColor">%&nbsp;of&nbsp;Portfolio&nbsp;value</span>
          <span>{data.percentOfPortfolio}%</span>
        </div>
        <div>
          <div className="progress" style={{ height: "5px", marginTop: "2px" }}>
            <div
              className="progress-bar"
              style={{
                width: data.percentOfPortfolio + "%",
                // "width: $(data.percentOfortfolio) + '%'",
                height: "5px",
                backgroundColor: "green",
              }}
            ></div>
          </div>
        </div>
      </div>
    ));
  }
  return <>{stock} </>;
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stockData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadStocks: () => dispatch(loadStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(MarketValue);
