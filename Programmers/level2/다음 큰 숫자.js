function solution(n) {
  let nToOne = 0;
  let nOfBinary = n.toString(2);
  let bigNum;

  for (let i = 0; i < nOfBinary.length; i++) {
    if (nOfBinary[i] === "1") {
      nToOne++;
    }
  }

  const searchBigNum = (num) => {
    let searchNum = num.toString(2);
    let cnt = 0;

    for (let i = 0; i < searchNum.length; i++) {
      if (searchNum[i] === "1") {
        cnt++;
      }
    }

    if (cnt === nToOne) {
      bigNum = num;
      return;
    } else {
      searchBigNum(num + 1);
    }
  };

  searchBigNum(n + 1);

  return bigNum;
}

console.log(78); //83
console.log(15); //23
