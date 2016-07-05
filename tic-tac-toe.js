//if I want to use moon and stars again:
// function Player(id, sym) {
//   this.id = id;
//   this.symbol = sym;
// }



//want to make it responsive
//need to make it so you cant cheat
//want to keep score tally
//make reset and new game buttons
  //reset resets board, new game resets scores


function TicTacToe() {
  this.player_one = 'mulder'
  this.player_two = 'scully'
  this.turn = this.player_one;

  //if I want to use moon and stars again:
  // this.player_one = new Player(1, '🌙');
  // this.player_two = new Player(2, '⭐️');
}

TicTacToe.prototype = {

  change_turn: function(player, button) {

//if I want to use moon and stars again:
    // if (button.text() !== '') {return}
    // button.text(player.symbol);


  // this changes players turn
    if (player === 'mulder') {
      this.turn = this.player_two;
    } else {
      this.turn = this.player_one;
    }
  }
}


$(document).on('ready', function() {
  var game = new TicTacToe();


  $('.play').on('click', function(event) {
    event.preventDefault();


    console.log(game.turn)
    $(this).toggleClass(game.turn)
    var button = $(this);
    console.log(button)

    var board = $('#board')
    console.log(board)
    console.log(button)

    if (checkIfWon(board, game.turn)) {
      console.log(game)
      alert(game.turn + " won!")
      reset(board, game)
    } else {
      if (checkIfDraw(board)) {
        alert("It's a draw!")
        reset(board, game)
      }
    }

    game.change_turn(game.turn, button);

  })
})

this.checkIfWon = function(board, player) {
  console.log(player)
  console.log(board)
  var won = false
  if(board.find("1").hasClass(player) && board.find("2").hasClass(player) && board.find("3").hasClass(player)) {
    won = true
  } else if (board.find("1").hasClass(player) && board.find("4").hasClass(player) && board.find("7").hasClass(player)) {
    won = true
  } else if (board.find("1").hasClass(player) && board.find("5").hasClass(player) && board.find("9").hasClass(player)) {
    won = true
  } else if (board.find("4").hasClass(player) && board.find("5").hasClass(player) && board.find("6").hasClass(player)) {
    won = true
  } else if (board.find("7").hasClass(player) && board.find("8").hasClass(player) && board.find("9").hasClass(player)) {
    won = true
  } else if (board.find("2").hasClass(player) && board.find("5").hasClass(player) && board.find("8").hasClass(player)) {
    won = true
  } else if (board.find("3").hasClass(player) && board.find("6").hasClass(player) && board.find("9").hasClass(player)) {
    won = true
  } else if (board.find("3").hasClass(player) && board.find("5").hasClass(player) && board.find("7").hasClass(player)) {
    won = true
  }
  return won;
}

this.checkIfDraw = function(board) {
   var draw = false
   if(board.find('1').is(".mulder,.scully") && board.find('2').is(".mulder,.scully") && board.find('3').is(".mulder,.scully")) {
     if(board.find('4').is(".mulder,.scully") && board.find('5').is(".mulder,.scully") && board.find('6').is(".mulder,.scully")) {
       if(board.find('7').is(".mulder,.scully") && board.find('8').is(".mulder,.scully") && board.find('9').is(".mulder,.scully")) {
         var draw = true
       }
     }
   }
   return draw
 }

 this.reset = function(board, game) {
   //I'm setting who goes first when I initialize a new game so this isn't working
   if (game.turn === "mulder") {
     game.turn = "scully"
   } else {
     game.turn = "mulder"
   }
    console.log(board)
    var find = board.find('button')
    console.log(find)
    find.removeClass('mulder').removeClass('scully');

 }


//music
window.onload = function() {
    document.getElementById("my_audio").play();
}
