function smallestCommons(arr) {
  let maxNumber = Math.max(arr[0], arr[1]);
  let minNumber = Math.min(arr[0], arr[1]);
  let array = Array.from(Array(maxNumber - minNumber + 1)).map(
    (item, index) => minNumber + index
  );
  // console.log(maxNumber)
  // console.log(minNumber)
  console.log(array);
  const primesArr = primes(maxNumber);
  // console.log(primesArr)
  let numbers = {};
  for (
    let numberFromArray = 0;
    numberFromArray < array.length;
    numberFromArray++
  ) {
    let dividedBy = [];
    let myNumber = array[numberFromArray];
    // console.log(array[numberFromArray])

    while (myNumber !== 0) {
      // console.log(myNumber,)
      if (myNumber === 1) break;
      for (let i = 0; i < primesArr.length; i++) {
        if (myNumber % primesArr[i] === 0) {
          myNumber = myNumber / primesArr[i];
          dividedBy.push(primesArr[i]);
          break;
        }
      }
    }
    numbers[array[numberFromArray]] = dividedBy;
    // console.log(dividedBy)
  }
  // console.log(JSON.stringify(numbers, null, 4))
  let result = {};
  for (const prime of primesArr) {
    result[prime] = 0;
    // console.log(prime)
  }

  for (let [num, numDiv] of Object.entries(numbers)) {
    // console.log('liczba',num,'dzileniki', numbeRDiv)
    let temp = {};
    for (let divider of numDiv) {
      if (temp.hasOwnProperty(divider)) {
        temp[divider]++;
      } else {
        temp[divider] = 1;
      }
    }
    for (let [Tnum, TDiv] of Object.entries(temp)) {
      // console.log('liczba',Tnum,'dzileniki', TDiv)
      // console.log(result[Tnum] < TDiv)
      if (result[Tnum] < TDiv) {
        result[Tnum] = TDiv;
      }
    }
    // console.log(JSON.stringify(temp, null, 4))
  }
  // console.log(JSON.stringify(result, null, 4))

  let result2 = 1;
  for (let key in result) {
    // console.log(key, result[key])
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
    // console.log(i)
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
    // console.log(i, temp , temp.indexOf(1))
  }
  return result;
}

// console.log(primes(100).length);
