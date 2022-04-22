import React, { Fragment, useState, useEffect } from 'react';

import './MainPage.css';
import LeftContainer from './LeftContainer';
import RightContainer from './RightContainer';
import {
  teacher_db,
  student_db,
  subject_db,
  designation_db,
} from './db_design';

const findTeacherUsingId = (teachers, generalId) => {
  return teachers.find((teacher) => {
    return generalId === teacher.id;
  });
}

const MainPage = () => {
  const [teachers, setTeacher] = useState(teacher_db);
  const [students, setStudents] = useState([]);

  const studentsSetup = () => {
    const newStudents = student_db.map((student) => {
      let teacher = findTeacherUsingId(teachers, student.teacherId)
      
      let newTeacher = '';
      if (teacher && teacher.isPresent) {
        newTeacher = teacher.name;
      } else {
        let subjectHodId = subject_db.find((subject) => {
          return subject.id === student.subject;
        }).hod;

        let hodTeacher = findTeacherUsingId(teachers, subjectHodId)
        
        if (hodTeacher && hodTeacher.isPresent) {
          newTeacher = hodTeacher.name;
        } else {

          let viceTeacher = findTeacherUsingId(teachers, 2)
          if(viceTeacher && viceTeacher.isPresent){

            newTeacher = viceTeacher.name
          }else{

            let headTeacher = findTeacherUsingId(teachers,1);
            if(headTeacher && headTeacher.isPresent){
              newTeacher = headTeacher.name
            }else{
              newTeacher = 'Not Assigned';
            }
          }
          
         
        }
      }
      student.teacher = newTeacher;
      return student;
    });
    setStudents(newStudents);
  };

  useEffect(() => {
    studentsSetup();
  }, [teachers]);

  const setAvailTeacher = (update) => {
    const newTeachers = teachers.map((teacher) => {
      if (teacher.id === update.id) {
        return update;
      }
      return teacher;
    });

    return setTeacher(newTeachers);
  };

  return (
    <Fragment>
      <div className="MP__main_container">
        <div className="MP__left_container">
          <LeftContainer
            teachers={teachers}
            setAvailTeacher={setAvailTeacher}
          />
        </div>
        <div className="MP__right_container">
          <RightContainer students={students} />
        </div>
      </div>
    </Fragment>
  );
};

export default MainPage;
