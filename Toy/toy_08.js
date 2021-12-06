const largestProductOfThree = function (arr) {
  // TODO: 여기에 코드를 작성합니다.
  let result = [];

  const permutation = (arr, bucket, n) => {
    if (n === 0) {
      result.push(bucket);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();
      copyArr.splice(i, 1);

      permutation(copyArr, bucket * choice, n - 1);
    }
  };

  permutation(arr, 1, 3);

  return Math.max(...result);
};

console.log([2, 1, 3, 7]); // 42
