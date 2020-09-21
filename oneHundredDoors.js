/* There are 100 doors in a row that are all initially closed. You make 100 passes by the doors. The first time through, visit every door and 'toggle' the door (if the door is closed, open it; if it is open, close it). The second time, only visit every 2nd door (i.e., door #2, #4, #6, ...) and toggle it. The third time, visit every 3rd door (i.e., door #3, #6, #9, ...), etc., until you only visit the 100th door. */

class OneHundredDoors {
  getFinalOpenedDoors() {
    let itr = 1;
    const doors = [];
    for (let i = 0; i < 100; i++) doors.push("closed");
    while (itr !== 101) {
      for (let i = itr - 1; i < 100; i += itr) {
        if (doors[i] === "closed") doors[i] = "open";
        else doors[i] = "closed";
      }
      itr++;
    }
    return doors;
  }

  verifyResult() {
    const result = this.getFinalOpenedDoors(), l = result.length;
    const answerKey = [0, 3, 8, 15, 24, 35, 48, 63, 80, 99];
    for (let i = 0; i < l; i++) {
      if (result[i] === "open") if (!answerKey.includes(i)) return false;
    }
    return true;
  }
}

const test = new OneHundredDoors;
console.log("Test passes: " + test.verifyResult());
