import React, { Component } from 'react';
import Guess from './guess';

export default class Game extends Component {
  render() {
    return (
      <div className="game">
        <h2>you are hot</h2>
        <input type="text" />
        <Guess />
        <button type="submit">Submit Guess</button>
      </div>
    )
  }
}
