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
