


function sortArray(arr1){

 // var vCount = 0;
var evens = [];
var odds = [];
var chars = [];


for (const element of arr1) {
  for (var x = 0; x < arr1.length; x++) {
    if (typeof arr1[x] === "number"){
    if ((arr1[x]) % 2 == 0) {
      evens.push(parseInt(arr1[x]));
      //return {evens: evens.sort()}

    }
    else {
       
      odds.push(parseInt(arr1[x]) );
    
      //return {odds:odds.sort()}
    }
  }
    else {
      chars.push(arr1[x])
      //return { chars:chars.sort()}
    }
    return {'evens': evens.sort((a,b)=>a-b),'odds': odds.sort((a,b)=>a-b), 'chars': chars.sort((a,b)=>a-b)}
  }

};}
console.log(sortArray(['a','b',5,3,9,'i',7]))


