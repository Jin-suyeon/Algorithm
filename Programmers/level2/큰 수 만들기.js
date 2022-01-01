function solution(number, k) {
  number = number.split("");
  let num = number.length - k;
  let result = [];

  const combination = (arr, bucket, n) => {
    if (n === 0) {
      result.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();

      combination(copyArr.slice(i + 1), bucket + choice, n - 1);
    }
  };

  combination(number, "", num);

  return `${Math.max(...result)}`;
}
