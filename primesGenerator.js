const newMaxPrimeList = number => {
  let PrimesList = [2];
  for (let i = 3; i <= number; i++) {
    // console.log('lista',PrimesList,'sprawdzana liczba',i,'jej pierwiastek 2 stopnia', Math.sqrt(i))
    // i jak jej pierwiastek jest wiekszy od liczby pierwszej
    // to trzeba sprzwdzie wszystkie pierwsze i mniej od niej
    let primesToCheck = PrimesList.map(primeNumber => {
      if (Math.sqrt(i) >= primeNumber) {
        return primeNumber;
      }
    });

    let divided = primesToCheck.map(number => {
      if (i % number === 0) {
        return 1;
      }
    });

    // console.log(divided.every( number => number !== 1), i)
    if (divided.every(number => number !== 1)) {
      PrimesList.push(i);
    }

    // console.log(`number ${i} talbe ${primesToCheck} is divided ${divided}`)
  }
  return PrimesList;
};

function sumPrimes(num) {
  console.log(newMaxPrimeList(num).reduce((acc, red) => acc + red));
  return newMaxPrimeList(num).reduce((acc, red) => acc + red);
}

//zrob to z for i uzyciem break
//wersja map z jedna iteracja

const newMaxPrimeList2 = number => {
  let PrimesList = [2];
  for (let i = 3; i <= number; i++) {
    let tempPrimes = [];
    let tempListPrimes = [];
    for (let j = 0; j < PrimesList.length; j++) {
      // console.log(Math.sqrt(i) >= PrimesList[j], i, j);
      if (Math.sqrt(i) >= PrimesList[j]) {
        tempPrimes = tempPrimes.concat(PrimesList[j]);
      } else {
        break;
      }
    }
    // console.log(tempPrimes);
    for (let k = 0; k < tempPrimes.length; k++) {
      if (i % tempPrimes[k] === 0) {
        tempListPrimes = tempListPrimes.concat(1);
        break;
      } else {
        tempListPrimes = tempListPrimes.concat(0);
      }
    }
    // console.log(tempListPrimes.length);
    if (tempListPrimes[tempListPrimes.length - 1] !== 1) {
      PrimesList.push(i);
    }
    // if (tempListPrimes.every(number => number !== 1)) {
    //   PrimesList.push(i);
    // }
  }
  return PrimesList;
};

console.log(newMaxPrimeList2(10));
// console.log(newMaxPrimeList2(100).length); //
// console.log(newMaxPrimeList(100).length); //
