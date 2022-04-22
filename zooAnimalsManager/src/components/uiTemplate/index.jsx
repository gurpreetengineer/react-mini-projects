import React, { useState, useEffect, Fragment } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import '../style/index.css';
import functions from '../logic';

const MainPage = () => {
  const [inaugurationStatus, setInaugurationStatus] = useState('');
  const [zooAnimalList, setZooAnimalList] = useState(null);
  const [value, setValue] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setValue(new Date()), 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  const handleSubmit = () => {
    setInaugurationStatus('Loading ...');
    setZooAnimalList(() => functions.animalObjectBuilder());
    setInaugurationStatus('');
  };

  console.log('value', value);
  return (
    <div>
      <div className='center'>
        <Clock value={value} />
      </div>
      <div> Do you want to inaugurate the zoo ?</div>
      {inaugurationStatus}
      <input type="submit" onClick={handleSubmit} value="Begin inauguration" />
      {zooAnimalList && (
        <Fragment>
          <input
            type="button"
            onClick={() =>
              setZooAnimalList(functions.handleFeed(zooAnimalList))
            }
            value="Feed Animals"
          />
          <input
            type="button"
            onClick={() => {
              setZooAnimalList(functions.handleHourPush(zooAnimalList));
            }}
            value="Forced Hour Passer"
          />
        </Fragment>
      )}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Animal Type</th>
            <th>Alive Status</th>
            <th>Maximum Health</th>
            <th>Minimum Health</th>
            <th>Hours Passed without feed</th>
          </tr>
        </thead>
        <tbody>
          {zooAnimalList?.map((zooAnimal, index) => (
            <tr key={index}>
              <th>{index + 1}</th>
              <td>{zooAnimal.typeOfAnimal}</td>
              <td>
                {zooAnimal.isDead ? (
                  <b style={{ color: 'red' }}>Dead</b>
                ) : (
                  'Alive'
                )}
              </td>
              <td>{zooAnimal.maxHealth}</td>
              <td>{zooAnimal.minHealth}</td>
              <td>{zooAnimal.hoursPassedWithoutFeed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MainPage;
