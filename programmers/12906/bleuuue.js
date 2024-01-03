function solution(arr) {
  return arr.filter((val, i) => val !== arr[i + 1]);
}
