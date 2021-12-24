function solution(s) {
  let stack = [];
  s = s.split("");

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(") {
      stack.push(s[i]);
    } else {
      if (stack[stack.length - 1] === "(" && s[i] === ")") {
        stack.pop();
      } else {
        return false;
      }
    }
  }

  if (stack.length) {
    return false;
  }
  return true;
}

console.log(solution("()()")); //true
console.log(solution("(()(")); //false
