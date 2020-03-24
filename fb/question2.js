/*
Implement a function flattenArray to transform multidimensional arrays into one dimensional.


[ [1,2 ], [[[2]]], {a: [1, 4]}, 4, 43, [2, [3,2]]] = [1,2,2,{a: [1,4]},4,43,2,3,2];
*/
const flattenArray = (array, arr=[]) => {
 
  array.forEach( e => {
    if(Array.isArray(e)) {
      flattenArray(e, arr);
    }
    else {
      arr.push(e);
    }
  });

  return arr;
}

/*
Improve above solution
*/