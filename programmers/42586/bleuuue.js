function solution(progresses, speeds) {
  const answer = [0];
  const remainDays = progresses.map((val, i) =>
    Math.ceil((100 - val) / speeds[i])
  );
  let maxDay = remainDays[0];

  for (let i = 0, j = 0; i < remainDays.length; i++) {
    if (maxDay >= remainDays[i]) {
      answer[j] += 1;
    } else {
      maxDay = remainDays[i];
      answer[++j] = 1;
    }
  }

  return answer;
}
