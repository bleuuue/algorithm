function solution(prices) {
  const answer = [];

  while (prices.length) {
    const cur = prices.shift();
    const downIndex = prices.findIndex((price) => cur > price);

    if (downIndex === -1) answer.push(prices.length);
    else answer.push(downIndex + 1);
  }

  return answer;
}

function solution(prices) {
  const result = [];

  for (let i = 0; i < prices.length; i++) {
    let count = 0;
    for (let j = i + 1; j < prices.length; j++) {
      count++;
      if (prices[i] > prices[j]) {
        break;
      }
    }

    result.push(count);
  }

  return result;
}
