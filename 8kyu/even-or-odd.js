// 📌 DESCRIPTION:

//Create a function that takes an integer as 
//an argument and returns "Even" for even numbers 
//or "Odd" for odd numbers.

// 💚 SOLUSHENS

function even_or_odd(number) {
    if(number % 2 == 0){
      return "Even"
    }
    return "Odd"
    
  };

  console.log(even_or_odd(1));
  console.log(even_or_odd(2));
  console.log(even_or_odd(110));
  console.log(even_or_odd(1111));