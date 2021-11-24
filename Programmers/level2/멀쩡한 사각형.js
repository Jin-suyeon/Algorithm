function solution(w, h) {
  // 사용할 수 없게 되는 값 = w + h - (w,h의 최대공약수)
  // 최대공약수를 구해 사용할 수 없게된 사각형을 구하고
  // (w * h): 삼각형의 넓이 - 사용할 수 없게 되는 값 리턴
  const gcd = (w, h) => {
    if (w % h === 0) return h;
    return gcd(h, w % h);
  };

  let notUseSquare = w + h - gcd(w, h);

  return w * h - notUseSquare;
}

console.log(solution(8, 12)); // 80
