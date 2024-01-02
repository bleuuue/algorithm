function solution(nums) {
  const map = new Map();

  nums.forEach((num) => {
    if (map.has(num)) return;
    map.set(num, 1);
  });

  const number = nums.length / 2;
  const size = map.size;

  answer = size > number ? number : size;
  return answer;
}
