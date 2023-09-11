console.clear()

// definition
function calculateSum(arr) {
  // your code goes here
  let sum = 0;
  
  arr.forEach(function (num) {
    sum = sum + num;
  });
  
  return sum;
}

function findElement(arr, n) {
  let x = -1;
  
  arr.forEach(function (el, i) {
    if (n === el) {
     x = i;
    }
  })
  
  return x;
}

function findElementWithFind(arr, n) {
  return arr.findIndex(function (el) {
    return el === n;
  })
}

function getMax(arr) {
  let max = Number.MIN_VALUE;
  
  arr.forEach(function (num) {
    if (num > max) {
      max = num;
    }
  });
  
  return max;
}

function sumOfNeighbors(arr) {
  const resultArray = [];
  
  arr.forEach(function (num, i) {
    if (i % 2 !== 0) {
      return
    }
    
    let sum = num;
    if (i + 1 < arr.length) {
      sum = sum + arr[i + 1];
    }
    
    resultArray.push(sum);
  });
  
  return resultArray;
}

function unique(arr) {
  const uniqueArray = [];
  
  arr.forEach(function (el) {
    if (uniqueArray.includes(el)) {
      return;
    } 
    
    uniqueArray.push(el);
  });
  
  return uniqueArray;
}

function getUniqueArray(arr) {
  const uniqueArray = [];
  
  arr.forEach(function (el) {
    if (uniqueArray.includes(el))
      return;
    uniqueArray.push(el);
  })
  
  return uniqueArray;
}

function getArrayDuplicates(arr){
  const duplicatesArray = [];
  const uniqueArray = [];
  
  arr.forEach(function (el) {
    if (uniqueArray.includes(el)) {
      duplicatesArray.push(el);
    }
    uniqueArray.push(el);
  })
  
  return duplicatesArray;
}

// execution
const inputArray = [5, 1, 1, 0, 3, 5, 7, 12, 8, 12, 21];

// 1. calculating sum
// console.log(calculateSum(inputArray));
// console.log(inputArray);

// 2. looking for an element index
// const index = findElement(inputArray, 7)
// console.log(index) // 6
// const index2 = findElement(inputArray, 15) 
// console.log(index2) // -1

// 3. Getting maximum from array
// console.log(getMax(inputArray)) // 12

// 4. Sum of neighbors
// console.log(sumOfNeighbors(inputArray)) // [6, 1, 8 19, 20, 21]

// 5. Unique 
// console.log(unique(inputArray)) // [5, 1, 0, 3, 5, 7, 12, 8, 21]

//6. New array with Uniqe elements
//console.log(getUniqueArray(inputArray)) // [5, 1, 0, 3, 5, 7, 12, 8, 21]

//7. New array with duplicated elements from inputArray
console.log(getArrayDuplicates(inputArray)) // [1, 12]