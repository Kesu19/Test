var maxBar = prompt("saisir la Valeur max");
var currentBar = prompt("saisir la proportion charger");
var drawBar;
var intervalId;

var initialisation = function() {
    drawBar = document.getElementById( "drawBar" );
    drawBar.value = currentBar;
    drawBar.max = maxBar;
  }

  var displayBar = function() {
    currentBar++;
    drawBar.value = currentBar;
  }

  intervalId = setInterval( displayBar , 100 );


  var displayBar = function() {
    currentBar++;
    if (currentBar > maxBar) {
      clearInterval( intervalId );
    }
    progressBar.value = currentBar;
  }
  window.onload = function() {
    initialisation();
    intervalId = setInterval( displayBar , 100 );
  }