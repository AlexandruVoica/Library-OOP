// Breaking down .reduce(), .filter(), map()

let numArray = [1, 1, 3, 2, 3, 2, 5, 1, 2, 1, 3];

// 1 - .reduce()

array.reduce(callback, initialValue);

// callback() can use the following arguments: accumulator, currentItem, currentItemIndex, array
// .reduce() is equivalent with:
let accumulator = initialValue;
for(item of array) {
  accumulator = callback(accumulator, item, index, array);
}
return accumulator;

// 2 - .filter()

// thisArg is the designated use of keyword `this`
array.filter(callback, thisArg);

// callback() can use the following arguments: currentItem, currentItemIndex, array
// .filter() is equivalent with:
let returnArray = [];
for(item of array) {
  if (callback(item, index, array)) {
    returnArray.push(item);
  }
}
return returnArray;

// 3 - .map()

array.map(callback, thisArg);

// callback() can use the following arguments: currentItem, currentItemIndex, array
// .map() is equivalent with:
let returnArray = array;
for(item of returnArray) {
  item = callback(item, index, array);
}
return returnArray;

// ------------------------------------------------------------------------

// Problem: list all the unique elements in an array in order of appearance
//
// using .reduce()

initialValue = [];

for(item of array) {
  accumulator = callback(accumulator, item);
}

function callback(accumulatorArray, currentItem) {
  if (!(accumulatorArray.inckudes(currentItem))) {
    accumulatorArray.push(currentItem);
  }
}

return accumulatorArray;

// shorthand version
let culledArray = numArray.reduce(((accumulatorArray, currentItem) => {
  if (!(accumulatorArray.includes(currentItem))) {
    accumulatorArray.push(currentItem);
  }
}), []);

//
// using .filter()
let returnArray = [];

for(let index = 0; index < array.length; index ++) {
  // .indexOf() returns the index of the first appearance of the item in the array
  // thus if the two indices are different, it means the current item is a copy of the same initial unique item
  if (array.indexOf(array[index]) === index) {
    returnArray.push(item);
  }
}

return returnArray;

// shorthand version
let culledArray = numArray.filter((item, index, array) => (array.indexOf(item) === index));

//
// In order to solve the problem using .map() it is necessary to combine with at least one other method, thus defying the purpose of the exercise


