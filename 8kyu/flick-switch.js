// 📌 DESCRIPTION:
// Create a function that always returns true for every item
// in a given list. However, if an element is the word "flick", 
// switch to always returning the opposite boolean 
// value.

// Examples
// ['codewars', 'flick', 'code', 'wars'] ➞ [True, False, False, False]

// ['flick', 'chocolate', 'adventure', 'sunshine'] ➞ [False, False, False, False]

// ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'] ➞ [True, True, False, False, True]

// 💚 SOLUTION

function flickSwitch(arr){  
  let mySwitch = true;
  let resultArr = [];
  arr.map(function(element){
    if(element === 'flick'){
        mySwitch = !mySwitch;
        resultArr.push(mySwitch);
    } else{
        resultArr.push(mySwitch);
    }
  });    
    return resultArr;  
}

const myArr = ['bicycle', 'jarmony', 'flick', 'sheep', 'flick'];
console.log(flickSwitch(myArr));

// flickSwitch(['codewars', 'flick', 'code', 'wars']);