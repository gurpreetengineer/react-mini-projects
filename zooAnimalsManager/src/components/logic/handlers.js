import functions from './index';

export const handleHourPush = zooAnimalList => {
  const randNumList = functions.randNumGenWhenNotFedForEachAnimal(zooAnimalList.length);
  let updateArray = [];
  
  for (let zooAnimal of zooAnimalList) {
    const maxHealth = (zooAnimal.maxHealth - randNumList[zooAnimal.id]).toFixed(2);
    const isDead = maxHealth < zooAnimal.minHealth;
    if(zooAnimal.typeOfAnimal === 'Elephant' && maxHealth > 60.00){
      updateArray.push(
        {...zooAnimal, 
          maxHealth, 
          hoursPassedWithoutFeed: +zooAnimal.hoursPassedWithoutFeed + 1, 
        }
      );
      continue;
    }
    updateArray.push(
      zooAnimal.isDead 
        ? 
        {...zooAnimal} 
        :
        {...zooAnimal, 
          maxHealth, 
          hoursPassedWithoutFeed: +zooAnimal.hoursPassedWithoutFeed + 1, 
          isDead
        }
    );
  }
  // setZooAnimalList(updateArray);
  return updateArray;
};

export const handleFeed = zooAnimalList => {
  const randNumList = functions.randNumGenWhenFedForEachTypeOfAnimal();
  let updateArray = [], temp = 0;
  const dontExceedHealthLimit = 100.00;
  for (let randNum of randNumList) {
    for (let i = temp; i < zooAnimalList.length; i ++) {
      let maxHealth = (+zooAnimalList[i].maxHealth + +randNum).toFixed(2) > dontExceedHealthLimit 
        ? 100 : 
        (+zooAnimalList[i].maxHealth + +randNum).toFixed(2);

      updateArray.push(
        zooAnimalList[i].isDead 
          ? 
          {...zooAnimalList[i]} 
          :
          {...zooAnimalList[i], 
            maxHealth, 
            hoursPassedWithoutFeed: 0
          }
      );

      if((i + 1) % 5 === 0) {
        temp = i + 1;
        break;
      }
    }
  }
  return updateArray;
};
