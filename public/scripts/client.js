console.log('js loaded');

$( document ).ready( function(){
  $.ajax({
    type: 'GET',
    url: '/jokes',
    success: function(data){
      console.log( 'back from ajax call:', data );
      //well this is a mess
      for (var i = 0; i < data.length; i++) {
      $( '#container' ).append( jokesFromObject(data) );
      $( '#container' ).append( punchFromObject(data) );
      $( '#container' ).append( whoseFromObject(data) );
      }
    },
    error: function(){
      console.log( 'no worky' );
    }
  }); // end ajax


  $('#submit').on('click', function(event) {
    event.preventDefault();
    var jokeSubmission = {};

    $.ajax({
      type: 'POST',
      url: '/jokes',
      data: jokeSubmission,
      success: function(){
        console.log("success");
      },
      error: function(error){
        console.log('The "/jokes" ajax post request failed with error: ', error);
      }
    });
  });


});

//I realize this is a convoluted way to do this
function jokesFromObject (data){
  for (var i = 0; i < data.length; i++) {
    return data[i].jokeQuestion;
  }
}

function punchFromObject (data){
  for (var i = 0; i < data.length; i++) {
    return data[i].punchLine;
  }
}

function whoseFromObject (data){
  for (var i = 0; i < data.length; i++) {
    return data[i].whoseJoke;
  }
}
