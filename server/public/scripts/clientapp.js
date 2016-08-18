$(document).ready(function(){
  // console.log('this works on 5000!');
  $('#animal-submit').on('click', addAnimal);

});

function addAnimal(){
  //prevent the default form submit button stuff;
  event.preventDefault();

  var animal = {};

  animal.animal = $('#animal').val();

  console.log('New animal: ', animal);

  $.ajax({
    type: 'POST',
    url: '/animals',
    data: animal,
    success: function(){
      console.log('POST /animals works!');
      $('#inventory').empty();
      getAnimals();
    },

    error: function(){
      console.log("POST /animals did not work...");
    },
  });

}

function getAnimals(){
  $.ajax({
    type: 'GET',
    url: '/animals',
    success: function(animals) {
      console.log('GET /animals returns:', animals);

      animals.forEach(function(animal){
        var $ani = $('<p></p>');
        $ani.append('<strong>Animal name: </strong>' + animal.animal + ' ');
        $ani.append('<strong>Total number: </strong>' + animal.total + '');
        $('#inventory').append($ani);
      });
    },

    error: function(response) {
      console.log('GET /animals fail...');
    },
  });
}
