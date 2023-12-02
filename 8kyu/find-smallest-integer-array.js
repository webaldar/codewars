// 📌 DESCRIPTION:

//Given an array of integers your solution 
// should find the smallest integer.

// 💚 SOLUTION

function findSmallestInt(args) {
    let result = args[0];
    for( let argument of args){      
      if(argument < result){
        result = argument;        
      }
    }
    return result;
  }

  console.log(findSmallestInt([34, 15, 88, 2]));