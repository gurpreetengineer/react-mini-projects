import React from "react";

import BuySell from "./userInterface/buySell";
import Donut from "./userInterface/donut";
import GeneralQuantity from "./userInterface/generalQuantity";
import MarketValue from "./userInterface/marketValue";
import ShowPrice from "./userInterface/showPrice";
import UnrealizedPL from "./userInterface/unrealizedPL";

import "./App.css";

function App() {
  return (
    <React.StrictMode>
      {/* <FetchSuccessful /> */}
      <div className="parentFormat">
        <div>
          <span className="index">
            <span className="padding" style={{ padding: "0px" }}>
              <ShowPrice />
            </span>
            <span className="padding">
              <GeneralQuantity />
            </span>
            <span className="padding">
              <MarketValue />
            </span>
            <span className="padding">
              <UnrealizedPL />
            </span>
            <span className="padding">
              <BuySell />
            </span>
          </span>
        </div>
        <div style={{ width: "110%" }}>
          <span className="donut">
            <Donut />
          </span>
        </div>
      </div>
    </React.StrictMode>
  );
}

export default App;
