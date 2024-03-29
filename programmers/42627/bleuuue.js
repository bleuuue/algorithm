function solution(jobs) {
  jobs.sort(([a, b], [c, d]) => a - c || b - d);
  let time = 0;
  let processed_time = 0;
  const waiting = [];
  const count = jobs.length;

  while (jobs.length || waiting.length) {
    let in_process;
    while (jobs.length && jobs[0][0] <= time) waiting.push(jobs.shift());

    if (waiting.length) {
      in_process = waiting.sort(([a, b], [c, d]) => b - d || a - c).shift();
    } else {
      in_process = jobs.shift();
      time = in_process[0];
    }
    time += in_process[1];
    processed_time += time - in_process[0];
  }

  return Math.floor(processed_time / count);
}
