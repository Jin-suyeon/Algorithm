function solution(number, k) {
  let stack = [];

  for (let i = 0; i < number.length; i++) {
    let num = number[i];

    while (k > 0 && stack[stack.length - 1] < num) {
      stack.pop();
      k--;
    }

    stack.push(num);
  }
  stack.splice(stack.length - k, k);

  return stack.join("");
}

console.log(solution("1924", 2)); // "94"
