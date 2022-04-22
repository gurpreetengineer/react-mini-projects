import React, { useEffect } from "react";
import "./css/buySell.css";
import { connect } from "react-redux";
import { loadStocks } from "../actions/allActions";

function BuySell(props) {
  useEffect(() => {
    props.loadStocks();
  }, []);
  let stock = [];

  if (props.stocks !== undefined) {
    stock = props.stocks.map((data) => (
      <div className="main5" key={data.scrip}>
        <div className="buttonFormat">BUY</div>
        <div className="buttonFormat">SELL</div>
      </div>
    ));
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

export default connect(mapStateToProps, mapDispatchToProps)(BuySell);
