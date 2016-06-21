const React = require('react');
const Minesweeper = require("../minesweeper.js");
const Board = require("./board.jsx");
const Tile = require("./tile.jsx");


const Game = React.createClass({
  getInitialState() {
    return { board: new Minesweeper.Board(10, 10) }
  },

  updateGame() {

  },

  render() {
    return (
      <Board board={this.state.board} update={this.updateGame} />
    );
  }
});

module.exports = Game;
