function solution(answers) {
  let result = [];

  let one = [1, 2, 3, 4, 5];
  let two = [2, 1, 2, 3, 2, 4, 2, 5];
  let three = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let correctOne = answers.filter(
    (answer, i) => answer === one[i % one.length]
  ).length;
  let correctTwo = answers.filter(
    (answer, i) => answer === two[i % two.length]
  ).length;
  let correctThree = answers.filter(
    (answer, i) => answer === three[i % three.length]
  ).length;

  let max = Math.max(correctOne, correctTwo, correctThree);

  if (max === correctOne) {
    result.push(1);
  }
  if (max === correctTwo) {
    result.push(2);
  }
  if (max === correctThree) {
    result.push(3);
  }

  return result;
}

console.log(solution([1, 2, 3, 4, 5]));
console.log(solution([1, 3, 2, 4, 2]));