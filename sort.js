


function sortArray(arr1) {
  let evens = [];
  let odds = [];
  let chars = [];
  // let sortedObj = { 'evens': [], 'odds': [], 'chars': [] };

  for (const el of arr1) {
    if (typeof (el) == "number") {
      if (el % 2 == 0) {
        evens.push(el);

      } else {

        odds.push(el);
      }

    } else if (typeof (el) == "string") {
      chars.push(el)


    }
  };
  return { 'evens': evens.sort((a,b) => a-b), 'odds': odds.sort(), 'chars': chars.sort() }
}

console.log(sortArray(['a', 'g', 5, 3, 'd', 9, 'b', 7, 8, 14, 12, 4, 2, 17, 1]))



