function sumFibs(num) {
  let result = 0;
  let fibonaci = 1;
  let prevfibonaci = 0;
  result = fibonaci + prevfibonaci;
  if (num === 1) return 1;

  for (let i = 1; i < num; i++) {
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
