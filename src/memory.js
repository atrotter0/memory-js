export function MemoryGame() {
  this.NUMBER_OF_MATCHES = 5;
  this.SECOND_CLICK = 1;
  this.tiles = [];
  this.clicks = 0;
  this.firstTile = "";
  this.secondTile = "";
  this.buildTiles();
  this.buildGameBoard();
}

MemoryGame.prototype.buildTiles = function() {
  for(var i = 0; i < this.NUMBER_OF_MATCHES; i += 0.5) {
    var number = Math.floor(i);
    var tile = new Tile(number, "dog" + number);
    this.tiles.push(tile);
  }
};

MemoryGame.prototype.buildGameBoard = function() {
  for(var i = 0; i < this.NUMBER_OF_MATCHES * 2; i++) {
    var randomTile = Math.floor(Math.random() * this.tiles.length);
    var divToAppend = "<div class='tile' name='"+ this.tiles[randomTile].matchId + "'>" +
      "<span class='cardName noMatch'>" + this.tiles[randomTile].matchId + "</span></div>";
    this.tiles.splice(randomTile, 1);
    $(".cardGrid").append(divToAppend);
  }
};

export function Tile(id, matchId) {
  this.id = id;
  this.matchId = matchId;
}
