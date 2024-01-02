function solution(participant, completion) {
  const map = new Map();

  for (let i = 0, len = participant.length; i < len; i++) {
    let participantName = participant[i],
      completionName = completion[i];

    map.set(participantName, !map.get(participantName));
    map.set(completionName, !map.get(completionName));
  }

  for ([k, v] of map) {
    if (v) return k;
  }
}
