function solution(s) {
  let answer = true;
  const stack = [];
  for (let val of s) {
    if (val === "(") stack.push(val);
    else {
      if (!stack.length) return false;
      stack.pop();
    }
  }

  if (stack.length) return false;
  return answer;
}
