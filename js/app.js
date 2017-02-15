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
      gameInstance.createGame(gameInstance.codeWidth);
      var generatedCode = gameInstance.generateCode(gameInstance.codeWidth);
      gameInstance.start(generatedCode);
    }
  })

  // Color clickhandler
  $(".colors").click(function(){
    debugger;
    // Get the clicked color
    var currentColor = $(this).attr("id");
    // Find the line to go into
    var lineToChange = $(".flat-line");
    // Check if there is a line excistent
    if (lineToChange.length > 0) {
      // Get the lineID
      var lineID = (lineToChange.length - 1);
      // Get the blocks within the line
      var block = $($(lineToChange[lineID]) + " .flat-block");
      //
      if (lineToChange.length > 0) {
        $(lineToChange)
      } else {
        $(lineToChange).addClass("colored-block");
        $(lineToChange).removeClass("flat-line");
      }
    }
  });

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
    // Create the Code object
    var generatedCode = [];
    for(i=0; i < codeWidth; i++) {
      // Generate the code and push it to the array
      generatedCode.push(Math.floor((Math.random() * 6) + 1));
    }
    return generatedCode;
  }
  this.active = true;
}
