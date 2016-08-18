function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = randomNumber(1, 100);

//I had some issues getting my random number function to export to animals... I only call the function once and I couldn't figure out how to call it on each post...
