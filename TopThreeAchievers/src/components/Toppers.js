import React, { useState, useEffect } from "react";
import "./customUI/Toppers.css";
import studentsData from "../assets/students.json";

function Toppers({ setStudentsList }) {
  const [thirtyPercent] = useState(50 * 0.33);

  function bestThreeStudents() {
    for (let i = 0; i < studentsData.length; i++) {
      let sum = 0;
      studentsData[i].marks.map((subjectMarks) => {
        if (subjectMarks.marks > thirtyPercent) {
          sum += subjectMarks.marks;
        }
      });
      setStudentsList((prevStudentsList) => [
        ...prevStudentsList,
        {
          totalMarks: sum,
          studentInfo: studentsData[i],
        },
      ]);
    }
  }
  useEffect(() => {
    bestThreeStudents();
  }, []);

  return <div className="toppers">List of Toppers</div>;
}

export default Toppers;
