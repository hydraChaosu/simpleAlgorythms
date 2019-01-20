function factorial(num) {
  return num <= 1 ? 1 : num * factorial(num - 1);
}

factorial(5);
