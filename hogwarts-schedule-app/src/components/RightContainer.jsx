import React, { Fragment, useEffect } from 'react';
import { subject_db } from './db_design';

const RightContainer = ({ students }) => {
  return (
    <Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>Student Subject</th>
              <th>Set Teacher Availability</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student.name}>
                <td>{student.name}</td>
                <td>
                  {
                    subject_db.find((sub) => 
                      student.subject === sub.id
                    ).name
                  }
                </td>
                <td>{student.teacher}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

export default RightContainer;
