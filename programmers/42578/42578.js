function solution(clothes) {
  let answer = 1;
  const obj = {};
  for (let [clothing, category] of clothes) {
    obj[category] = (obj[category] || 0) + 1;
  }

  for (let key in obj) {
    answer *= obj[key] + 1;
  }

  return answer - 1;
}
