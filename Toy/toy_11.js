const powerSet = function (str) {
  let result = [""];

  str = [...new Set(str.split(""))].sort();

  const combination = (arr, bucket, n) => {
    if (n === 0) {
      result.push(bucket.sort().join(""));
      return;
    }

    for (let i = 0; i < arr.length; i++) {
      let choice = arr[i];
      let copyArr = arr.slice();

      combination(copyArr.slice(i + 1), bucket.concat(choice), n - 1);
    }
  };

  for (let i = 1; i <= str.length; i++) {
    combination(str, [], i);
  }

  return result.sort();
};

console.log(powerSet("abc")); // ['', 'a', 'ab', 'abc', 'ac', 'b', 'bc', 'c']
console.log(powerSet("jjump")); // ['', 'j', 'jm', 'jmp', 'jmpu', 'jmu', 'jp', 'jpu', 'ju', 'm', 'mp', 'mpu', 'mu', 'p', 'pu', 'u']
