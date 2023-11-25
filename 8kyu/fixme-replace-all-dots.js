// 📌 DESCRIPTION:

//The code provided is supposed replace all the dots . in the specified String str with dashes -
//But it's not working properly.

// 🔟 TASK
//Fix the bug so we can all go home early.

//NOTES
//String str will never be null.

// 💚 SOLUSHENS


var replaceDots = function(str) {
    return str.replace(/\./g, '-');
  };

var result = replaceDots("one.two.three");
console.log(result);