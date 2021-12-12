function solution(numbers) {
  let result = numbers
    .map((el) => el.toString())
    .sort((a, b) => b + a - (a + b))
    .join("");

  if (result[0] === "0") {
    return "0";
  } else {
    return result;
  }
}

console.log(solution([6, 10, 2])); // "6210"
