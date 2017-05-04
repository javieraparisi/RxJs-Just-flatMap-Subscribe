$(function() {

  var input = $('#input');
  var results = $('#results');

  //first way to  
  var requestStream = Rx.Observable.just('https://api.github.com/users');

  var mseMetastream = requestStream
  .flatMap(function(requestUrl) {
    return Rx.Observable.fromPromise(jQuery.getJSON(requestUrl));
  });
  mseMetastream.subscribe(function(response) {
      // array?
      debugger
      return 3
  });
  mseMetastream.subscribe(function(response) {
      // array?
      debugger
      return 3
  });
  mseMetastream.subscribe(function(response) {
      // array?
      debugger
      return 3
  });
  
  mseMetastream.subscribe(function(response) {
      // array?
      debugger
      return 3
  });
  

});