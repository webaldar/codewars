// 📌 DESCRIPTION:
// Complete function saleHotdogs/SaleHotDogs/sale_hotdogs,
//  function accepts 1 parameter:n, n is the number of hotdogs a customer 
//  will buy, different numbers have different prices (refer to the 
//  following table), return how much money will the customer spend to buy 
//  that number of hotdogs.

// number of hotdogs	price per unit (cents)
//        n < 5	            100
//  n >= 5 and n < 10	    95
//      n >= 10	            90

// 💚 SOLUTION

function saleHotdogs(n){
  let price = 0;
  if( n < 5 ){
    price = n * 100;
  }else if( n >= 5 && n < 10 ){
    price = n * 95;
  }else{
    price = n * 90;
  }
    return price;
  }

  console.log(saleHotdogs(4));
  console.log(saleHotdogs(6));
  console.log(saleHotdogs(10));