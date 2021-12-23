function solution(relation) {
  let cnt = 0;
  let divide = [];

  // 각각의 i번째 배열을 들을 만들고
  // 같은 것들이 있는 배열인지 아닌지 확인한다
  // 같은 것이 없는 배열이 몇개인지 확인하고 카운트를 해준다

  for (let i = 0; i < relation[0].length; i++) {
    divide.push([]);
    for (let j = 0; j < relation.length; j++) {
      divide[i].push(relation[j][i]);
    }
  }

  return divide;
}
