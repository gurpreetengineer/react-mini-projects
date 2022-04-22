import React, { useState, useEffect, Fragment } from "react";
import "./customUI/ShowToppers.css";
import DisplayList from "./DisplayList";

function ShowToppers({ studentsList, classname, classArray }) {
  const [finalToppersListByClass, setFinalToppersListByClass] = useState([]);
  const [doesClassExists, setDoesClassExists] = useState(null);

  const getResultOfClass = (classname) => {
    studentsList.sort((a, b) => b.totalMarks - a.totalMarks);

    studentsList.map((singleStudent) => {
      if (singleStudent.studentInfo.class === classname) {
        setFinalToppersListByClass((prevFinalToppersListByClass) => [
          ...prevFinalToppersListByClass,
          singleStudent,
        ]);
      }
      return finalToppersListByClass;
    });

    return finalToppersListByClass;
  };

  useEffect(() => {
    setFinalToppersListByClass([]);
    getResultOfClass(classname);
    setDoesClassExists(classArray.includes(classname.toString()));
  }, [classname]);

  return (
    <Fragment>
      <div className="showtoppers">
        {doesClassExists ? (
          finalToppersListByClass.map((topper, index) => (
            <DisplayList
              key={index}
              position={index + 1}
              name={`${topper.studentInfo.name.first} ${topper.studentInfo.name.last}`}
              marks={topper.totalMarks}
              subjects={topper.studentInfo.marks}
            />
          ))
        ) : (
          <div className="showtoppers__invalid"> Invalid Class Name</div>
        )}
      </div>
    </Fragment>
  );
}

export default ShowToppers;
