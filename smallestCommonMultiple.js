function smallestCommons(arr) {
  let maxNumber = Math.max(arr[0], arr[1]);
  let minNumber = Math.min(arr[0], arr[1]);
  let array = Array.from(Array(maxNumber - minNumber + 1)).map(
    (item, index) => minNumber + index
  );
  const primesArr = primes(maxNumber);
  //generate object with divisions of every number
  let numbers = {};
  for (let numberFromArray of array) {
    let dividedBy = [];
    let myNumber = numberFromArray;

    while (myNumber !== 0) {
      if (myNumber === 1) break;
      for (let num of primesArr) {
        if (myNumber % num === 0) {
          myNumber = myNumber / num;
          dividedBy.push(num);
          break;
        }
      }
    }
    numbers[numberFromArray] = dividedBy;
  }
  //create empty obj which includes every valuable prime
  let result = {};
  for (const prime of primesArr) {
    result[prime] = 0;
  }

  for (let num in numbers) {
    // creaty obj which describes how many times a number is divided by prime
    let temp = {};
    for (let divider of numbers[num]) {
      if (temp.hasOwnProperty(divider)) {
        temp[divider]++;
      } else {
        temp[divider] = 1;
      }
    }
    //if current number is divided more time by prime than current status in object (from previous numbers) replace status with him
    for (let num in temp) {
      if (result[num] < temp[num]) {
        result[num] = temp[num];
      }
    }
  }

  let result2 = 1;
  for (let key in result) {
    result2 = result2 * key ** result[key];
  }
  console.log(result2);

  return result2;
}

smallestCommons([23, 18]);

function primes(number) {
  let result = [];
  for (let i = 2; i <= number; i++) {
    let temp = [];
    for (let j = 0; j < result.length; j++) {
      if (i % result[j] === 0 && i !== result[j]) {
        temp.push(1);
        break;
      } else {
        temp.push(0);
      }
    }
    if (temp.indexOf(1) === -1) {
      result.push(i);
    }
  }
  return result;
}

// console.log(primes(100).length);
