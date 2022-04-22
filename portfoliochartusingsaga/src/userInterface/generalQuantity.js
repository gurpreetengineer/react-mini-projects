import React, { useEffect } from "react";
import "./css/generalQuantity.css";
import at from "../assets/at.png";
import databases from "../assets/databases.png";
import dollar from "../assets/dollar.png";
import { connect } from "react-redux";
import { loadStocks } from "../actions/allActions";

function GeneralQuantity(props) {
  useEffect(() => {
    props.loadStocks();
  }, []);
  let stock = [];

  if (props.stocks !== undefined) {
    stock = props.stocks.map((data) => (
      <div className="main2" key={data.scrip}>
        <table>
          <tbody>
            <tr>
              <td>
                <img src={databases} alt="quantity" />
              </td>
              <td className="heading">Quantity</td>
              <td>{data.quantity}</td>
            </tr>
            <tr>
              <td>
                <img src={at} alt="@" />
              </td>
              <td className="heading">Avg. Cost</td>
              <td>{data.avgCost}</td>
            </tr>
            <tr>
              <td>
                <img src={dollar} alt="dollar Bill" />
              </td>
              <td className="heading">Invested&nbsp;Amt</td>
              <td>{data.investedAmount}</td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  }

  return <>{stock}</>;
}

const mapStateToProps = (state) => {
  return {
    stocks: state.stockData,
  };
};

const mapDispatchToProps = (dispatch) => ({
  loadStocks: () => dispatch(loadStocks()),
});

export default connect(mapStateToProps, mapDispatchToProps)(GeneralQuantity);
