function solution(priorities, location) {
  let answer = 0;
  const arr = priorities.map((priority, index) => ({ priority, index }));

  while (arr.length) {
    const findVal = arr.shift();

    if (arr.some(({ priority }) => priority > findVal.priority))
      arr.push(findVal);
    else {
      answer++;
      if (findVal.index === location) return answer;
    }
  }
  return answer;
}
