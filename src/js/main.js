//Use window.load for JS when using Materialize, document.ready doesn't work. 
$(window).load(function() {
  console.log('bippety boppety boo');
  Materialize.updateTextFields();
  $(".button-collapse").sideNav();
});
