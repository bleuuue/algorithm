class MinHeap {
  // 초기화
  constructor() {
    this.heap = [];
  }

  size() {
    return this.heap.length;
  }

  swap(idx1, idx2) {
    [this.heap[idx1], this.heap[idx2]] = [this.heap[idx2], this.heap[idx1]];
  }

  getParentIndex(childIdx) {
    return Math.floor((childIdx - 1) / 2);
  }

  getLeftChildIndex(parentIdx) {
    return parentIdx * 2 + 1;
  }

  getRightChildIndex(parentIdx) {
    return parentIdx * 2 + 2;
  }

  pop() {
    const heapSize = this.size();
    if (!heapSize) return null;
    if (heapSize === 1) return this.heap.pop();

    const value = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.bubbleDown();
    return value;
  }

  push(value) {
    this.heap.push(value);
    this.bubbleUp();

    return this.heap;
  }

  bubbleUp() {
    let child = this.size() - 1;
    let parent = this.getParentIndex(child);

    while (this.heap[child] < this.heap[parent]) {
      this.swap(child, parent);
      child = parent;
      parent = this.getParentIndex(parent);
    }
  }

  bubbleDown() {
    let parent = this.heap[0];
    let lChild = this.getLeftChildIndex(parent);
    let rChild = this.getRightChildIndex(parent);

    while (
      (lChild <= this.size() && this.heap[lChild] < this.heap[parent]) ||
      (rChild <= this.size() && this.heap[rChild] < this.heap[parent])
    ) {
      let smallerIdx = lChild;
      if (this.heap[rChild] && this.heap[rChild] < this.heap[smallerIdx])
        smallerIdx = rChild;

      this.swap(parent, smallerIdx);
      parent = smallerIdx;
      lChild = this.getLeftChildIndex(parent);
      rChild = this.getRightChildIndex(parent);
    }
  }
}

function solution(scoville, K) {
  let answer = 0;
  const heap = new MinHeap();
  scoville.forEach((val) => heap.push(val));

  while (heap.heap[0] < K && heap.size() > 1) {
    const min1 = heap.pop();
    const min2 = heap.pop();

    heap.push(min1 + min2 * 2);
    answer++;
  }
  return answer;
}
