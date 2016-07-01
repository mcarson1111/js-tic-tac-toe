function Player(id, sym) {
  this.id = id;
  this.symbol = sym;
}

function TicTacToe() {
  this.player_one = new Player(1, '🌙');
  this.player_two = new Player(2, '⭐️');
  this.turn = this.player_one;
}

TicTacToe.prototype = {
  show: function() {
    $("#tic-tac-toe").show();

  },
  play: function(player, button) {
    if (button.text() !== '') {return}
    button.text(player.symbol);

    // if (player.id === 1) {
    //   button.addClass("moon")
    //   game.checkIfWon(board, player.symbol)
    // } else {
    //   button.addClass("star")
    //   game.checkIfWon(board, player.symbol)
    //
    // }
    // need to check here if the player has won...this should be a helper method
    // need to add a hasClass or something to each id/button to keep track of who it belongs to

    if (player.id === 1) {
      this.turn = this.player_two;
    } else {
      this.turn = this.player_one;
    }
  }
}

// this.checkIfWon = function(board, symbol) {}

$(document).on('ready', function() {
  var game = new TicTacToe();

  $('.button').on('click', function(event) {
    event.preventDefault();
    var button = $(this);
    // var board = $('#board')
    game.play(game.turn, button);

  })
})


window.onload = function() {
    document.getElementById("my_audio").play();
}
