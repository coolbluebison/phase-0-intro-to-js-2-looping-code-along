// Code your solutions in this file

  const gifts = ["teddy bear", "drone", "doll"];

  function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
      console.log(`Wrapped ${gifts[i]} and added a bow!`);
        }
  
    return gifts;
  }
  
  wrapGifts(gifts);


let emptyArray = [];

function writeCards(names, event) {
    for (let counter = 0; counter<names.length; counter++) {
        emptyArray.push(`Thank you, ${names[counter]}, for the wonderful ${event} gift!`);
    }
    return emptyArray;   
}


function countDown(num) {
    for (let x = num; x>=0; x--) {
        console.log(x);
    }
};




