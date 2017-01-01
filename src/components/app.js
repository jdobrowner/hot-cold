import React, { Component } from 'react';
import Game from './game';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hot Cold Game</h1>
        <button className="new-game">New Game</button>
        <Game />
      </div>
    );
  }
}
