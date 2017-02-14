///////////////////////
//  Front-End Logic  //
///////////////////////

// Add document ready to make sure the page is ready
$(document).ready(function(){

  // Startgame button click handler
  $("button.startgame").click(function() {
    // Parse value of input box to a number;
    var codeWidth = parseInt($("input#codewidth").val());
    // Validate if value of the input box is actually a number
    if (!isNaN(codeWidth)) {
      // Init a new game instance
      var gameInstance = new game(codeWidth);
      // Create the actual game
      gameInstance.createGame(gameInstance.codeWidth)
      gameInstance.start();
    }
  })

  // Color clickhandler

});

//////////////////
//  Game Logic  //
//////////////////

// Game Object
function game(codeWidth) {
  this.codeWidth = codeWidth;
  this.createGame = function(codeWidth) {
    for (i=0; i < 10; i++) {
      var gameLine = "<div class='flat-line'>";
      for (j=0; j < codeWidth; j++) {
        gameLine += "<div class='flat-block' style='width:" + (100/codeWidth) + "%'></div>"
      }
      gameLine += "</div>";
      $("div.board").append(gameLine);
    }
  }
  this.start = function() {
    $("div.pre-question").hide();
    $("div.game").show();
  }
  this.clear = function() {
    $("div.board").empty();
    $("div.game").hide();
    $("div.pre-question").show();
  }
  this.generateCode = function (codeWidth) {

  }
  this.active = true;
}
