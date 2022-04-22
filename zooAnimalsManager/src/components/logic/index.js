import atomicAnimalObject from '../../main.json';
import { handleHourPush, handleFeed } from './handlers';

const animalObjectBuilder = () => {
  let zooAnimalList = [];
  let id = 0;
  console.log('atomicAnimalObject', atomicAnimalObject);
  atomicAnimalObject.typeOfAnimal.map((animalType, index) => {
    for (let i = 1; i <= 5; i++) {
      id = zooAnimalList.length;
      zooAnimalList = [
        ...zooAnimalList,
        {
          id,
          typeOfAnimal: animalType,
          maxHealth: 100,
          minHealth: atomicAnimalObject.minHealth[index],
          isDead: false,
          hoursPassedWithoutFeed: 0,
        }
      ];
    }
  });

  return zooAnimalList;
};

function randomIntFromInterval(min, max) { // min and max included 
  return (Math.random() * (max - min + 1) + min).toFixed(2);
}

/**
 * Would give an array of 15 random values
 * 1 for each animal
 * @return array
 */
const randNumGenWhenNotFedForEachAnimal = (zooAnimalsListLength) => {
  let randomArray = [];
  for (let i = 0; i < zooAnimalsListLength; i++) {
    randomArray.push(randomIntFromInterval(0, 20));
  }
  return randomArray;
};

/**
 * would give an array of 3 different values
 * 1 for each TYPE of an animal.
 * @return array
 */
const randNumGenWhenFedForEachTypeOfAnimal = () => {
  let randomArray = [];
  for (let i = 0; i < atomicAnimalObject.typeOfAnimal.length; i++) {
    randomArray.push(randomIntFromInterval(10, 25));
  }
  return randomArray;
};

export default {
  animalObjectBuilder,
  randNumGenWhenNotFedForEachAnimal,
  randNumGenWhenFedForEachTypeOfAnimal,
  handleHourPush, 
  handleFeed
};
