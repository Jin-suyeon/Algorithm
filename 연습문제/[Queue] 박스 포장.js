function paveBox(boxes) {
  let result = [];
  let cnt = 1;
  let box = boxes[0];

  for (let i = 1; i < boxes.length; i++) {
    if (box >= boxes[i]) {
      cnt++;
      if (i === boxes.length - 1) {
        result.push(cnt);
      }
    } else {
      result.push(cnt);
      cnt = 1;
      box = boxes[i];
    }
  }

  if (!result.length) {
    return 1;
  }

  return Math.max(...result);
}
