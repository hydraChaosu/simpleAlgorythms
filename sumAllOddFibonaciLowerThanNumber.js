function sumFibs(num) {
  let result = 0;
  let fibonaci = 1;
  let prevfibonaci = 1;
  result = fibonaci + prevfibonaci;
  if (num === 1) return 1;

  for (let i = 2; i < num; i++) {
    fibonaci = fibonaci + prevfibonaci;
    prevfibonaci = fibonaci - prevfibonaci;
    if (fibonaci % 2 === 1 && fibonaci <= num) {
      result = result + fibonaci;
    }
    //  console.log(fibonaci)
  }
  console.log(result, "result");
  return result;
}

sumFibs(75025);
