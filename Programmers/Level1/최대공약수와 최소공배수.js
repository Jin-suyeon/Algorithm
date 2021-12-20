function solution(n, m) {
  const gcd = (m, n) => {
    if (m % n === 0) {
      return n;
    }
    return gcd(n, m % n);
  };

  let A = gcd(m, n);
  let B = m * (n / A);

  return [A, B];
}

console.log(3, 12);
