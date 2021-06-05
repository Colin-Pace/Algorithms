/* Maximum overlapping intervals
1. Consider a register of guests that has their arrival and departure times. Given an array of entries from the register, find the point when there were maximum guests present */

function findMaxGuests(arrival, departure) {
  const t = Math.max(...departure);
  console.log(t);
  const count = new Array(t + 2).fill(0);
  for (let i = 0;i < arrival.length; i++) {
    count[arrival[i]]++;
    count[departure[i] + 1]--;
  }

  let max_event_tm = count[0];
  for (let i = 1; i <= t; i++) {
    count[i] += count[i - 1];
    if (count[max_event_tm] < count[i]) {
      max_event_tm = i;
    }
  }

  return ["Event time: " + max_event_tm, 
         "Number of guests: " + count[max_event_tm]];
}

const arrival = [1, 2, 4, 7, 8, 12];
const departure = [2, 7, 8, 12, 10, 15];
console.log(findMaxGuests(arrival, departure));