function solution(numbers) {
  numbers = numbers.split("");
  let result = [];

  // 함수찾기
  const isPrime = (num) => {
    if (num === 1 || num === 0) {
      return false;
    }
    for (let i = 2; i <= num / 2; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  };

  // 중복된 숫자 제거
  const duplicateCheck = (arr) => {
    let numCopy = numbers.slice();

    while (numCopy.length > 0) {
      let idx = numCopy.indexOf(arr[0]);

      if (idx !== -1) {
        numCopy.splice(idx, 1);
        arr.shift();
      }
      if (arr.length === 0) {
        return true;
      }
      if (idx === -1) {
        return false;
      }
    }
  };

  const combination = (arr, bucket, n) => {
    let num = Number(bucket.join(""));

    if (n === 0) {
      if (
        isPrime(num) &&
        result.indexOf(num) === -1 &&
        duplicateCheck(bucket)
      ) {
        result.push(num);
      }
      return;
    }

    for (let i = 0; i < numbers.length; i++) {
      let choice = numbers[i];
      let copyArr = numbers.slice();

      combination(copyArr.slice(i + 1), bucket.concat(choice), n - 1);
    }
  };

  for (let i = 1; i <= numbers.length; i++) {
    combination(numbers, [], i);
  }

  return result.length;
}
