/*
  Given 3 dfifferent arrays, find all common elements between them
*/

const findCommonElements = (arr1, arr2, arr3) => {

  const commonItems = [];
  arr1.forEach(el => {
    if(arr2.indexOf(el) > -1 && arr3.indexOf(el) > -1){
      commonItems.push(el);
    }
 });
 return commonItems;
}

console.log(findCommonElements([1,2,3,4,5,6,7,8,9], [0,2,3,4], [1,2,3,4,5,0]));