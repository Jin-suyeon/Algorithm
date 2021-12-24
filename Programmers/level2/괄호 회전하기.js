function solution(s) {
  const pair = { "}": "{", "]": "[", ")": "(" };
  const arr = s.split("");
  let result = 0;

  const trueOrFalse = (arr) => {
    const stack = [];

    for (let i = 0; i < arr.length; i++) {
      if (pair[arr[i]] === undefined) {
        stack.push(arr[i]);
      } else {
        if (stack[stack.length - 1] !== pair[arr[i]]) {
          return false;
        }
        stack.pop();
      }
    }

    if (stack.length) {
      return false;
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    if (trueOrFalse(arr)) {
      result++;
    }
    arr.push(arr.shift());
  }

  return result;
}

console.log(solution("[](){}"));
