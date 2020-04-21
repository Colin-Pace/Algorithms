/*
Diamond: from argument integer n, print a diamond in a string
    a. It should have hyphens for rows
    b. The middle row should have n hyphens
    c. All rows should differ from their immediate neighbors
       by plus or minus two hyphens
    d. E.g.,

                  n = 1 > '-'

                  n = 2 > '--'

                  n = 3 > '  -
                            ---
                             -  '

                  n = 4 > '--
                          ----
                           --'

                  n = 5 > '-
                          ---
                         -----
                          ---
                           -'
                  etc.
    e. The time complexity is O(n^2)
*/
function diamondStringFromInt(int) {
 let result = '';
 let level = 1;

 let createWidest = function(int) {
   for (let i = 0; i < int; i++) {
     result += '-';
   }
   let count = int - 2;
   createNextLevel(count);
 }
 let createNextLevel = function(count) {
   let string = '';
   for (let i = 0; i < level; i++) {
     string += ' ';
   }
   level++;
   for (let i = 0; i < count; i++) {
     string += '-';
   }
   placeLevel(string, count);
 }
 let placeLevel = function(string, count) {
   let below = result += '\n' + string;
   let both = string += '\n' + below;
   result = both;
   createAndPlaceOtherLevels(count);
 }
 let createAndPlaceOtherLevels = function(count) {
   if (count > 2) {
     count-=2;
     createNextLevel(count);
   }
 }

 createWidest(int);
 console.log(result);
}
diamondStringFromInt(20);
