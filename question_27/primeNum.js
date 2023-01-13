// 27. Write a program to print all the prime number between 0 to 100 (0 and 100 included).

const isPrime = (num) => {
  let i;
  if (num < 2) {
    return false;
  }
  for (i = 2; i <= Math.floor(num / 2); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  if (i >= Math.floor(num / 2)) {
    return true;
  }
};

const primeNum = (start, end) => {
  while (start <= end) {
    if (isPrime(start)) {
      console.log(start);
      start++;
    } else {
      start++;
    }
  }
};

primeNum(0, 100);
