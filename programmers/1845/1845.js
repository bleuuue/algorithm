function solution(nums) {
  const max = nums.length / 2;
  const size = new Set(nums).size;

  answer = size > max ? max : size;
  return answer;
}
