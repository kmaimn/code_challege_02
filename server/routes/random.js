var random = function(){

  var number = randomNumber(1,100);
  return number;
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}

module.exports = random;
