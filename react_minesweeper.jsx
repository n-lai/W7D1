const React = require('react');
const ReactDOM = require('react-dom');
const Game = require('./components/game.jsx')

var Minesweeper = React.createClass({
  render() {
    return(
      <div>
        Hello Minesweeper
        <Game />
      </div>
    );
  }
});

document.addEventListener("DOMContentLoaded", () => {
  ReactDOM.render(<Minesweeper />, document.getElementById('main'));
});
