// Question 2: Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];

const targetBySum = (numArray, targetNum) => {
  const target = targetNum;
  let targetArray = [];
  let sum = 0;
  numArray.forEach(value => {
    numArray.map(value2 => {
      sum = value + value2;
      if(sum === target){
        return targetArray = [value, value2];
      } 
    }) 
  }) 
    return targetArray
}


let sumTarget = targetBySum(numbers, 23);
console.log('======>>>> this is the final array',sumTarget);
