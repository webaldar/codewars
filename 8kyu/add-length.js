// 📌 DESCRIPTION:
// Your task is to write a function that takes a String and 
// returns an Array/list with the length of each word added to 
// each element .
// Example(Input --> Output)

// "apple ban" --> ["apple 5", "ban 3"]
// "you will win" -->["you 3", "will 4", "win 3"]

// 💚 SOLUTION

function addLength(str) {
    let elements = str.split(' ');    
    for(let i = 0; i < elements.length; i++){      
      elements[i] = elements[i] + " " + elements[i].length;      
    }
    return elements;
    }
  console.log(addLength('apple ban'));
  console.log(addLength('you will winn'));
