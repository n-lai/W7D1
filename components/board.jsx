const React = require('react');
const Tile = require("./tile.jsx");

const Board = React.createClass({
  render() {
    return (
      <div>
        return (this.props.board.grid.map((row, index1) => {
          return (
            <div key={index1}>
          //   row.map((tile, index2) => {
          //     return (<Tile key={index2 + 11} tile={tile} update={this.props.update}/>);
          //   });
          </div>
        );
      }));
      </div>
    );
  }
});

module.exports = Board;
