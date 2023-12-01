// 📌 DESCRIPTION:
// The function pickIt accepts 1 parameter, arr, which is an array of numbers. 
// We need to traverse arr by using a for loop. If an element is an odd number, 
// push it to the odd array, and if it's an even number, push it to the evenarray.

// I've defined two arrays odd and even in the function, and also wrote the return 
// statement. Your work is to write a for loop.

// 💚 SOLUTION

function pickIt(arr){
    var odd=[],even=[];
    console.log(arr);
    //coding here
    for(var i = 0; i < arr.lrngth; i++){
      if(arr[i] % 2 == 0){
        odd.push(arr[i]);
      } else{
        even.push(arr[i]);
      }
    }
    
    return [odd,even];
  }


    console.log(pickIt([1,2]),[[1],[2]]);
    //console.log(saleHotdogs(6));
    //console.log(n(10));