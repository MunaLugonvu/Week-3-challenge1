

var evens = {};
var odds = {};
var chars = {};
let sortedObj = { 'evens': [], 'odds': [], 'chars': [] };
function sortArray(arr1) {
  for (const el of arr1) {
    if (typeof (el) == "number") {
      if (el % 2 == 0) {
        sortedObj.evens.push(el);
       
      } else {

        sortedObj.odds.push(el);
      }

    } else if (typeof (el) == "string") {
      sortedObj.chars.push(el)


    }

  };
  return sortedObj
}
console.log(sortArray(['a', 'b', 5, 3, 9, 'i', 7,8,12,14]))



