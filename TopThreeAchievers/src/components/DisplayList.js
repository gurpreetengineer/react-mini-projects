import React from "react";
import "./customUI/DisplayList.css";

function DisplayList({ position, name, marks, subjects }) {
  const thirtyPercent = 50 * 0.33;
  return (
    <div className="displayList">
      <strong>{name}</strong> obtained <strong>{marks}</strong> [
      {subjects.map((sub, index) => (
        <span key={index}>
          {sub.subject}{" "}
          {sub.marks > thirtyPercent ? (
            <span className="displayList__pass">Pass </span>
          ) : (
            <span className="displayList__fail">Fail </span>
          )}
        </span>
      ))}
      ] got{" "}
      {position === 1 ? (
        <span className="displayList__firstPosition displayList__position">
          1st
        </span>
      ) : position === 2 ? (
        <span className="displayList__secondPosition displayList__position">
          2nd
        </span>
      ) : (
        <span className="displayList__thirdPosition displayList__position">
          3rd
        </span>
      )}{" "}
      Position.
    </div>
  );
}

export default DisplayList;
