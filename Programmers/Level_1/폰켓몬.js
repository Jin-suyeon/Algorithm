function solution(nums) {
  let haveNum = nums.length / 2;
  let result = [];

  const permutation = (arr, num, bucket) => {
    if (num === 0) {
      result.push([...new Set(bucket)].length);
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();
      copyArr.splice(i, 1);
      permutation(copyArr, num - 1, bucket.concat(choice));
    }
  };

  permutation(nums, haveNum, []);

  return Math.max(...result);
}

console.log(solution([3, 1, 2, 3])); // 2