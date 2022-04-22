import React, { useEffect } from "react";
import "./css/buySell.css";
import { connect } from "react-redux";
import { fetchStocks } from "../actions/postActions";

function BuySell(props) {
  useEffect(() => {
    props.fetchStocks();
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
    stocks: state.stocksData,
  };
};

export default connect(mapStateToProps, { fetchStocks })(BuySell);
