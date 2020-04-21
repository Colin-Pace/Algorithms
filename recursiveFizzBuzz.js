function recursiveFizzBuzz(integer) {
    if (integer === 151) {
        return;
    } else {
        if (integer % 15 === 0) {
            console.log("fizz buzz");
        } else if (integer % 3 === 0) {
            console.log("fizz");
        } else if (integer % 5 === 0) {
            console.log("buzz");
        } else {
            console.log(integer);
        }
        recursiveFizzBuzz(integer+1);
    }
}
recursiveFizzBuzz(1);
