import React, { useEffect } from "react";
import axios from "axios";
import './Showdata.css';

const Showdata = () => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const result = await axios.get("/Users").catch((err) => {
      console.log(err);
    });
    setData(result.data)
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <table>
        <thead>
          <th>First name</th>
          <th>Last name</th>
          <th>email</th>

        </thead>
        <tbody>
          {
            data.map(i => {
              return <tr key={i}>
                <td>{i.firstName}</td>
                <td>{i.lastName}</td>
                <td>{i.email}</td>
              </tr>
            })
          }
        </tbody>
      </table>
    </>
  );
};

export default Showdata;
