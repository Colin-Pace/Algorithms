/* Given a set of tasks with deadlines and profits, find the maximum profit. A task takes one unit of time to execute, and it cannot execute beyond its deadline. Only one task executes at a time. */

function job(taskID, deadline, profit) {
  this.taskID = taskID;
  this.deadline = deadline;
  this.profit = profit;
}

function scheduleJobs(jobs, T) {
  let profit = 0;
  let slot = new Array(T).fill(-1);
  jobs = jobs.sort((a, b) => (a.profit < b.profit) ? 1 : -1);
  
  for (let i = 0; i < jobs.length; i++) {
    for (let j = jobs[i].deadline - 1; j >= 0; j--) {
      if (j < T && slot[j] === -1) {
        slot[j] = jobs[i].taskID;
        profit += jobs[i].profit;
        break;
      }
    }
  }

  const result = [];
  slot.forEach(element => {
    if (element !== -1) {
      result.push(element);
    }
  });

  return [result, profit];
}

const T = 15;
const jobs = [
  new job(1, 9, 15), new job(2, 2, 2),
  new job(3, 5, 18), new job(4, 7, 1),
  new job(5, 4, 25), new job(6, 2, 20),
  new job(7, 5, 8),  new job(8, 7, 10),
  new job(9, 4, 12), new job(10, 3, 5)
];
console.log(scheduleJobs(jobs, T));