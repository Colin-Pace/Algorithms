/* Weighted interval scheduling
1. Find a maximum profit of non overlapping jobs
2. https://www.techiedelight.com/weighted-interval-scheduling-problem/
*/

class Job {
  constructor(start, finish, profit) {
    this.start = start;
    this.finish = finish;
    this.profit = profit;
  }
}

function findLastNonConflictingJob(jobs, n) {
  let low = 0;
  let high = n;
  
  while (low <= high) {
    const mid = Math.floor((low + high) / 2);
    
    if (jobs[mid].finish <= jobs[n].start) {
      if (jobs[mid + 1].finish <= jobs[n].start) {
        low = mid + 1;
      } else {
        return mid;
      }
    } else {
      high = mid - 1;
    }
  }
  
  return -1;
}

function findMaxProfit(jobs) {
  jobs.sort((a, b) => {
    const x = a.finish;
    const y = b.finish;
    return x - y; 
  });
  
  const n = jobs.length;
  const maxProfit = new Array(n);
  maxProfit[0] = jobs[0].profit;
  
  for (let i = 1;i < n; i++) {
    const index = findLastNonConflictingJob(jobs, i);
    let incl = jobs[i].profit;
    if (index != -1) {
      incl += maxProfit[index];
    }
    maxProfit[i] = Math.max(incl, maxProfit[i - 1]);
  }

  return maxProfit[n - 1];
}

const jobs = [
  new Job( 0, 6, 60 ),
  new Job( 1, 4, 30 ),
  new Job( 3, 5, 10 ),
  new Job( 5, 7, 30 ),
  new Job( 5, 9, 50 ),
  new Job( 7, 8, 10 )
];

console.log(findMaxProfit(jobs));