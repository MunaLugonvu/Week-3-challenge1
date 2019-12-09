

var evens = [];
var odds = [];
var chars = [];
let sortedObj = { 'evens': [], 'odds':[], 'chars':[] };
function sortArray(arr1) {
  for (const el of arr1) {
    if (typeof (el) == "number") {
      if (el % 2 == 0) {
        sortedObj.evens.sort((a,b) => a - b).push(el);

      } else {

        sortedObj.odds.sort((a,b) => a - b).push(el);
      }

    } else if (typeof (el) == "string") {
      sortedObj.chars.sort().push(el)


    }

  };
  return sortedObj
}
console.log(sortArray(['a', 'g', 5, 3,'d', 9, 'b', 7, 8, 14, 12,4,2,17,1]))



