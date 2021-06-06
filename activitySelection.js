// Activity selection: https://www.techiedelight.com/activity-selection-problem/

function selectActivity(activities) {
  let k = 0;
  const out = new Set();
  
  out.add(activities[0]);
  activities.sort(function(a, b) {
    return a[1] - b[1];
  });

  for (let i = 1; i < activities.length; i++) {
    if (activities[i][0] >= activities[k][1]) {
      out.add(activities[i]);
      k = i;
    }
  }

  return out
}

const activities = [
  [1, 4], [3, 5], [0, 6], [5, 7], [3, 8], [5, 9],
  [6, 10], [8, 11], [8, 12], [2, 13], [12, 14]
];
console.log(selectActivity(activities));