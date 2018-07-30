import { MemoryGame, Tile } from './memory';
import './styles.css';

var game = new MemoryGame();
var tile = new Tile("blah", "blah");

function displayTile(element) {
  $(element).children(".cardName").show();
}

function checkForMatch() {
  if (game.firstTile === game.secondTile) {
    $("div[name=" + game.firstTile + "]").children(".cardName").removeClass("noMatch");
    $("div[name=" + game.firstTile + "]").off();
  }
}

function resetTilesAndClicks() {
  game.firstTile = "";
  game.secondTile = "";
  game.clicks = 0;
}

function runGameDelay() {
  $("body").addClass("blocker");
  setTimeout (function() {
    $("body").removeClass("blocker");
  }, 1000);
  setTimeout (function() {
    $(".cardGrid").children(".tile").children(".noMatch").hide();
  }, 1000);
}

$(document).ready(function() {
  console.log(tile);

  $(".tile").click(function() {
    displayTile(this);
    if (game.clicks !== game.SECOND_CLICK) {
      game.firstTile = $(this).attr("name");
      game.clicks++;
    } else {
      game.secondTile = $(this).attr("name");
      checkForMatch();
      resetTilesAndClicks();
      runGameDelay();
    }
  });
});
