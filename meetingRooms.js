/*
Write a function numberOfMeetingRoomsNeeded(MeetingRoom[] meetingRooms), where each MeetingRoom is an object with two properties, int startTime and int endTime. The input list is not guaranteed to be in any order. The function should return the minimum number of meeting rooms needed to accommodate the meetings in the input list. For instance, if the input list has two meetings, and they don't overlap, then the function should return 1, since the first meeting could take place in a room, and then after it finishes the second meeting could take place in the same room. However, if the input list has two meetings and they do overlap, then the function should return 2, since you can't have two meetings in the same room at the same time.
*/

const meetingTimes = [ {start: 1, end: 4},
  {start: 3, end: 6},
  {start: 2, end: 8},
  {start: 10, end: 12}
];

function meetingRooms(meetingTimes) {
let reformatted = [];

for (let i = 0; i < meetingTimes.length; i++) {
for (let key in meetingTimes[i]) {
const entry = {};
entry[key] = meetingTimes[i][key];
reformatted.push(entry);
}
}
reformatted = reformatted.sort(compare);

let overlappingRooms = 0;
let highestCount = 0;
for (let i = 0; i < reformatted.length; i++) {

let key;
for (let element in reformatted[i]) {
key = element;
}

if (key === "start") {
overlappingRooms++;
} else {
overlappingRooms--;
}
if (overlappingRooms > highestCount) {
highestCount = overlappingRooms;
}
}

return highestCount; 
}

function compare(a, b) {
let aKey;
let bKey;

for (let key in a) {
aKey = key;
}
for (let key in b) {
bKey = key;
}

if (a[aKey] < b[bKey]) {
return -1;
}
if (a[aKey] > b[bKey]) {
return 1;
}

return 0;
}

console.log(meetingRooms(meetingTimes));