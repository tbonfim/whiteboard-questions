/*
Build a function that returns whether or not a string has matcing parentesis, curly and square brackets

'(a s s{[]})' => true
'( abxc)' =>  true
'abc' => true
'(a b c[ )' => false

*/

const hasMatchingParentesis = string => {
  const stack = [];
  const openingMarkers = ["(", "[", "{"];
  const closingMarkers = [")", "]", "}"];

  [...string].forEach(char => {
    if (openingMarkers.indexOf(char) > -1) {
      stack.push(char);
    } else {
      const index = closingMarkers.indexOf(char);
      if (index > -1) {
        if (stack.length === 0) return false;

        if (openingMarkers.indexOf(stack[stack.length - 1]) === index) {
          stack.pop();
        } else {
          return false;
        }
      }
    }
  });
  return stack.length === 0;
};
console.log(hasMatchingParentesis("sjsij(sjj(s)"));