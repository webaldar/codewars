// 📌 DESCRIPTION:

//Given an array of integers your solution 
// should find the smallest integer.

// 💚 SOLUTION

findSmallestInt(args) {
    let result = 0;
    for( let argument of args){
      if(argument < result){
        result = argument;
      }
    }
    return result;
  }