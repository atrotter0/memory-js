import { MemoryGame, Tile } from './memory';
import './styles.css';

var game = new MemoryGame();
var tile = new Tile("blah", "blah");

function checkForMatch() {
  if (game.firstTile === game.secondTile) {
    $("div[name=" + game.firstTile + "]").children(".cardName").removeClass("noMatch");
    $("div[name=" + game.firstTile + "]").off();
  }
}

$(document).ready(function() {
  console.log(tile);

  $(".cell").click(function() {
    $(this).children(".cardName").show();
    if (game.clicks !== 1 ) {
      game.firstTile = $(this).attr("name");
      game.clicks++;
    } else {
      game.secondTile = $(this).attr("name");
      checkForMatch();
      $("body").addClass("blocker");
      game.firstTile = "";
      game.secondTile = "";
      game.clicks = 0;
      setTimeout (function() {
        $("body").removeClass("blocker");
      }, 1000);
      setTimeout (function() {
        $(".cardGrid").children(".cell").children(".noMatch").hide();
      }, 1000);
    }
  });
});
