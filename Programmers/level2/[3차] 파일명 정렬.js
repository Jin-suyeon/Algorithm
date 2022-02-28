function solution(files) {
  let divide = [];
  let result = [];

  for (let i = 0; i < files.length; i++) {
    let num = /[0-9]/;
    let numCheck = "";
    for (let j = 0; j < files[i].split("").length; j++) {
      if (num.test(files[i][j])) {
        numCheck += files[i][j];

        if (!num.test(files[i][j + 1])) {
          break;
        }
      }
    }
    divide.push({});
    divide[i].num = numCheck;
    let [head, tail] = files[i].split(numCheck);
    divide[i].head = head;
    divide[i].tail = tail;
  }

  divide.sort((a, b) => {
    let headA = a.head.toUpperCase();
    let headB = b.head.toUpperCase();

    if (headA < headB) {
      return -1;
    }
    if (headA > headB) {
      return 1;
    }

    return 0;
  });

  divide.sort((a, b) => {
    let numA = Number(a.num);
    let numB = Number(b.num);
    let headA = a.head.toUpperCase();
    let headB = b.head.toUpperCase();

    if (headA === headB) {
      if (numA < numB) {
        return -1;
      }
      if (numA > numB) {
        return 1;
      }
    }

    return 0;
  });

  for (let i = 0; i < divide.length; i++) {
    let { num, head, tail } = divide[i];
    result.push(head + num + tail);
  }

  return result;
}
