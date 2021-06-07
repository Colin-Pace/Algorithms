/* Merging overlapping intervals
1. Given a set of intervals, merge overlapping intervals and then print non overlapping intervals
2. https://www.techiedelight.com/merging-overlapping-intervals */

class Interval {
  constructor(begin, end) {
    this.begin = begin;
    this.end = end;
  }
}

function mergeIntervals(intervals) {
  intervals.sort((a, b) => {
    const x = a.begin;
    const y = b.begin;
    return x - y;
  });

  const stack = [];
  for (let i = 0; i < intervals.length; i++) {
    const curr = intervals[i];
    let peek = stack[stack.length - 1];
    if (!stack.length || curr.begin > peek.end) {
      stack.push(curr);
    }

    peek = stack[stack.length - 1];
    if (peek.end < curr.end) {
      peek.end = curr.end;
    }
  }

  return stack;
}

const intervals = [
  new Interval(1, 5), new Interval(2, 3),
  new Interval(4, 6), new Interval(7, 8),
  new Interval(8, 10), new Interval(12, 15)
];
console.log(mergeIntervals(intervals));