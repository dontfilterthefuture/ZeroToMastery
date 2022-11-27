// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const array = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

 let sortedArray = array.sort((a, b) => a-b);

const organizeArr = (arr) => {
  let holdingArray = [];
  arr.forEach((value, i) => {
    let tempArray = [];
    let tempValue = value;
    arr.forEach((value, i)=>{
      if (tempValue === value){
        tempArray.push(tempValue);
      } 
    })
    holdingArray.push(tempArray);
  });
  holdingArray.forEach((value, i) => {
    if(holdingArray[i].length > 1){
      holdingArray.splice([i], 1);  
    }
  }); 
  holdingArray.shift();
  holdingArray.forEach((value, i) => {
    if(holdingArray[i].length === 1){
      holdingArray[i] = holdingArray[i][0];
    }
  }) 
  return holdingArray; 
}
let organizedArray = organizeArr(sortedArray);
console.log(organizedArray);

