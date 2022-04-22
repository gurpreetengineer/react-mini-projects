import React, { Fragment } from 'react';


const LeftContainer = (props) => {
  const { setAvailTeacher,teachers } = props;

  return (
    <Fragment>
      <div>
        <table>
          <thead>
            <tr>
              <th>Teacher id</th>
              <th>Teacher Name</th>
              <th>Set Teacher Availability</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((aTeacher) => (
              <tr key={aTeacher.id}>
                <td>{aTeacher.id}</td>
                <td>{aTeacher.name}</td>
                <td>
                    <DropDownMenu availbilty={aTeacher} setAvailTeacher={setAvailTeacher} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Fragment>
  );
};

const DropDownMenu = ({ availbilty, setAvailTeacher }) => {
  const onChange = (e) => {
    e.preventDefault();
    let avail = availbilty
    avail.isPresent = JSON.parse(e.target.value)

    setAvailTeacher(avail);
  };
  return (
    <Fragment>
      <div>
        <select name="availability" value={availbilty.isPresent} id="availability" onChange={onChange}>
          <option value={true}>Present</option>
          <option value={false}>Absent</option>
        </select>
      </div>
    </Fragment>
  );
};

export default LeftContainer;
