


function sortArray(arr1) {
  let evens = [];
  let odds = [];
  let chars = [];
  //let sortedObj = { 'evens': [], 'odds': [], 'chars': [] };

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
   return  sortedObj = { 'evens': evens.sort((a,b) => a-b), 'odds': odds.sort((a,b) => a-b), 'chars': chars.sort((a,b) => a>b) }
}

 /*function sort(sortedObj){
  // let sortedObj ={ 'evens': evens.sort(), 'odds': odds.sort(), 'chars': chars.sort() }
   let a,b;
  for (const el of sortedObj){
    if (typeof (el) == "number") {
  return a-b;
    }else {
      return a>b;
    }
  //}}
//()}
  }}*/
console.log(sortArray(['a', 'g', 5, 3, 'd', 9, 'b', 7, 8,18,20,1004,80,71,65, 14, 12, 4, 2, 17, 1,'z','j','c']))



